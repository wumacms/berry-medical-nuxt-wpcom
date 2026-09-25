# 贝瑞医疗 · 核医学场所建设整体解决方案官网

<p align="center">
  <strong>贝瑞医疗科技（郑州）有限公司 · Berry Medical Technology (Zhengzhou) Co., Ltd</strong><br>
  <em>专注核医学场所建设一站式闭环服务 · 全生命周期解决方案</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-4.5.2-00DC82?style=flat-square&logo=nuxtdotjs&logoColor=white" alt="Nuxt 4" />
  <img src="https://img.shields.io/badge/Vue-3.5.43-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.3.3-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Package_Manager-pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white" alt="pnpm" />
</p>

---

## 📖 项目简介

**贝瑞医疗**官方门户网站基于 **Nuxt 4** 与 **Vue 3** 构建，结合 **Tailwind CSS
v4** 原生极速引擎开发，专为核医学场所建设领域打造的企业级展示与获客全栈平台。

网站系统化呈现了贝瑞医疗在核医学场所建设领域的综合实力，重点围绕**设计篇**、**施工篇**与**设备篇**三大专业支柱，覆盖从前期选址评估、BIM
三维深化、辐射防护施工、核仪器装备配备到 7×24 小时长效运维的全生命周期交付矩阵。

---

## 🌟 核心功能与页面导航

| 页面路由      | 对应源码文件                | 页面名称     | 核心内容与功能                                                                                       |
| :------------ | :-------------------------- | :----------- | :--------------------------------------------------------------------------------------------------- |
| `/`           | `app/pages/index.vue`       | **首页**     | 品牌视觉首屏、三大篇章导航、六大核心优势、精选产品案例轮播、最新动态资讯与在线留言入口               |
| `/about`      | `app/pages/about.vue`       | **关于我们** | 贝瑞医疗发展历程、企业使命/愿景、核心五大优势与全生命周期资质验收保障体系                            |
| `/industry`   | `app/pages/industry.vue`    | **行业背景** | 核医学行业政策红利、全球健康挑战、场所建设痛点分析与行业发展驱动力                                   |
| `/advantages` | `app/pages/advantages.vue`  | **专业优势** | 关键数据看板、六大核心能力、自主研发瑞核V1.0数字孪生智慧态势感知系统全解析                           |
| `/services`   | `app/pages/services.vue`    | **服务体系** | **01 设计篇**（选址与平面方案）、**02 施工篇**（铅/钡防护与衰变池）、**03 设备篇**（热室与核素监测） |
| `/cases`      | `app/pages/cases/index.vue` | **产品列表** | 三甲医院核医学科、PET-CT/SPECT 中心、铅防护工程及回旋加速器机房真实项目产品案例展示                  |
| `/cases/:id`  | `app/pages/cases/[id].vue`  | **产品详情** | 高保真图片缩略图轮播画廊、核心技术参数清单、详细介绍与上一篇/下一篇切换                              |
| `/news`       | `app/pages/news/index.vue`  | **新闻资讯** | 行业要闻、企业动态、政策法规解析，支持图文卡片/文章列表双视图切换与分类筛选                          |
| `/news/:id`   | `app/pages/news/[id].vue`   | **新闻详情** | 沉浸式图文排版、导语摘要、富文本内容渲染、文章标签与上/下一篇快速切换                                |
| `/search`     | `app/pages/search.vue`      | **站内搜索** | 智能全站搜索，支持关键词匹配、高亮显示、热门搜索推荐与空状态引导                                     |
| `/contact`    | `app/pages/contact.vue`     | **联系我们** | 微信二维码扫码直连、常见问题 FAQ 手风琴列表、商务对接信息与在线留言表单（直连后端 API）              |
| `/privacy`    | `app/pages/privacy.vue`     | **隐私协议** | 依据《个人信息保护法》定制的合规声明、信息收集与使用细则（带侧边粘性目录导航）                       |

---

## 🎨 原生 Tailwind CSS v4 原子化改造

本项目已完成**从传统 WordPress WPCOM 混合样式体系到 100% 原生 Tailwind CSS v4
的彻底蜕变**：

