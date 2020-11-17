import { default as Header } from './partials/Header.js';

export default {
    template: `
<header-vue pagetitle="About Us" :header="prop.header"></header-vue>
<section class="container">
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
    }
}