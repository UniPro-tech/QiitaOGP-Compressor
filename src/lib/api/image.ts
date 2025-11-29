export const getImage = async (
  id: string,
  uid?: string,
  isPrivate?: boolean
) => {
  const apiRes = await fetch(
    uid
      ? `http://localhost:3000/api/${uid}/${
          isPrivate ? "private" : "items"
        }/${encodeURIComponent(id)}`
      : `http://localhost:3000/api/${
          isPrivate ? "private" : "items"
        }/${encodeURIComponent(id)}`
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
