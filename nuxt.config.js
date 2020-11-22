import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)");
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Prismstore Components",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Prismstore slice library"
    }],
    link: [{
      rel: "icon",
      type: "image/png",
      href: "/logo.png"
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
    "@nuxtjs/sitemap",    
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

  storybook: {
    modules: {
      exclude: [
        '@nuxtjs/svg-sprite'
      ]
    },
    stories: [
      "~/components/**/*.stories.js",
      "~/slices/**/*.stories.js"
    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm", /^@storefront-ui/]
  },
  sitemap: {
    hostname: process.env.APP_URL,
    gzip: true,
    exclude: []
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