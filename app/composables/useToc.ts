/**
 * 富文本文章目录（TOC - Table of Contents）自动提取工具
 */

export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

/**
 * 从富文本 HTML 字符串中提取标题作为目录列表
 * 支持匹配：
 * 1. 带有 id 属性的 <h2 id="xxx">标题</h2>
 * 2. 带有 id 的外层 <section id="xxx"><h2...>标题</h2></section>
 * 3. 普通 <h2>标题</h2>（自动生成序号锚点）
 */
export function parseToc(html: string): TocItem[] {
  if (!html) return [];

  const list: TocItem[] = [];

  // 1. 优先匹配自带 id 的 <h2> 标签
  const h2Regex = /<h2(?:\s+[^>]*?id=["']([^"']+)["'][^>]*|\s*[^>]*)>(.*?)<\/h2>/gi;
  let match: RegExpExecArray | null;

  while ((match = h2Regex.exec(html)) !== null) {
    const id = match[1];
    const rawTitle = match[2] || "";
    const title = rawTitle.replace(/<[^>]+>/g, "").trim();
    if (id && title) {
      list.push({ id, title, level: 2 });
    }
  }

  // 2. 如果 h2 未直接标注 id，尝试从外层 <section id="..."> 中提取锚点
  if (list.length === 0) {
    const sectionRegex = /<section[^>]*?id=["']([^"']+)["'][^>]*>[\s\S]*?<h2[^>]*>(.*?)<\/h2>/gi;
    while ((match = sectionRegex.exec(html)) !== null) {
      const id = match[1];
      const rawTitle = match[2] || "";
      const title = rawTitle.replace(/<[^>]+>/g, "").trim();
      if (id && title) {
        list.push({ id, title, level: 2 });
      }
    }
  }

  // 3. 如果依然没有显式 id，自动分配全局序号锚点
  if (list.length === 0) {
    const fallbackRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
    let idx = 1;
    while ((match = fallbackRegex.exec(html)) !== null) {
      const rawTitle = match[1] || "";
      const title = rawTitle.replace(/<[^>]+>/g, "").trim();
      if (title) {
        list.push({ id: `section-${idx++}`, title, level: 2 });
      }
    }
  }

  return list;
}

/**
 * 响应式目录提取 Composable
 */
export function useToc(content: MaybeRefOrGetter<string>) {
  return computed(() => parseToc(toValue(content)));
}
