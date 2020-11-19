export default {
    props: [ 'loginform' ],
    template: `
<form action="" method="post" class="card border-0">

    <header class="card-header border-0">
        <span class="h2">Login</span>
    </header>

    <main class="card-body border-0 p-2">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" class="form-control" />
            <small id="emailHelp" class="form-text text-muted">Some text about the email.</small>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" class="form-control" />
            <small id="passwordHelp" class="form-text text-muted">Some text about the password.</small>
        </div>
    </main>
        
    <footer class="card-footer border-0 bg-white">
        <input type="submit" class="btn btn-primary float-right" />
    </footer>
    
</form>
    `
}