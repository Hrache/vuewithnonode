export default {
    template: `
<transition enter-active-class="fade-in" leave-active-class="fade-out">
<div v-if="showModal" class="modal-wrapper container d-flex align-items-center justify-content-center" id="welcomemodal">
    <article class="card border-0 rounded-0 shadow">
        <header class="card-header border-0 p-0 rounded-0">
            <button class="btn float-right btn-danger rounded-0" @click="close()">&#9932;</button>
        </header>
        <div v-html="content" class="card-body d-flex align-items-center justify-content-center"></div>
    </article>
</div>
</transition>
    `,
    props: {
        content: String
    },
    data() {
        return {
            showClose: true
        }
    },
    methods: {
        close() {
            this.showClose = false;
            setTimeout( function() {
                $('#welcomemodal').remove();
            }, 1000);
        }
    },
    computed: {
        showModal() {
            return this.content && this.showClose? true: false
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