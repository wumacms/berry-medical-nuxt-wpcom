<script setup lang="ts">
import { companyContact } from "~/data/navigation";

const { setCanonical, SITE_URL } = useJsonLd();
setCanonical("/privacy");

useSeoMeta({
  title: "隐私政策 - 贝瑞医疗",
  description: "贝瑞医疗高度重视您的个人信息保护。本政策说明我们如何收集、使用、存储和保护您的个人信息，以及您所享有的权利。",
  ogTitle: "隐私政策 - 贝瑞医疗",
  ogDescription: "贝瑞医疗高度重视您的个人信息保护。本政策说明我们如何收集、使用、存储和保护您的个人信息，以及您所享有的权利。",
  ogUrl: `${SITE_URL}/privacy`,
});

const menuItems = [
  { id: "collect", title: "一、我们收集的信息" },
  { id: "use", title: "二、信息的使用方式" },
  { id: "share", title: "三、信息的共享与披露" },
  { id: "store", title: "四、信息的存储与保护" },
  { id: "rights", title: "五、您的法定权利" },
  { id: "contact", title: "六、联系我们" },
];
</script>

<template>
  <div class="page-privacy">
    <!-- Top Banner & Breadcrumbs (WPCOM Module 7 Style) -->
    <PageBanner title="隐私政策" description="贝瑞医疗高度重视用户个人信息安全与隐私保护"
      bg-image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      :breadcrumbs="[{ label: '隐私政策' }]" />

    <div class="wpcom-container mb-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- 侧边目录 -->
        <aside class="lg:col-span-3 bg-white border border-gray-200 rounded-sm p-5 sticky top-24">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-[#206be7] mb-3 pb-2 border-b border-gray-100">
            目录导航
          </h4>
          <ul class="space-y-2 text-xs text-gray-600 list-none p-0 m-0">
            <li v-for="item in menuItems" :key="item.id">
              <a :href="`#${item.id}`" class="block py-1 hover:text-[#206be7] transition">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </aside>

        <!-- 正文 -->
        <main class="lg:col-span-9 bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-xs entry-content">
          <p class="text-xs text-gray-400 mb-6">更新日期：2026年9月23日</p>

          <section id="collect" class="mb-8 scroll-mt-24">
            <h2>一、我们收集的信息</h2>
            <p>
              在您访问本网站、使用在线留言咨询表单时，我们可能会收集您主动提供的个人信息，包括您的姓名、联系电话、电子邮箱以及您所填写的咨询需求内容。这些信息仅用于与您沟通核医学场所建设业务合作。
            </p>
          </section>

          <section id="use" class="mb-8 scroll-mt-24">
            <h2>二、信息的使用方式</h2>
            <p>
              我们收集的信息将严格用于为您提供售前咨询、技术方案沟通、项目选址评估及合同履行，绝不会将您的个人隐私信息出租、出售或泄露给任何第三方商业机构。
            </p>
          </section>

          <section id="share" class="mb-8 scroll-mt-24">
            <h2>三、信息的共享与披露</h2>
            <p>
              除非获得您的明确授权或遵循法律法规、法定监管机构的强制要求，贝瑞医疗不会向第三方共享您的个人信息。
            </p>
          </section>

          <section id="store" class="mb-8 scroll-mt-24">
            <h2>四、信息的存储与保护</h2>
            <p>
              我们采用符合行业标准的安全技术措施与管理手段保护您的信息，防止数据遭到未经授权的访问、泄露、篡改或毁损。
            </p>
          </section>

          <section id="rights" class="mb-8 scroll-mt-24">
            <h2>五、您的法定权利</h2>
            <p>
              按照相关法律法规，您对您的个人信息享有查阅、更正、删除等法定权利。如有需要，可通过下方公布的联系方式向我们提出书面请求。
            </p>
          </section>

          <section id="contact" class="scroll-mt-24">
            <h2>六、联系我们</h2>
            <p>
              如果您对本隐私政策有任何疑问或投诉建议，请随时与我们取得联系：<br>
              电话：{{ companyContact.phone }}<br>
              邮箱：{{ companyContact.email }}<br>
              地址：{{ companyContact.address }}
            </p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
