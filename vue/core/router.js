var dataURL = '/vue/data';
let routus = {
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes: [{
        path: '/home',
        alias: '/',
        component: function() {
            return import( '../Home.js' );
        },
        beforeEnter( to, from ) {
            $.post( dataURL + '/slides.json', {}, function( data, status ) {
                Object.assign( to.matched[ 0 ].props.default.prop, data )
            }, 'json' );

            $.post( dataURL + '/articles.json', {}, function( data, status ) {
                Object.assign( to.matched[ 0 ].props.default.prop, data )
            }, 'json' );
        },
        props: {
            prop: Object
        }
    }, {
        path: '/products',
        component: function() {
            return import( '../Product.js' );
        },
        beforeEnter( to, from ) {
            $.post( dataURL + '/products.json', {}, function( data, status ) {
                Object.assign( to.matched[ 0 ].props.default.prop, data )
            }, 'json' );
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