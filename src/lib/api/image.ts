import type { NextRequest } from "next/server";

export const getImage = async (
  _request: NextRequest,
  id: string,
  uid?: string
) => {
  const baseUrl = `${_request.nextUrl.protocol}//${_request.nextUrl.host}`;
  const apiRes = await fetch(
    uid
      ? `${baseUrl}/api/items/${encodeURIComponent(id)}`
      : `${baseUrl}/api/${uid}/items/${encodeURIComponent(id)}`
  );
  const data = await apiRes.json();
  const images = data.data.images;
  const imageRes = await fetch(images[0]);
  if (!imageRes.ok) {
    return new Response("Failed to fetch image from Qiita", {
      status: imageRes.status,
    });
  }
  return imageRes;
};
