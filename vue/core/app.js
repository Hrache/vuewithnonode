import { default as router } from './router.js';

// Vue application instance
var app = Vue.createApp({
    updated() {
        this.$forceUpdate();
    }
})
.use(router)
.mount('#app');