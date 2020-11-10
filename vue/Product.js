import { default as Header } from './common/Header.js';
import { default as SingleProduct } from './partials/SingleProduct.js';
import { default as GridSwitcher } from './partials/GridSwitcher.js';

export default {
    template: `
<header-vue pagetitle="Products" :header="prop.header"></header-vue>

<grid-switcher-vue :items="prop.products" v-slot:default="slotProps">
    <single-product-vue :product="slotProps.item"></single-product-vue>
</grid-switcher-vue>
    `,
    components: {
        'header-vue': Header,
        'grid-switcher-vue': GridSwitcher,
        'single-product-vue': SingleProduct
    },
    props: {
        prop: Object
    }
}