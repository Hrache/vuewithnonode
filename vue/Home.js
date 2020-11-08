import { default as Header } from './common/Header.js';
import { default as Slide } from './common/Slide.js';
import { default as ArticleLG } from './partials/ArticleLG.js';

export default {
    template: `
<header-vue :pagetitle="title" :header="prop.header"></header-vue>
<section class="row" v-if="prop && prop.slides">
    <slide-vue :slides="prop.slides"></slide-vue>
</section>
<p v-if="prop.articles">
    <p class="display-1 font-weight-bold">Cars</p>
    <articlelg-vue v-for="(article, ind) in prop.articles" :article="article" :key="ind"></articlelg-vue>
</p>
<article v-else>There were no articles to show.</article>
    `,
    components: {
        'header-vue': Header,
        'slide-vue': Slide,
        'articlelg-vue': ArticleLG
    },
    props: {
        prop: Object
    },
    data() {
        return {
            title: `VueJS<span class="text-danger h1" style="writing-mode: vertical-rl; text-orientation: mixed;">without</span>NodeJS`
        }
    }
}