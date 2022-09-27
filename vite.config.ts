import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePages from 'vite-plugin-pages';
import fs from 'fs-extra';
import matter from 'gray-matter';
import { resolve } from 'path';
import ViteMarkdown from 'vite-plugin-md';
import Components from 'unplugin-vue-components/vite';
import code from '@yankeeinlondon/code-builder';
import meta from '@yankeeinlondon/meta-builder';
import link from '@yankeeinlondon/link-builder';
import mia from 'markdown-it-anchor';
import mip from 'markdown-it-prism';
// const hljs = require('highlight.js');
import hljs from 'highlight.js';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src')}]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    VitePages({
      extensions: ["vue", "md"], // 需要包含的文件类型，这里显然是 .vue 和 .md 文件。
      pagesDir: "views", // 寻找文件的目录，这里选择了项目根目录下的 pages 目录。
      extendRoute: (route) => { // 提供一个方法，对每个文件产生路由做一些加工，这里是对 route.meta 的处理。
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, 'utf-8');
        const { data } = matter(md); // gray-matter 的功能，可以获取相关文件中的 front-matter，并将其处理为一个对象。
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });

        return route;
      }
    }),
    ViteMarkdown({
      builders: [link(), meta(), code()],
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        highlight: function(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // 使用额外的默认转义
        }
      },
      markdownItSetup: (md) => {
        md.use(mia),
        md.use(mip)
      }
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
  ],
  build: {
    target: 'es2015',
    outDir: './dist',
    cssCodeSplit: true
  }
})
