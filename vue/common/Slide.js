export default {
    props: {
        slides: Array,
        imgpath: String
    },
    template: `
<div id="homeSlider" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li v-for="( slide, ind ) in slides" :key="ind" data-target="#homeSlider" :data-slide-to="ind" :class="slide.active? 'active': ''" ></li>
    </ol>
    <div class="carousel-inner">
        <div v-for="( slide, ind ) in slides" :class="[ 'carousel-item', slide.active? 'active': '' ]" :key="ind">
            <img :src=" imgpath + slide.img " class="d-block w-100" :alt=" slide.alt? slide.alt: '' " />
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
</div>`
}