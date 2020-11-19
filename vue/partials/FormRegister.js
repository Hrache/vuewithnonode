export default {
    props: [ 'regform' ],
    template: `
<form action="" method="post" class="card border-0">

    <header class="card-header border-0">
        <span class="h2">Create</span>
    </header>

    <main class="card-body border-0 p-2">

        <div class="form-group">
            <label for="firstname">Name</label>
            <input type="text" id="firstname" name="firstname" class="form-control" />
            <small id="firstnameHelp" class="form-text text-muted">Some text about the first name.</small>
        </div>

        <div class="form-group">
            <label for="lastname">Last name</label>
            <input type="text" id="lastname" name="lastname" class="form-control" />
            <small id="lastnameHelp" class="form-text text-muted">Some text about the last name.</small>
        </div>

        <div class="form-group">
            <label for="regemail">Email</label>
            <input type="email" id="regemail" name="regemail" class="form-control" />
            <small id="emailHelp" class="form-text text-muted">Some text about the email.</small>
        </div>

        <div class="form-group">
            <label for="emailconfirm">Confirm email</label>
            <input type="email" id="emailconfirm" name="emailconfirm" class="form-control" />
            <small id="emailconfirmHelp" class="form-text text-muted">Some text about the email confirm.</small>
        </div>

        <div class="form-group">
            <label for="regpassword">Password</label>
            <input type="password" id="regpassword" name="regpassword" class="form-control" />
            <small id="passwordHelp" class="form-text text-muted">Some text about the password.</small>
        </div>

        <div class="form-group">
            <label for="password">Confirm password</label>
            <input type="password" id="passwordconfirm" name="passwordconfirm" class="form-control" />
            <small id="passwordconfirmHelp" class="form-text text-muted">Some text about the password confirm.</small>
        </div>
    </main>
        
    <footer class="card-footer border-0 bg-white">
        <input type="submit" class="btn btn-primary float-right" />
    </footer>
</form>
    `,
}