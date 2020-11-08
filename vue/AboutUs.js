import { default as Header } from './common/Header.js';

export default {
    template: `<header-vue pagetitle="About Us" :header="prop.header"></header-vue>`,
    components: {
        'header-vue': Header
    },
    props: {
        prop: Object
    }
}