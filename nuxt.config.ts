import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        // @ts-ignore
        plugins: [
            eslintPlugin(),
        ],
    },
});
