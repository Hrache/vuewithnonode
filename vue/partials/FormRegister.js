export default {
    props: [ 'regform' ],
    template: `
<form onsubmit="beforeSubmit(event)" :action="regform.action" method="post" class="card border-0" id="regform">

    <header class="card-header border-0">
        <span class="h2">Create</span>
    </header>

    <main class="card-body border-0 p-0">

        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" autocomplete="" class="form-control" />
            <small class="form-text text-muted">Some text about the first name.</small>
        </div>

        <div class="form-group">
            <label for="surname">Last name</label>
            <input type="text" name="surname" id="surname" autocomplete="" class="form-control" />
            <small class="form-text text-muted">Some text about the last name.</small>
        </div>

        <div class="form-group">
            <label for="regemail">Email</label>
            <input type="email" name="regemail" id="regemail" autocomplete="" class="form-control" />
            <small class="form-text text-muted">Some text about the email.</small>
        </div>

        <div class="form-group">
            <label for="emailconfirm">Confirm email</label>
            <input type="email" name="emailconfirm" id="emailconfirm" autocomplete="" class="form-control" />
            <small class="form-text text-muted">Some text about the email confirm.</small>
        </div>

        <div class="form-group">
            <label for="regpassword">Password</label>
            <input type="password" name="regpassword" id="regpassword" autocomplete="" class="form-control" />
            <small class="form-text text-muted">Some text about the password.</small>
        </div>

        <div class="form-group">
            <label for="password">Confirm password</label>
            <input type="password" name="passwordconfirm" id="passwordconfirm" autocomplete="" class="form-control" />
            <small class="form-text text-muted">Some text about the password confirm.</small>
        </div>
    </main>

    <footer class="card-footer border-0 bg-white">
        <button type="submit" class="btn btn-primary float-right">Register</button>
    </footer>
</form>
    `,
    methods: {
        beforeSubmit( event )
        {
            event.target.preventDefault();
        }
    },
    mounted() {
        $( '#name' ).val( 'Max' );
        $( '#surname' ).val( 'Pyger' );
        $( '#regemail' ).val( 'maxpyger@gmail.com' );
        $( '#emailconfirm' ).val( 'maxpyger@gmail.com' );
        $( '#regpassword' ).val( '123456789' );
        $( '#passwordconfirm' ).val( '123456789' );
    }
}