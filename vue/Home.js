import { default as Header } from './common/Header.js';
import { default as Slide } from './common/Slide.js';

export default {
    template: `
<header-vue :pagetitle="title" :header="prop.header"></header-vue>
<section class="row" v-if="prop && prop.slides">
    <slide-vue :slides="prop.slides"></slide-vue>
</section>
    `,
    components: {
        'header-vue': Header,
        'slide-vue': Slide
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