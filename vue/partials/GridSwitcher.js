export default {
    template: `
<section v-if="items" class="row" id="gridswitcher">
    <div class="col-12 p-2 d-none d-sm-block">
        <span class="btn-group float-right rounded-0">
            <span class="btn btn-outline-primary font-weight-bold rounded-0" @click="gridSwitch(1)">1</span>
            <span class="btn btn-outline-primary font-weight-bold rounded-0" @click="gridSwitch(2)">2</span>
            <span class="btn btn-outline-primary font-weight-bold rounded-0 d-none d-sm-block d-md-none d-lg-block" @click="gridSwitch(3)">3</span>
            <span class="btn btn-outline-primary font-weight-bold rounded-0 d-none d-sm-block d-md-none d-lg-block" @click="gridSwitch(4)">4</span>
        </span>
    </div>
    <span :class="[ 'col-sm-12', gridTypes[ switches ] ]" v-for="( item, ind ) in items" :key="ind">
        <slot :item="item"></slot>
    </span>
</section>
<article v-else class="alert alert-info">No items to place in the grid switcher.</article>
    `,
    props: {
        items: Object
    },
    methods: {
        gridSwitch( cols ) {
            var vue = this;

            $( '#gridswitcher' ).fadeOut( 500, function() {
                vue.switches = parseInt( cols - 1 );

                $( this ).fadeIn( 500 );
            } );
        }
    },
    data() {
        return {
            switches: 1,
            gridTypes: [
                'col-md-12 col-lg-12 col-xl-12',
                'col-md-6 col-lg-6 col-xl-6',
                'col-md-4 col-lg-4 col-xl-4',
                'col-md-3 col-lg-3 col-xl-3'
            ]
        }
    }
}