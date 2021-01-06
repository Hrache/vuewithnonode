import { default as GridSwitcher } from './common/GridSwitcher.js';
import { default as Slide } from './common/Slide.js';
import { default as ArticleLG } from './partials/ArticleLG.js';
import { default as Header } from './partials/Header.js';

export default {
    props: {
        prop: Object
    },
    template: `
        <HeaderVue :pagetitle="title" :header="prop.header" />

        <section v-if="api && api.slides">
            <SlideVue imgpath="/vue/data/imgs/" :slides="api.slides" />
        </section>

        <section class="container">
            <p class="display-1 font-weight-bold">Cars</p>

            <gridswitcher-vue imgpath="/vue/common/" :items="api.articles" v-slot:default="slotProps">
                <articlelg-vue :article="slotProps.item"></articlelg-vue>
            </gridswitcher-vue>
        </section>
    `,
    components: {
        'HeaderVue': Header,
        'articlelg-vue': ArticleLG,
        'gridswitcher-vue': GridSwitcher,
        'SlideVue': Slide
    },
    data() {
        return {
            api: {},
            title: `VueJS<span class="text-danger h1" style="writing-mode: vertical-rl; text-orientation: mixed;">without</span>NodeJS`
        }
    },
    beforeCreate() {
        var vue = this;

        $.post( dataURL + '/slides.json', {}, function( data, status )
        {
            Object.assign( vue.api, data )
        }, 'json' );

        $.post( dataURL + '/articles.json', {}, function( data, status )
        {
            Object.assign( vue.api, data )
        }, 'json' );
    }
}