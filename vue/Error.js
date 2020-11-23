import { default as Header } from './partials/Header.js';

export default {
    props: {
        prop: Object
    },
    components: {
        HeaderVue: Header
    },
    template: `
<HeaderVue pagetitle="Error" :header="prop.header" />

<main class="container d-flex justify-content-center">
    <article class="card">
        <section class="card-body">
            {{ content }}
        </section>
    </article>
</main>
    `,
    data() {
        return {
            content: null
        }
    },
    beforeCreate() {
        var vue = this;
        $.post( baseUrl + '/api/error', {}, function( data, status ) {
            console.log( data );
        } );
    }
}