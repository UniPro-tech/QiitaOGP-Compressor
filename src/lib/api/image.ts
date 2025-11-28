export const getImage = async (id: string, uid?: string) => {
  const apiRes = await fetch(
    uid
      ? `http://localhost:3000/api/items/${encodeURIComponent(id)}`
      : `http://localhost:3000/api/${uid}/items/${encodeURIComponent(id)}`
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
