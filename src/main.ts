import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import initializeContainer from './dependencies/container';

initializeContainer()
    .then((container) => {
        const pinia = createPinia();
        pinia.use(({ store }) => {
            store.$context = { ...container.cradle };
        });

        const app = createApp(App);

        app.use(pinia);
        app.use(router);

        app.provide('$cradle', container.cradle);

        app.mount('#app');
    })
    .catch((error) => {
        console.log('Error initializing container: ', error);
    });
