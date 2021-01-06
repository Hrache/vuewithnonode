export default {
    template:`
        <article class="card mb-4 border-0">
            <header class="card-header border-0 h2 font-weight-bold">{{ article.title }}</header>
            <section class="card-body px-1">
                <div class="float-left mr-2 mb-2">
                    <img :src="article.img" class="img-fluid" />
                </div>
                {{ article.txt }}
            </section>
        </article>
    `,
    props: {
        article: Object
    }
}