let routus = {
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes: [{
        path: '/home',
        alias: '/',
        component: function() {
            return import( '../Home.js' );
        },
        props: {
            prop: Object
        }
    }, {
        path: '/products',
        component: function() {
            return import( '../Products.js' );
        },
        props: {
            prop: Object
        },
        beforeEnter: (to, from, next) => {


        }
    }, {
        path: '/aboutus',
        component: function() {
            return import( '../AboutUs.js' );
        },
        props: {
            prop: Object
        }
    }, {
        path: '/account',
        alias: [ '/login', '/register', '/signin', '/signup' ],
        component: function() {
            return import( '../Account.js' );
        },
        props: {
            prop: Object
        }
    }, {
        path: '/error',
        component: function() {
            return import( '../Error.js' );
        },
        props: {
            prop: Object
        }
    }]
};

const router = new VueRouter.createRouter( routus );

router.beforeEach( function( to, from, next ) {


    /**
     * Getting the token from the server through api
     * */
    $.post( dataURL + '/token', {
        '_token': _token
    }, function( data, sts ) {

        console.log( data );
        _token = data;
    } );

    /**
     * Generating main modal content
     * */
    $.post( dataURL + '/modalcontent.json', {}, function( data, status ) {

        Object.assign( to.matched[ 0 ].props.default.prop, { header: data } )
    }, 'json' )

    next();
});

export default router;
