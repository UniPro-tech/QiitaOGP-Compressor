"use server";
import { getImage } from "@/lib/api/image";
import { NextRequest } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;
  const imageRes = await getImage(slug);
  return new Response(imageRes.body, {
    headers: {
      "Content-Type": imageRes.headers.get("Content-Type") || "image/jpeg",
    },
  });
};
