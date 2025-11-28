"use server";
import { getImage } from "@/lib/api/image";

export const GET = async ({
  params,
}: {
  params: Promise<{ slug: string; uid: string }>;
}) => {
  const { slug, uid } = await params;
  const imageRes = await getImage(slug, uid);
  return new Response(imageRes.body, {
    headers: {
      "Content-Type": imageRes.headers.get("Content-Type") || "image/jpeg",
    },
  });
};
