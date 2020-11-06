import { default as Header } from './common/Header.js';
import { default as ProductDetails } from './partials/ProductDetails.js';

export default {
    template: `
<header-vue pagetitle="Products" :header="prop.header"></header-vue>
<article v-if="prop.products && prop.products.length" v-for="(product, ind) in prop.products" :key="ind" class="container row mb-4">
    <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center align-items-center">
        <img :src="product.img? product.img: 'https://www.ddexim.org/assets/images/img-dummy-product.jpg'" :alt="product.name" class="img-fluid" />
    </div>
    <div class="col-sm-12 col-md-8 col-lg-9 col-xl-9 p-4">
        <div class="h1 border-bottom pb-2">{{ product.name }}</div>
        <product-details-vue :info="product.info"></product-details-vue>
    </div>
</article>
<h1 v-else>Sorry, there was no product info.</h1>
    `,
    components: {
        'header-vue': Header,
        'product-details-vue': ProductDetails
    },
    props: {
        prop: Object
    }
}