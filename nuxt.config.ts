import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primeflex/primeflex.scss',
        'primevue/resources/primevue.min.css',
        'primeicons/primeicons.css',
    ],
    build: {
        transpile: ['primevue'],
    },
    vite: {
        // @ts-ignore
        plugins: [
            eslintPlugin(),
        ],
    },
});
