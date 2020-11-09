import { default as WelcomeModal } from './WelcomeModal.js';

export default {
    template: `
<header class="row">
    <nav class="col-12 nav-top btn-group p-2">
        <router-link to="/home" class="btn">Home</router-link>
        <router-link to="/products" class="btn">Products</router-link>
        <router-link to="/aboutus" class="btn">About Us</router-link>
    </nav>
    <div class="col-12 pt-4">
        <p class="page-title" v-html="pagetitle"></p>
    </div>
</header>
<welcomemodal-vue style="display: none;" v-if="header && header.modalcontent" :content="header.modalcontent"></welcomemodal-vue>
    `,
    props: {
        pagetitle: String,
        header: Object
    },
    beforeCreate() {
        newResource( 'pageheader', document.head, `
<style id="pageheader">
    @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@800&display=swap');
    .page-title { font-family: 'Alfa Slab One', cursive; font-size: 12vmin; line-height: 1; }
    .nav-top { background-color: #007bff; color: white; font-family: 'Big Shoulders Stencil Display', cursive; }
    .nav-top > a:hover { background-color: #f0f0f0; }
    .nav-top > a:active { background-color: #0f0f0f; color: #f0f0f0; }
</style>
        ` );
    },
    components: {
        'welcomemodal-vue': WelcomeModal
    },
    mounted() {
        $( '#welcomemodal' ).fadeIn(1000);
    }
}