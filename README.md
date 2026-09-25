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

| 页面路由      | 对应源码文件               | 页面名称     | 核心内容与功能                                                                                       |
| :------------ | :------------------------- | :----------- | :--------------------------------------------------------------------------------------------------- |
| `/`           | `app/pages/index.vue`      | **首页**     | 品牌视觉首屏、三大篇章导航、六大核心优势、精选落地工程、最新资讯与在线咨询入口                       |
| `/industry`   | `app/pages/industry.vue`   | **行业背景** | 核医学行业政策红利、场所建设痛点分析、国家标准与合规发展趋势                                         |
| `/company`    | `app/pages/company.vue`    | **企业简介** | 贝瑞医疗发展历程、企业使命/愿景、专家顾问团队与专业资质荣誉                                          |
| `/advantages` | `app/pages/advantages.vue` | **专业优势** | 资质保障、全闭环交付、BIM 三维管综、合规经验与运维响应四大核心壁垒                                   |
| `/services`   | `app/pages/services.vue`   | **服务内容** | **01 设计篇**（选址与平面方案）、**02 施工篇**（铅/钡防护与衰变池）、**03 设备篇**（热室与核素监测） |
| `/cases`      | `app/pages/cases.vue`      | **典型业绩** | 三甲医院核医学科、PET-CT/SPECT 中心、放疗科及回旋加速器机房真实项目工程案例展示                      |
| `/news`       | `app/pages/news/index.vue` | **新闻资讯** | 行业要闻、企业动态、政策标准法规解析，支持分类标签快速筛选                                           |
| `/news/:id`   | `app/pages/news/[id].vue`  | **新闻详情** | 沉浸式图文排版、富文本内容渲染、上/下一篇快速切换、侧边栏精选推荐                                    |
| `/contact`    | `app/pages/contact.vue`    | **联系我们** | 商务对接电话、官方邮箱、线下办公地址与在线咨询表单（直连后端 API）                                   |
| `/privacy`    | `app/pages/privacy.vue`    | **隐私协议** | 依据《个人信息保护法》定制的合规声明与数据保护细则                                                   |

---

## 🛠️ 技术栈架构

- **核心框架**：[Nuxt 4](https://nuxt.com/) (`^4.5.2`) +
  [Vue 3](https://vuejs.org/) (`^3.5.43`) - Composition API 驱动
- **构建工具**：[Vite 8](https://vite.dev/) - 闪电般的冷启动与 HMR 热更新
- **样式方案**：[Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`
  原生集成) + 自定义品牌色谱
- **图标系统**：[Font Awesome Free](https://fontawesome.com/) (`^7.3.1`) +
  [nuxt-icons](https://github.com/gitFoxCode/nuxt-icons)
- **开发语言**：[TypeScript](https://www.typescriptlang.org/) -
  全面开启严格模式与索引安全校验
- **后端引擎**：[Nitro](https://nitro.unjs.io/) - 内置服务端轻量 API
  (`/server/api/contact.post.ts`)
- **包管理器**：[pnpm](https://pnpm.io/) - 高效依赖解析与硬链接空间节省

---

## 📁 项目目录结构

```text
berry-medical-nuxt-wpcom/
├── app/                        # Nuxt 4 应用前端主目录
│   ├── assets/                 # 静态资产与样式表
│   │   └── css/                # Tailwind CSS 入口 (main.css)
│   ├── components/             # 可复用 Vue 组件
│   │   ├── common/             # 通用组件 (PageHero, SectionHeader, CtaBanner 等)
│   │   └── news/               # 新闻专用组件 (NewsCard, NewsSidebar 等)
│   ├── composables/            # Vue 组合式函数
│   ├── data/                   # 本地结构化数据源 (services, cases, news, advantages 等)
│   ├── layouts/                # 布局系统 (default 导航与页脚)
│   ├── pages/                  # 基于文件系统的动态路由页面
│   ├── types/                  # 全局 TypeScript 接口定义 (index.ts)
│   ├── app.vue                 # 根组件
│   └── router.options.ts       # 路由配置 (平滑滚动等)
├── docs/                       # 项目业务文档与资料 (PPT 原始内容整理)
├── public/                     # 公共静态资源 (favicon, logo, 图标等)
├── server/                     # 服务端与 Nitro API 模块
│   └── api/                    # 后端接口 (如 /api/contact 留言提交)
├── nuxt.config.ts              # Nuxt 核心工程配置文件 (端口设置、模块注册等)
├── package.json                # 项目依赖与运行脚本
├── pnpm-lock.yaml              # pnpm 锁定依赖版本文件
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
