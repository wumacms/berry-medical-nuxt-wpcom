import { companyContact } from "./navigation";

/**
 * 隐私政策页面数据结构（标准富文本文章模式）
 */
export interface PrivacyPageData {
  banner: {
    title: string;
    description: string;
  };
  title: string;
  date: string;
  summary: string;
  content: string; // 富文本 HTML 字符串
}

/**
 * “隐私政策”富文本文章数据源
 */
export const privacyData: PrivacyPageData = {
  banner: {
    title: "隐私政策",
    description: "贝瑞医疗高度重视用户个人信息安全与隐私保护",
  },
  title: "隐私政策",
  date: "2026年9月23日",
  summary:
    "贝瑞医疗高度重视您的个人信息保护。本政策说明我们如何收集、使用、存储和保护您的个人信息，以及您所享有的法定权利。",
  content: `
    <section id="collect" class="mb-8 scroll-mt-24">
      <h2 id="collect" class="text-lg sm:text-xl font-semibold text-[#262626] mb-3 pl-3 border-l-4 border-[#206be7]">一、我们收集的信息</h2>
      <p class="text-[14px] text-gray-600 leading-[1.8] font-normal m-0">
        在您访问本网站、使用在线留言咨询表单时，我们可能会收集您主动提供的个人信息，包括您的姓名、联系电话、电子邮箱以及您所填写的咨询需求内容。这些信息仅用于与您沟通核医学场所建设业务合作。
      </p>
    </section>

    <section id="use" class="mb-8 scroll-mt-24">
      <h2 id="use" class="text-lg sm:text-xl font-semibold text-[#262626] mb-3 pl-3 border-l-4 border-[#206be7]">二、信息的使用方式</h2>
      <p class="text-[14px] text-gray-600 leading-[1.8] font-normal m-0">
        我们收集的信息将严格用于为您提供售前咨询、技术方案沟通、项目选址评估及合同履行，绝不会将您的个人隐私信息出租、出售或泄露给任何第三方商业机构。
      </p>
    </section>

    <section id="share" class="mb-8 scroll-mt-24">
      <h2 id="share" class="text-lg sm:text-xl font-semibold text-[#262626] mb-3 pl-3 border-l-4 border-[#206be7]">三、信息的共享与披露</h2>
      <p class="text-[14px] text-gray-600 leading-[1.8] font-normal m-0">
        除非获得您的明确授权或遵循法律法规、法定监管机构的强制要求，贝瑞医疗不会向第三方共享您的个人信息。
      </p>
    </section>

    <section id="store" class="mb-8 scroll-mt-24">
      <h2 id="store" class="text-lg sm:text-xl font-semibold text-[#262626] mb-3 pl-3 border-l-4 border-[#206be7]">四、信息的存储与保护</h2>
      <p class="text-[14px] text-gray-600 leading-[1.8] font-normal m-0">
        我们采用符合行业标准的安全技术措施与管理手段保护您的信息，防止数据遭到未经授权的访问、泄露、篡改或毁损。
      </p>
    </section>

    <section id="rights" class="mb-8 scroll-mt-24">
      <h2 id="rights" class="text-lg sm:text-xl font-semibold text-[#262626] mb-3 pl-3 border-l-4 border-[#206be7]">五、您的法定权利</h2>
      <p class="text-[14px] text-gray-600 leading-[1.8] font-normal m-0">
        按照相关法律法规，您对您的个人信息享有查阅、更正、删除等法定权利。如有需要，可通过下方公布的联系方式向我们提出书面请求。
      </p>
    </section>

    <section id="contact" class="scroll-mt-24">
      <h2 id="contact" class="text-lg sm:text-xl font-semibold text-[#262626] mb-3 pl-3 border-l-4 border-[#206be7]">六、联系我们</h2>
      <p class="text-[14px] text-gray-600 leading-[1.8] font-normal m-0">
        如果您对本隐私政策有任何疑问或投诉建议，请随时与我们取得联系：<br>
        电话：${companyContact.phone}<br>
        邮箱：${companyContact.email}<br>
        地址：${companyContact.address}
      </p>
    </section>
  `,
};
