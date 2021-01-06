import { default as Header } from './partials/Header.js';
import { default as GridSwitcher } from './common/GridSwitcher.js';
import { default as SingleProduct } from './partials/SingleProduct.js';

export default {
    props: {
        prop: Object,
        header: Object,
        newProductForm: Object
    },
    template: `
        <header-vue pagetitle="Products" :header="header"></header-vue>

        <div class="modal" tabindex="-1" id="addprodmodal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add new product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form :action="newProductForm.action" method="post" enctype="multipart/form-data">
                            <input type="hidden" name="_token" :value="_token" />
                            <div class="mb-2">
                                <label for="image" class="form-label">Image</label>
                                <input type="file" name="image" id="image" class="form-control" />
                            </div>
                            <div class="mb-2">
                                <label for="price" class="form-label">Price</label>
                                <input type="number" name="price" id="price" class="form-control" :value="(newProductForm.old && newProductForm.old.price)? newProductForm.old.price: ''" />
                            </div>
                            <div class="mb-2">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" name="name" id="name" class="form-control" :value="(newProductForm.old && newProductForm.old.name)? newProductForm.old.name: ''" />
                            </div>
                        </form>
                        <div class="container p-2">
                            <button type="button" class="btn btn-primary">Create</button>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container-md container-lg container-xl">
            <div class="nav mb-2">
                <button class="nav-item btn btn-warning" @click="addProduct" type="button" data-bs-toggle="modal" data-bs-target="#addprodmodal">Add new</button>        
            </div>
            <gridswitcher-vue imgpath="/vue/common/" :items="api.products" v-slot:default="slotProps">
                <singleproduct-vue :product="slotProps.item"></singleproduct-vue>
            </gridswitcher-vue>
        </section>
    `,
    components: {
        'header-vue': Header,
        'gridswitcher-vue': GridSwitcher,
        'singleproduct-vue': SingleProduct
    },
    methods: {
        addProduct() {

        }
    },
    data() {
        return {
            api: {},
            old: this.prop.old? this.prop.old: {},
        }
    },
    beforeCreate() {

        var vue = this;

        $.post( apiurl + '/products', {}, function( data, status ) {

            Object.assign( vue.api, data )
        }, 'json' );
    }
}