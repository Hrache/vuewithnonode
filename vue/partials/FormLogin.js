export default {
    props: [ 'loginform' ],
    template: `
        <form :action="loginform.action" method="post" class="card border-0">
            <input type="hidden" :value="loginform.csrf" name="_token" />

            <header class="card-header border-0">
                <span class="h2">Login</span>
            </header>

            <main class="card-body border-0 p-0">

                <div class="form-group">
                    <label for="login_email">Email</label>
                    <input type="email" id="email" name="email" autocomplete="" class="form-control" />
                    <small class="form-text text-muted">Some text about the email.</small>
                </div>

                <div class="form-group">
                    <label for="login_password">Password</label>
                    <input type="password" id="loginpassword" name="loginpassword" autocomplete="" class="form-control" />
                    <small class="form-text text-muted">Some text about the password.</small>
                </div>

            </main>

            <footer class="card-footer border-0 bg-white">
                <button type="submit" class="btn btn-primary float-right">Login</button>
            </footer>

        </form>
    `
}