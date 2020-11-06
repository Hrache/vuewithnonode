export default {
    template: `
<button style="display: none;" id="welcomemodalbtn" type="button" class="btn btn-primary hide" data-toggle="modal" data-target="#welcomemodal"></button>
<div class="modal fade" id="welcomemodal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="welcomeModalLabel">&nbsp</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="modalbody" v-html="content"></div>
        </div>
    </div>
</div>
    `,
    props: {
        content: String
    }
}