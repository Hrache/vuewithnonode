import { default as Header } from './partials/Header.js';
import { default as RegForm } from './partials/FormRegister.js';
import { default as LoginForm } from './partials/FormLogin.js';

export default {
    props: [ 'prop' ],
    components: {
        'HeaderVue': Header,
        'RegFormVue': RegForm,
        'LoginFormVue': LoginForm
    },
    template: `
<HeaderVue pagetitle="Account" :header="prop.header" />

<section class="container">
    <div class="row">
        <p class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <RegFormVue v-if="regform" :regform="regform" />
        </p>
        <p class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <LoginFormVue v-if="prop.loginform" :loginform="prop.loginform" />
        </p>
    </div>
</section>
    `,
    data() {
        return {
            regform: {
                action: '/api/register'
            }
        }
    },
    beforeCreate() {
        Object.assign( this.prop, {
            regform: {},
            loginform: {}
        } );
    }
}