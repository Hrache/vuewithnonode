import { default as FreeVueModal } from '../common/FreeVueModal.js';
import { default as VueMessage } from '../common/VueMessage.js';

export default {
    props: {
        pagetitle: String,
        header: Object
    },
    template: `
<header class="row">
    <nav class="col-12 nav-top btn-group p-2">
        <router-link to="/home" class="btn">Home</router-link>
        <router-link to="/products" class="btn">Products</router-link>
        <router-link to="/aboutus" class="btn">About Us</router-link>
    </nav>
    <div class="col-12 py-4">
        <p class="page-title" v-html="pagetitle"></p>
    </div>
</header>
<freevuemodal-vue v-if="header && header.modalcontent" :content="header.modalcontent"></freevuemodal-vue>
<vuemessage-vue v-if="msg.text" :prop="msg"></vuemessage-vue>
    `,
    components: {
        'freevuemodal-vue': FreeVueModal,
        'vuemessage-vue': VueMessage
    },
    data() {
        return {
             msg: window.message
        }
    },
    beforeCreate() {
        newResource( 'pageheader', document.head, `
<style id="pageheader">
    @font-face {
        font-family: 'Alfa Slab One';
        src: url('/css/fonts/AlfaSlabOne-Regular.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Big Shoulders Stencil Display';
        src: url('/css/fonts/BigShouldersStencilDisplay-Black.ttf') format('truetype');
    }
    .page-title { font-family: 'Alfa Slab One', cursive; font-size: 12vmin; line-height: 1; }
    .nav-top { background-color: #007bff; color: white; font-family: 'Big Shoulders Stencil Display', cursive; }
    .nav-top > a:hover { background-color: #f0f0f0; }
    .nav-top > a:active { background-color: #0f0f0f; color: #f0f0f0; }
</style>
        ` );
    }
}