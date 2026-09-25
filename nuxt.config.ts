import process from "node:process";
import tailwindcss from "@tailwindcss/vite";

const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: "zh-CN",
      },
      title: "核医学场所建设一站式服务",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "keywords",
          content:
            "核医学场所建设,核医学科建设,辐射防护工程,PET-CT机房施工,SPECT机房屏蔽,衰变池系统,核医学数字孪生,核医学环评验收,铅门铅玻璃防护,贝瑞医疗",
        },
        {
          name: "description",
          content:
            "贝瑞医疗为您提供核医学场所建设全生命周期闭环解决方案，从选址规划、设计施工到环评验收、设备供应及7×24小时运维。",
        },
        { name: "author", content: "贝瑞医疗科技（郑州）有限公司" },
        { name: "format-detection", content: "telephone=no" },
        { property: "og:site_name", content: "贝瑞医疗" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_CN" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${baseURL.replace(/\/$/, "")}/favicon.ico`,
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
    routeRules: {
      "/company": { redirect: { to: "/about", statusCode: 301 } },
      "/category/product": { redirect: { to: "/cases", statusCode: 301 } },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  devServer: {
    port: 4000,
  },
});