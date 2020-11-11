import { default as GridSwitcher } from './common/GridSwitcher.js';
import { default as Header } from './common/Header.js';
import { default as Slide } from './common/Slide.js';
import { default as ArticleLG } from './partials/ArticleLG.js';

export default {
    props: {
        prop: Object
    },
    components: {
        'header-vue': Header,
        'slide-vue': Slide,
        'articlelg-vue': ArticleLG,
        'grid-switcher-vue': GridSwitcher
    },
    data() {
        return {
            title: `VueJS<span class="text-danger h1" style="writing-mode: vertical-rl; text-orientation: mixed;">without</span>NodeJS`
        }
    },
    template: `
<header-vue :pagetitle="title" :header="prop.header"></header-vue>

<section class="container-fluid p-0 m-0" v-if="prop && prop.slides">
    <slide-vue :slides="prop.slides"></slide-vue>
</section>

<p class="display-1 font-weight-bold">Cars</p>

<grid-switcher-vue :items="prop.articles" v-slot:default="slotProps">
    <articlelg-vue :article="slotProps.item"></articlelg-vue>
</grid-switcher-vue>
    `
}