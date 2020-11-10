export default {
    template: `
<div v-show="showModal" class="modal-wrapper d-flex align-items-center justify-content-center" id="welcomemodal">
    <article class="card border-0 rounded-0 shadow">
        <header class="card-header border-0 p-0 rounded-0">
            <button class="btn float-right btn-danger rounded-0" @click="close()">&#9932;</button>
        </header>
        <div v-html="content" class="card-body d-flex align-items-center justify-content-center"></div>
    </article>
</div>
    `,
    props: {
        content: String
    },
    methods: {
        close() {
            var v = this;
            $( '#welcomemodal' ).fadeOut( 750, function() {
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
        newResource( 'welcomemodalcss', document.head, `
<style id="welcomemodalcss">
.modal-wrapper {
    max-height: 100vh; height: 100vh;
    max-width: 100vw; width: 100vw;
    position: fixed; top: 0; left: 0;
    z-index: 2;
    background: rgba( 0, 0, 0, 0.5 );
}
</style>
        ` );
        $( '#welcomemodal' ).hide( 10 );
    },
    mounted() {
        $( '#welcomemodal' ).fadeIn( 750 );
    }
}