- **代码大瘦身**：全局入口样式表
  [main.css](/berry-medical-nuxt-wpcom/app/assets/css/main.css) 从原本臃肿的
  **1,021 行彻底精简至 66 行**（降幅达 **93.5%**），消除了全部废弃的历史 BEM
  选择器与冗余 Base64 编码背景。
- **100%
  原子化组件**：全站所有页面、业务卡片、网格列表、导航头尾、侧边栏及按钮全面转换为纯原生
  Tailwind 工具类，0 作用域污染，彻底消除样式覆盖所用的 `!important` 补丁。
- **1:1 像素级还原**：精确还原了 WPCOM
  模块的视觉黄金比例、科技蓝渐变、字号行高与悬浮微交互，确保桌面端与移动端完美自适应。
- **极速构建与预渲染**：
  - 生产全量构建（`pnpm build`）仅需 **478ms**；
  - 静态全站预渲染（`pnpm generate`）以 **0.94s 极速完成全站 49 条路由**的静态
    HTML 生成，0 报错、0 警告。

> 📖 **详细改造方案与测试对比报告**：请参阅
> [docs/2026-09-25-02/贝瑞医疗官网原生 Tailwind CSS 改造方案与结果报告.md](/berry-medical-nuxt-wpcom/docs/2026-09-25-02/%E8%B4%9D%E7%91%9E%E5%8C%BB%E7%96%97%E5%AE%98%E7%BD%91%E5%8E%9F%E7%94%9F%20Tailwind%20CSS%20%E6%94%B9%E9%80%A0%E6%96%B9%E6%A1%88%E4%B8%8E%E7%BB%93%E6%9E%9C%E6%8A%A5%E5%91%8A.md)。

---

## 🧩 100% 数据驱动架构（Data-Driven Configuration）

全站已彻底消除 Vue
模板与单文件组件内部写死的静态文案、重复卡片与常量字符串，构建了标准化的
`app/data/` 结构化数据中心：

- **数据与视图彻底解耦**：轮播图、核心服务卡片、关于我们介绍、核心优势、常见问题
  FAQ、服务篇章设计原则、行业挑战与驱动力、页脚导航矩阵等全部归集于独立的数据模块中。
- **改文案 0 侵入 Vue 代码**：日常文案、电话、链接与数据增删只需修改
  `app/data/*.ts`，杜绝因修改文字误伤 CSS 样式或破坏 DOM 结构的风险。
- **全严格 TypeScript
  类型约束**：所有数据项均具备对应的接口定义与强类型校验，代码补全与重构体验极佳。

> 📖 **详细配置化改造分析与实施报告**：请参阅
> [docs/2026-09-25-03/贝瑞医疗官网数据配置化改造方案与总结报告.md](/berry-medical-nuxt-wpcom/docs/2026-09-25-03/%E8%B4%9D%E7%91%9E%E5%8C%BB%E7%96%97%E5%AE%98%E7%BD%91%E6%95%B0%E6%8D%AE%E9%85%8D%E7%BD%AE%E5%8C%96%E6%94%B9%E9%80%A0%E6%96%B9%E6%A1%88%E4%B8%8E%E6%80%BB%E7%BB%93%E6%8A%A5%E5%91%8A.md)。

---

## 🛠️ 技术栈架构

