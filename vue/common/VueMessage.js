export default {
    props: {
        prop: Object
    },
    template: `
<article id="vuemessage" :class="'shadow rounded vue-message-popup alert alert-' + prop.type + ' border border-' + prop.type">
    <span class="float-right" style="z-index: 4;" aria-hidden="true" @click="closePopup()">&times;</span>
    <main v-html="prop.text" class="pt-2"></main>
</article>
    `,
    beforeCreate() {
        if ( !this.prop || !this.prop.type || [ 'fail', 'success', 'warning' ].indexOf( this.prop.type ) < 0 ) {
            throw new Error( "Incorrect message type " + this.prop.type + "!" );
            return false;
        }

        // adding a style tag to the head tag for the VueMessage component
        newResource( 'vuemessagepopup', document.head, `
<style id="vuemessagepopup">
.vue-message-popup {
    position: fixed; top: 1em;
    z-index: 3; cursor: pointer;
    max-width: 280px; min-width: 192px;
}
</style>` );

        $( '#vuemessage' ).hide( 10 );
    },
    mounted() {
        $( '#vuemessage' ).css( {
            left: ( screen.availWidth / 2 - 140 ) + "px"
        } ).fadeIn( 750 );
    },
    methods: {
        closePopup() {
            $( '#vuemessage' ).fadeOut( 750, function() {
                $( this ).remove();
            });
        }
    }
}