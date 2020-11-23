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

router.beforeEach( ( to, from, next ) => {
    $.post( dataURL + '/modalcontent.json', {}, function( data, status ) {
        Object.assign( to.matched[ 0 ].props.default.prop, { header: data } )
    }, 'json' )

    next();
});

export default router;