- **核心框架**：[Nuxt 4](https://nuxt.com/) (`^4.5.2`) +
  [Vue 3](https://vuejs.org/) (`^3.5.43`) - 现代 Composition API 驱动
- **构建工具**：[Vite 8](https://vite.dev/) - 毫秒级冷启动与 HMR 热更新
- **轮播引擎**：[Embla Carousel](https://www.embla-carousel.com/) (`embla-carousel-vue` + `embla-carousel-autoplay`) - 轻量物理级无缝轮播引擎
- **样式方案**：[Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`
  原生驱动) + `@theme` 品牌自研色系与设计规范
- **图标系统**：[Font Awesome Free](https://fontawesome.com/) (`^7.3.1`)
- **开发语言**：[TypeScript](https://www.typescriptlang.org/) -
  全严格模式与类型安全校验
- **服务端引擎**：[Nitro](https://nitro.unjs.io/) - 内置服务端轻量 API
  (`/server/api/contact.post.ts`)
- **包管理器**：[pnpm](https://pnpm.io/) - 高效依赖解析与存储空间优化

---

## 📁 项目目录结构

```text
berry-medical-nuxt-wpcom/
├── app/                        # Nuxt 4 应用前端主目录
│   ├── assets/                 # 静态资产与样式表
│   │   └── css/main.css        # Tailwind CSS v4 核心入口 (精简至 66 行)
│   ├── components/             # 可复用 Vue 组件 (100% 原生 Tailwind)
│   │   ├── common/             # 通用组件 (SectionHeader, PageBanner, SidebarWidget, AppLogo, FloatingTools)
│   │   ├── home/               # 首页专属组件 (HeroSlider, ServiceFeatures, ProductShowcase, AboutPreview, NewsSection, ContactSection)
│   │   └── layout/             # 布局骨架组件 (TheNavbar, TheFooter)
│   ├── composables/            # Vue 组合式函数 (useJsonLd, useContactForm, useAsset 等)
│   ├── data/                   # 本地结构化数据中心 (home, about, contact, industry, services, cases, news, advantages, navigation)
│   ├── layouts/                # 布局系统 (default 导航与页脚)
│   ├── pages/                  # 基于文件系统的全站响应式页面 (100% 原生 Tailwind + 数据驱动)
│   ├── types/                  # 全局 TypeScript 接口定义
│   ├── app.vue                 # 根组件
│   └── router.options.ts       # 路由行为配置 (平滑滚动等)
├── docs/                       # 项目架构与优化报告文档
│   ├── 2026-09-25-01/          # 源码深度优化分析报告
│   ├── 2026-09-25-02/          # 原生 Tailwind CSS 改造方案与结果报告
│   ├── 2026-09-25-03/          # 贝瑞医疗官网数据配置化改造方案与总结报告
│   └── 2026-09-25-04/          # 首页轮播图迁移至 Embla Carousel 改造报告
├── public/                     # 公共静态资产 (favicon, logo, 二维码等)
├── server/                     # 服务端 Nitro 模块
│   └── api/                    # 后端 API 接口 (/api/contact 留言提交)
├── nuxt.config.ts              # Nuxt 核心工程配置文件
├── package.json                # 项目依赖与运行脚本
├── pnpm-lock.yaml              # pnpm 依赖锁文件
├── tsconfig.json               # TypeScript 配置文件
└── .gitignore                  # Git 忽略配置
```

---

## 🚀 快速上手与本地开发

### 环境要求

- **Node.js**: `>= 18.20.0` 或 `20.x` / `22.x`
- **Package Manager**: [pnpm](https://pnpm.io/) `>= 8.x` (推荐)

### 1. 安装项目依赖

```bash
pnpm install
```

### 2. 启动本地开发服务

```bash
pnpm dev
```

本地服务默认运行在：`http://localhost:4000`（带热更新 HMR 与 Nuxt DevTools）。

### 3. 构建生产版本

```bash
# 生成服务端生产包 (.output 产物)
pnpm build

# 本地预览已构建的生产版本
pnpm preview
```

### 4. 静态站点生成 (SSG)

若需要部署为纯静态 HTML 页面（如托管至 Nginx / 对象存储）：

```bash
pnpm generate
```

构建产物将保存在 `.output/public` 目录中。

---

## ⚙️ 核心配置说明

### 开发端口配置

在 `nuxt.config.ts` 中已预设本地服务端口为 `4000`：

```ts
export default defineNuxtConfig({
  devServer: {
    port: 4000,
  },
  // ...
});
```

### SEO 与元数据管理

每个页面均通过 Nuxt 的 `useSeoMeta` 统一管理 `title`、`description` 及 Open
Graph 分享标签，确保在百度、谷歌等主流搜索引擎中具备优良的收录与排名表现。

---

## 🏢 企业联系信息

- **公司名称**：贝瑞医疗科技（郑州）有限公司 (Berry Medical Technology Co., Ltd)
- **服务热线**：`18503878846` / `13215991477`
- **商务邮箱**：`530051528@qq.com`
- **官方网址**：[http://www.berrymedical.com.cn](http://www.berrymedical.com.cn)
- **公司地址**：河南省郑州市高新技术产业开发区瑞达路睿达广场 1 栋 14 层

---

## 📄 授权与许可

本项目代码及相关知识产权归 **贝瑞医疗科技（郑州）有限公司**
所有。未经授权许可，不得随意用于商业化分发或非授权使用。
