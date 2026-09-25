# 贝瑞医疗官网 SEO 全方位优化实施方案

全面完善贝瑞医疗官网的搜索引擎优化（SEO）与社交媒体传播（Social
Share）体系，提升百度、360、Google
等搜索引擎的收录效果与关键词排名，增强在微信等社交场景下的卡片展现效果。

## 用户审核事项 (User Review Required)

> [!NOTE]
>
> 1. **网站主域名约定**：SEO 规范链接及 Sitemap 将默认采用公司官网域名
>    `https://www.berrymedical.com.cn`，支持 GitHub Pages 子路径环境兼容。
> 2. **百度及国内搜索引擎侧重**：针对 B2B
>    核医学工程、辐射防护领域，在各页面全量补充国内搜索引擎重视的 `keywords`
>    核心词库。

---

## 优化实施任务清单

### 1. 爬虫抓取与站点地图体系 (Sitemap & Robots)

- **[NEW] Sitemap 生成**：引入 `@nuxtjs/sitemap`，在静态构建（SSG）时全量输出
  `sitemap.xml`，包括动态新闻文章页 `/news/1`、`/news/2` 等。
- **[MODIFY]
  [robots.txt](berry-medical-nuxt-wpcom-wpcom/public/robots.txt)**：更新爬虫访问控制，声明
  `Sitemap: https://www.berrymedical.com.cn/sitemap.xml`，并允许所有正常抓取。

### 2. 全局 SEO 与元数据体系 (Global Nuxt SEO)

- **[MODIFY]
  [nuxt.config.ts](berry-medical-nuxt-wpcom-wpcom/nuxt.config.ts)**：
  - 配置 `titleTemplate: '%s · 贝瑞医疗'`，规范全站标题后缀层级；
  - 增加全站兜底 `keywords`、`og:site_name`、`og:type`、`og:locale`；
  - 增加预设规范链接（Canonical URL）与移动端适配标签。

### 3. 页面级精细化 TDK & 社交分享卡片 (Page-level SEO & Open Graph)

- **[MODIFY] 核心页面**（补齐独立 Title、精准
  Keywords、Description、og:title、og:description、og:image、og:url）：
  - [app/pages/index.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/index.vue)（首页）
  - [app/pages/services.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/services.vue)（服务内容：设计/施工/设备/环评验收）
  - [app/pages/cases.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/cases.vue)（业绩介绍：30+标杆项目）
  - [app/pages/advantages.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/advantages.vue)（专业优势：六大能力/数字孪生）
  - [app/pages/company.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/company.vue)（企业简介：品牌背景）
  - [app/pages/industry.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/industry.vue)（行业背景：精准医疗）
  - [app/pages/contact.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/contact.vue)（联系我们：方案咨询）
  - [app/pages/news/index.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/news/index.vue)（新闻列表）
  - [app/pages/news/[id].vue](berry-medical-nuxt-wpcom-wpcom/app/pages/news/[id].vue)（新闻详情：完善动态
    TDK 与社交分享）
  - [app/pages/privacy.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/privacy.vue)（隐私政策：合规与
    noindex 权衡）

### 4. 结构化微数据 (Schema.org JSON-LD Rich Snippets)

- **[NEW]
  [app/composables/useJsonLd.ts](berry-medical-nuxt-wpcom-wpcom/app/composables/useJsonLd.ts)**：提供便捷的
  JSON-LD 生成工具。
- **企业知识图谱 (MedicalBusiness /
  Organization)**：在首页和企业页注入企业法人、营业执照注册地（郑州高新区）、联系电话、官方服务领域，利于搜索引擎呈现品牌权威知识卡片。
- **常见问题富摘要 (FAQPage)**：在联系我们页将 4 条高价值核医学问答转换为
  Schema.org `FAQPage`，在搜索结果中直接生成可展开的问答下拉框。
- **新闻文章结构化 (NewsArticle /
  Article)**：在新闻详情页输出标题、封面、发布日期、作者，提高在搜索引擎资讯流中的权威收录。

### 5. 错误拦截与防死链机制 (Custom 404 Page)

- **[NEW]
  [app/error.vue](berry-medical-nuxt-wpcom-wpcom/app/error.vue)**：构建与整站视觉设计系统统一的
  404 错误页，返回 404 HTTP
  状态码并提供“返回首页”、“查看服务”、“联系我们”等清晰导航，防止蜘蛛因死链流失。

### 6. 语义化与图片 Alt 标签修复

- 修正
  [news/[id].vue](berry-medical-nuxt-wpcom-wpcom/app/pages/news/[id].vue)
  中的 `alt="背景图"` 为 `:alt="currentArticle.title"`。
- 校验并补齐核心插图的语义化 Alt 说明。

---

## 验证计划

### 自动化构建验证

1. 运行 `pnpm build`（或 `pnpm generate`）检验 Nuxt 4 编译与静态预渲染，确认生成
   `.output/public/sitemap.xml`。
2. 检查输出的 HTML 文件中 `<head>` 的 TDK、Open Graph、Canonical 和
   `<script type="application/ld+json">` 是否正确内联渲染。

### 功能与语义验证

1. 验证 `sitemap.xml` 包含所有静态页面及动态新闻页面路由。
2. 验证 `robots.txt` 正确链接至 `sitemap.xml`。
3. 验证访问不存在的页面时优雅展示自定义 404 页面。
