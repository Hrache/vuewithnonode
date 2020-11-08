export default {
    template:`
<article class="card mb-4 border-0" v-if="article">
    <header class="card-header border-0 h2 font-weight-bold">{{ article.title }}</header>
    <section class="card-body">
        <div class="float-left mr-4 mb-4">
            <img :src="article.img" width="256" />
        </div>
        {{ article.txt }}
    </section>
</article>
<p v-else>No content have been provided for the article to be shown.</p>
    `,
    props: {
        article: Object
    }
}