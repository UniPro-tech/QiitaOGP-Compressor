import { getImage } from "@/lib/api/image";
import type { NextRequest } from "next/server";

export const GET = async (
  _request: NextRequest,
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
