import { default as Header } from './partials/Header.js';

export default {
    template: `
<header-vue pagetitle="About Us" :header="prop.header"></header-vue>
<section class="container-fluid">
    {{ content }}
</section>
    `,
    components: {
        'header-vue': Header
    },
    props: {
        prop: Object
    },
    computed: {
        content() {
            return ( this.prop.api && this.prop.api.content )? this.prop.api.content: "Default text";
        }
    },
    beforeCreate() {
        var vue = this;

        $.post( baseUrl + '/api/aboutus', {}, function( data, status ) {
            Object.assign( vue.prop, data )
        }, 'json' );
    }
}