export default {
    template:`
<transition enter-active-class="fade-in-left" leave-active-class="fade-out-left">
<article class="card mb-4 border-0" v-show="showGridItem">
    <header class="card-header border-0 h2 font-weight-bold">{{ article.title }}</header>
    <section class="card-body">
        <div class="float-left mr-4 mb-4">
            <img :src="article.img" width="310" class="img-fluid" />
        </div>
        {{ article.txt }}
    </section>
</article>
</transition>
    `,
    props: {
        article: Object,
        showGridItem: Boolean
    }
}