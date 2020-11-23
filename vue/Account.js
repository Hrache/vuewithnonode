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

<section class="container-md container-lg container-xl">
    <p class="row m-0">
        <p class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-1">
            <RegFormVue v-if="regform" :regform="regform" />
        </p>
        <p class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-1">
            <LoginFormVue v-if="prop.loginform" :loginform="prop.loginform" />
        </p>
    </p>
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