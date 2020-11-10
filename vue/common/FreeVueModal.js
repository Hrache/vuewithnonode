export default {
    template: `
<div id="freevuemodal" v-show="showModal" class="modal-wrapper d-flex align-items-center justify-content-center">
    <section class="row">
        <header class="col-12">
            <button class="btn btn-danger rounded-0" @click="close()">&#9932;</button>
        </header>
        <div v-html="content" class="col-12 d-flex align-items-center justify-content-center"></div>
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
}
</style>
        ` );
        $( '#freevuemodal' ).hide( 10 );
    },
    mounted() {
        $( '#freevuemodal' ).fadeIn( 750 );
    }
}