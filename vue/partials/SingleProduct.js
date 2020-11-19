export default {
    props: {
        product: Object
    },
    template: `
<article class="container row mb-4">
    <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center align-items-center">
        <img :src="product.img? product.img: 'https://www.ddexim.org/assets/images/img-dummy-product.jpg'" :alt="product.name" class="img-fluid" />
    </div>
    <div class="col-sm-12 col-md-8 col-lg-9 col-xl-9">
        <div class="h1 border-bottom pb-2">{{ product.name }}</div>
        <div class="row mb-1" v-if="product.info && product.info.length" v-for="(detail, i) in product.info" :key="i">
            <div class="col-sm-4 col-md-3 col-lg-2 col-xl-2 font-weight-bold">{{ detail[0] }}</div>
            <div class="col-sm-8 col-md-9 col-lg-10 col-xl-10">{{ detail[1] }}</div>
        </div>
        <article v-else>No product info have been provided.</article>
    </div>
</article>`
}