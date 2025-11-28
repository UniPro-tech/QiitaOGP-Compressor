import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      path: "/",
      priority: 1,
    },
  ];

  // 通常ページのサイトマップエントリーを生成
  const staticPages = pages.map((page) => ({
    url: `https://qiita.uniproject.jp${page.path}`,
    priority: page.priority,
  }));

  return [...staticPages];
}
