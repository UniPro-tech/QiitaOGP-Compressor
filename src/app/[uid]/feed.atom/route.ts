import { getAtomFeed, FeedType } from "@/lib/api/feed";
import { NextRequest } from "next/server";

type Props = {
  params: Promise<{ uid: string }>;
};

export const GET = async (_request: NextRequest, { params }: Props) => {
  const { uid } = await params;
  const feed = await getAtomFeed(_request.headers, uid, FeedType.USER);

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
};
