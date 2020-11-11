export default {
    template: `
<section v-show="items" class="container-fluid d-none d-md-block">
    <span class="btn-group rounded-0 my-2">
        <span class="btn btn-secondary font-weight-bold rounded-0" @click="gridSwitch(1)">
            <img src="vue/imgs/grid-1-col.png" width="16" />
        </span>
        <span class="btn btn-secondary font-weight-bold rounded-0" @click="gridSwitch(2)">
            <img src="vue/imgs/grid-2-col.png" width="16" />
        </span>
        <span class="btn btn-secondary font-weight-bold rounded-0 d-none d-lg-block d-xl-block" @click="gridSwitch(3)">
            <img src="vue/imgs/grid-3-col.png" width="16" />
        </span>
        <span class="btn btn-secondary font-weight-bold rounded-0 d-none d-lg-block d-xl-block" @click="gridSwitch(4)">
            <img src="vue/imgs/grid-4-col.png" width="16" />
        </span>
    </span>
</section>

<section v-if="items" id="grid" class="row">
    <span :class="[ 'col-sm-12', gridTypes[ switches ] ]" :key="ind" v-for="( item, ind ) in items">
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

            $( '#grid' ).fadeOut( 500, function() {
                vue.switches = parseInt( cols - 1 );

                $( this ).fadeIn( 500 );
            } );
        }
    },
    data() {
        return {
            switches: 0,
            gridTypes: [
                'col-md-12 col-lg-12 col-xl-12',
                'col-md-6 col-lg-6 col-xl-6',
                'col-md-4 col-lg-4 col-xl-4',
                'col-md-3 col-lg-3 col-xl-3'
            ]
        }
    }
}