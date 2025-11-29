import type { NextRequest } from "next/server";
import { getOGPdata } from "@/lib/api/data";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string; uid: string }> }
) => {
  const { slug, uid } = await params;
  const ogpData = await getOGPdata(slug, uid, true);
  return Response.json({ data: ogpData });
};
