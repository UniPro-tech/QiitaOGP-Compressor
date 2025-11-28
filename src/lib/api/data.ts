import { JSDOM } from "jsdom";

export const getItemData = async (slug: string) => {
  const apiRes = await fetch(
    `https://qiita.com/api/v2/items/${encodeURIComponent(slug)}`
  );

  if (!apiRes.ok) {
    return new Response("Failed to fetch data from Qiita API", {
      status: apiRes.status,
    });
  }

  const data = await apiRes.json();
  return data;
};

export const getOGPdata = async (slug: string, userId?: string) => {
  const htmlRes = await fetch(
    userId
      ? `https://qiita.com/${encodeURIComponent(
          userId
        )}/items/${encodeURIComponent(slug)}`
      : `https://qiita.com/items/${encodeURIComponent(slug)}`
  );

  if (!htmlRes.ok) {
    return new Response("Failed to fetch HTML from Qiita", {
      status: htmlRes.status,
    });
  }

  const body = await htmlRes.text();

  const ogpImage = JSDOM.fragment(body).querySelectorAll(
    'meta[property="og:image"]'
  );

  const images: string[] = [];
  ogpImage.forEach((meta) => {
    const content = meta.getAttribute("content");
    if (content) {
      images.push(content);
    }
  });

  const ogType = JSDOM.fragment(body).querySelector('meta[property="og:type"]');

  const ogTitle = JSDOM.fragment(body).querySelector(
    'meta[property="og:title"]'
  );

  const ogDescription = JSDOM.fragment(body).querySelector(
    'meta[property="og:description"]'
  );

  const ogUrl = JSDOM.fragment(body).querySelector('meta[property="og:url"]');

  const ogSiteName = JSDOM.fragment(body).querySelector(
    'meta[property="og:site_name"]'
  );

  const themeColor = JSDOM.fragment(body).querySelector(
    'meta[name="theme-color"]'
  );

  const ogp = {
    type: ogType ? ogType.getAttribute("content") : null,
    title: ogTitle ? ogTitle.getAttribute("content") : null,
    description: ogDescription ? ogDescription.getAttribute("content") : null,
    url: ogUrl ? ogUrl.getAttribute("content") : null,
    siteName: ogSiteName ? ogSiteName.getAttribute("content") : null,
    themeColor: themeColor ? themeColor.getAttribute("content") : null,
    images: images,
  };
  return ogp;
};
