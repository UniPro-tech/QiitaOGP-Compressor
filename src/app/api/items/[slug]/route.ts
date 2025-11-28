import type { NextRequest } from "next/server";
import { getOGPdata } from "@/lib/api/data";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;
  const ogpData = await getOGPdata(slug);
  return Response.json({ data: ogpData });
};
