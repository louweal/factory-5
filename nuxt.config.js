export default {
  ssr: false,

  modern: "client",
  target: "static",
  router: {
    base: "/",
  },
  head: {
    title: "Factory 5",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A web3 board game!",
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
    routes: [
      "/post/jambo-bark-end-developer",
      "/post/helix-hedera-hackathon-2022",
    ],
  },
};
