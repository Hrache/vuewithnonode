import { default as Header } from './partials/Header.js';
import { default as GridSwitcher } from './common/GridSwitcher.js';
import { default as SingleProduct } from './partials/SingleProduct.js';

export default {
    props: {
        prop: Object
    },
    template: `
<header-vue pagetitle="Products" :header="prop.header"></header-vue>

<section class="container p-1">
    <gridswitcher-vue imgpath="/vue/common/" :items="api.products" v-slot:default="slotProps">
        <singleproduct-vue :product="slotProps.item"></singleproduct-vue>
    </gridswitcher-vue>          
</section>
    `,
    components: {
        'header-vue': Header,
        'gridswitcher-vue': GridSwitcher,
        'singleproduct-vue': SingleProduct
    },
    data() {
        return {
            api: {}
        }
    },
    beforeCreate() {
        var vue = this;

        $.post( dataURL + '/products.json', {}, function( data, status ) {
            Object.assign( vue.api, data )
        }, 'json' );
    }
}