export default {
    template: `
<div id="freevuemodal" v-show="showModal" class="modal-wrapper d-flex align-items-center justify-content-center">
    <section class="container bg-white p-0 pb-2 m-0">
        <header class="container p-0">
            <button class="float-right btn btn-danger rounded-0" @click="close()">&#9932;</button>
        </header>
        <div class="container d-flex align-items-center justify-content-center" v-html="content"></div>
    </section>
</div>
    `,
    props: {
        content: String
    },
    methods: {
        close() {
            var v = this;
            $( '#freevuemodal' ).fadeOut( 750, function() {
                v.showModal = false;
                $( this ).remove();
            } );
        }
    },
    data() {
        return {
            showModal: false
        }
    },
    beforeCreate() {
        newResource( 'freevuemodalcss', document.head, `
<style id="freevuemodalcss">
.modal-wrapper {
    max-height: 100vh; height: 100vh;
    max-width: 100vw; width: 100vw;
    position: fixed; top: 0; left: 0;
    z-index: 2;
    background: rgba( 0, 0, 0, 0.5 );
    padding: 0 0;
}
</style>
        ` );
        $( '#freevuemodal' ).hide( 10 );
    },
    mounted() {
        $( '#freevuemodal' ).fadeIn( 750 );
    }
}