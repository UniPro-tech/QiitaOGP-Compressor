import { getAtomFeed, FeedType } from "@/lib/api/feed";
import { NextRequest } from "next/server";

type Props = {
  params: Promise<{ oid: string }>;
};

export const GET = async (_request: NextRequest, { params }: Props) => {
  const { oid } = await params;
  const feed = await getAtomFeed(_request.headers, oid, FeedType.ORGANIZATION);

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
};
