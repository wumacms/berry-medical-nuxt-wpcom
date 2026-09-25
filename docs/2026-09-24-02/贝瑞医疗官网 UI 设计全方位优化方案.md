# 贝瑞医疗官网 UI 设计全方位优化方案

基于专业 UI/UX
设计师的审美标准，全面升级贝瑞医疗官网的视觉品质，塑造“高端、严谨、科技感与国际化”的核医学工程领军企业形象。

## 用户审核事项 (User Review Required)

> [!NOTE]
>
> 1. **色彩体系升级**：保留标志性品牌橙色（`#E37722`）作为活力点睛与 CTA
>    行动主色，同时引入**钛金深邃深蓝（`#0B192C`）与医工科技青蓝（`#0284C7` /
>    `#0EA5E9`）**，打破单一暖灰与白底的单调感，提升医疗高科技信任感。
> 2. **品牌 Logo 图标升级**：将目前的 FontAwesome
>    单纯黄黑“核辐射危险警示标”（`fa-radiation`）升级为专属的高端矢量徽标（结合“医疗十字防护盾 +
>    原子能量回旋环 + 空间立方”的极简医工符号），传递安全合规与精湛技术。
> 3. **打破页面版式同质化**：在“专业优势”页面中的“瑞核 V1.0
>    数字孪生系统”与首页关键技术板块引入**沉浸式深色科技主题（Dark Tech
>    Showcase）**，形成视觉强节奏与冲击力。

---

## 优化实施任务清单

### 1. 基础设计规范与色彩系统扩展 (Design Tokens)

- **[MODIFY]
  [app/assets/css/main.css](berry-medical-nuxt-wpcom-wpcom/app/assets/css/main.css)**
  - 引入深邃科技蓝 `--color-navy: #0B192C`、深暗背景
    `--color-navy-dark: #060D17`
  - 引入医工科技青蓝 `--color-tech-blue: #0284C7` 与科技光晕色
    `--color-tech-cyan: #0EA5E9`
  - 补充微光渐变、磨砂玻璃与高精边框实用类

### 2. 品牌标识与全局导航栏优化 (Header & Logo)

- **[MODIFY]
  [app/components/layout/TheNavbar.vue](berry-medical-nuxt-wpcom-wpcom/app/components/layout/TheNavbar.vue)**
  - 替换 `fa-radiation` 为全新定制的专业医疗工程 SVG
    徽标（盾牌与科技回旋微光环）
  - 修复导航链接切换时的 2px 抖动（改用绝对定位高亮条或平滑指示器）
  - 优化移动端抽屉动效与毛玻璃质感

### 3. 页脚与悬浮工具栏质感打磨 (Footer & Floating Tools)

- **[MODIFY]
  [app/components/layout/TheFooter.vue](berry-medical-nuxt-wpcom-wpcom/app/components/layout/TheFooter.vue)**
  - 同步品牌矢量 Logo
  - 动态显示当前年份，提升排版层级与信息对齐度
- **[MODIFY]
  [app/components/layout/FloatingTools.vue](berry-medical-nuxt-wpcom-wpcom/app/components/layout/FloatingTools.vue)**
  - 升级按钮微动效与毛玻璃阴影，优化移动端间距

### 4. 专属核医学场景视觉资产重塑 (Visual Assets)

- 生成/引入 3 幅专属于核医学工程的高分辨率优质渲染与真实场景图（放置于
  `app/assets/images/` 或 `public/images/`）：
  - **首屏主视觉图**：PET-CT / SPECT 高端一体化辐射防护机房与精密流线
  - **数字孪生科技图**：3D 全景数字孪生医院核医学科机房空间透视图与数据流
  - **设备与控制室图**：防辐射铅玻璃控制室与精密操作台

### 5. 核心页面视觉重构与节奏打破 (Pages Overhaul)

- **[MODIFY]
  [app/pages/index.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/index.vue)**
  - 首屏 Hero：加入微光背景光晕，右侧视觉升级为高质量真实核医学机房
  - 服务三大篇章卡片：增加流光边框、冷暖对比微标签与更强悬浮深度
  - 核心业绩数据：引入渐变大字与医工精密指标卡片
- **[MODIFY]
  [app/pages/advantages.vue](berry-medical-nuxt-wpcom-wpcom/app/pages/advantages.vue)**
  - 将“瑞核 V1.0 数字孪生系统”区块彻底升级为**深色科技感极客展台（Dark Spotlight
    Section）**，展示 3D 建筑透视、射线监测节点与能耗动态，打破白灰相间的单调感
- **[MODIFY]
  [app/components/common/StatsCard.vue](berry-medical-nuxt-wpcom-wpcom/app/components/common/StatsCard.vue)**
  - 升级数字展示排版，增加科技感下衬与图标背景微渐变

---

## 验证计划

### 1. 构建与类型验证

- 运行 `pnpm exec tsc -p .nuxt/tsconfig.node.json --noEmit` 确保无任何
  TypeScript 类型错误
- 运行 `pnpm build` 验证打包生成无告警或中断

### 2. 视觉与交互自测

- 桌面端与移动端响应式布局完整性检查
- 导航栏切换是否无布局抖动
- 各页面色彩冷暖对比度与 WCAG AA 级文字可读性检查
- 生成并查看优化前后的对比效果
