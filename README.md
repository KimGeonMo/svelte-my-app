### svelte 설정하기

터미널

    npm create svelte@latest svelte-my-app
    cd svelte-my-app
    npm run install
    npm run dev
출처 : https://kit.svelte.dev/

### tailwind css 설정하기

터미널

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init tailwind.config.cjs -p

svelte.config.js 수정

    import adapter from '@sveltejs/adapter-auto';
    
    // 라인 추가
    import { vitePreprocess } from '@sveltejs/kit/vite';
    
    /** @type {import('@sveltejs/kit').Config} */
    const config = {
    kit: {
    adapter: adapter()
    },
    
    // 라인 추가 
    preprocess: vitePreprocess()
    };
    
    export default config;

tailwind.config.cjs 수정

    /** @type {import('tailwindcss').Config} */
    module.exports = {

    // 라인 추가
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    extend: {}
    },
    plugins: []
    };

app.css 생성 (/src/app.css)
    
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

layout.svelte import

    import "../app.css";

출처 : https://tailwindcss.com/docs/guides/sveltekit