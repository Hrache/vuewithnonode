export default {
    template: `
<p class="col-12 p-0">
    <div id="homeSlider" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(slide, ind) in slides" :key="ind" data-target="#homeSlider" :data-slide-to="ind" :class="slide.active? 'active': ''" ></li>
        </ol>
        <div class="carousel-inner">
            <div :class="['carousel-item', slide.active? 'active': '']" v-for="( slide, ind ) in slides" :key="ind">
                <img :src="'/vue/data/imgs/' + slide.img" class="d-block w-100" :alt="slide.alt? slide.alt: ''">
            </div>
        </div>
        <a class="carousel-control-prev" href="#homeSlider" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#homeSlider" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</p>
    `,
    props: {
        slides: Object
    }
}