"use server";
import { NextRequest } from "next/server";
import { getImage } from "@/lib/api/image";

export const GET = async (
  _req: NextRequest,
  { params }: { params: { uid: string; slug: string } }
) => {
  const { slug, uid } = params;
  const imageRes = await getImage(slug, uid);
  return new Response(imageRes.body, {
    headers: {
      "Content-Type": imageRes.headers.get("Content-Type") || "image/jpeg",
    },
  });
};
