import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)");
}

import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'EStoreUI',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "slice-library-starter-nuxt",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: ""
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&display=swap"
    }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "plugins/cloudinary"
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [["@nuxtjs/prismic", {
    endpoint: smConfig.apiEndpoint || "",
    apiOptions: {
      routes: [{
        type: "page",
        path: "/:uid"
      }]
    }
  }], ["nuxt-sm"], ['@nuxtjs/svg-sprite']],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm", /^@storefront-ui/]
  },
  storybook: {
    addons: ["@storybook/addon-knobs/register"],
    stories: ["~/slices/**/*.stories.js"],
    parameters: {
      docs: {
        theme,
        backgrounds: {
          default: 'white',
          values: [
            { name: 'white', value: '#ffffff' },
            { name: 'gray', value: '#aaaaaa' },
          ],
        },
      }
    }
  },
  ignore: ["**/*.stories.js"],
  tailwindcss: {
    config: {
      purge: {
        content: [
          "slices/**/**.vue"
        ]
      }
    }
  },
  env: {
    cloudName: process.env.CLOUD_NAME,
    storageType: process.env.STORAGE_TYPE
  }
};