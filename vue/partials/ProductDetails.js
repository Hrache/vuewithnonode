export default {
    template: `
<div class="row mb-1" v-if="info && info.length" v-for="(detail, i) in info" :key="i">
    <div class="col-sm-4 col-md-3 col-lg-2 col-xl-2 font-weight-bold">{{ detail[0] }}</div>
    <div class="col-sm-8 col-md-9 col-lg-10 col-xl-10">{{ detail[1] }}</div>
</div>
    `,
    props: {
        info: Object
    }
}