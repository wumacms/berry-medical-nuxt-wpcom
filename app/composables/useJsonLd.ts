import { companyContact } from "~/data/navigation";

export const useJsonLd = () => {
  const SITE_URL = "https://www.berrymedical.com.cn";

  /**
   * 注入公司/组织结构化数据 (MedicalBusiness & Organization)
   */
  const setOrganizationSchema = () => {
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: companyContact.name,
            alternateName: ["贝瑞医疗", companyContact.enName],
            url: SITE_URL,
            logo: `${SITE_URL}/favicon.ico`,
            description: companyContact.slogan,
            telephone: companyContact.phone,
            email: companyContact.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "瑞达路睿达广场1栋14层",
              addressLocality: "郑州市",
              addressRegion: "河南省",
              addressCountry: "CN",
            },
            sameAs: [SITE_URL],
            openingHours: "Mo-Su 08:30-18:00",
            priceRange: "$$$$",
            areaServed: "中国",
          }),
        },
      ],
    });
  };

  /**
   * 注入常见问题富摘要结构化数据 (FAQPage)
   */
  const setFaqSchema = (faqs: Array<{ question: string; answer: string }>) => {
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        },
      ],
    });
  };

  /**
   * 注入新闻文章结构化数据 (NewsArticle)
   */
  const setArticleSchema = (article: {
    id: number | string;
    title: string;
    summary?: string;
    imageUrl?: string;
    date?: string;
    author?: string;
  }) => {
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.summary,
            image: article.imageUrl ? [article.imageUrl] : [],
            datePublished: article.date,
            dateModified: article.date,
            author: {
              "@type": "Organization",
              name: article.author || companyContact.name,
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: companyContact.name,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/favicon.ico`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/news/${article.id}`,
            },
          }),
        },
      ],
    });
  };

  /**
   * 注入规范链接 Canonical
   */
  const setCanonical = (path = "") => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    useHead({
      link: [
        {
          rel: "canonical",
          href: `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`,
        },
      ],
    });
  };

  return {
    SITE_URL,
    setOrganizationSchema,
    setFaqSchema,
    setArticleSchema,
    setCanonical,
  };
};
