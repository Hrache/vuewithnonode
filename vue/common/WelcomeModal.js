export default {
    template: `
<div class="modal-wrapper container d-flex align-items-center justify-content-center" id="welcomemodal">
    <article class="card border-0 rounded-0 shadow">
        <header class="card-header border-0 p-0 rounded-0">
            <button class="btn float-right btn-danger rounded-0" @click="close()">&#9932;</button>
        </header>
        <div class="card-body d-flex align-items-center justify-content-center" v-html="content"></div>
    </article>
</div>`,
    props: {
        content: String
    },
    methods: {
        close() {
            $('#welcomemodal').slideUp().remove();
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
    }
}