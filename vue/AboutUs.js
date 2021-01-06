import { default as Header } from './partials/Header.js';

export default {
    template: `
        <HeaderVue pagetitle="About Us" :header="prop.header" />

        <section class="p-3">
        {{ api.content }}
        </section>
    `,
    components: {
        'HeaderVue': Header
    },
    props: {
        prop: Object
    },
    data() {
        return {
            api: {}
        }
    },
    mounted() {
        var vue = this;

        $.post( apiurl + '/aboutus', {}, function( data, status ) {
            vue.api = data.api
        }, 'json' );
    }
}