export default {
  ssr: false,

  modern: "client",
  target: "static",
  router: {
    base: "/",
  },
  head: {
    title: "FactoryFive",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "An online board game",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.scss"],

  styleResources: {},
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/style-resources"],
  build: {},

  generate: {
    fallback: true, // for error pages on Netlify
  },
};
