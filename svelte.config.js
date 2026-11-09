import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            base: process.env.BASE_PATH ?? ''
        },
        prerender: {
            handleHttpError: process.env.BASE_PATH ? 'warn' : 'fail'
        }
    }
};

export default config;