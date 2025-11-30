import { getAtomFeed, FeedType } from "@/lib/api/feed";
import { NextRequest } from "next/server";

type Props = {
  params: Promise<{ year: string; id: string }>;
};

export const GET = async (_request: NextRequest, { params }: Props) => {
  const { year, id } = await params;
  const feed = await getAtomFeed(
    _request.headers,
    id,
    FeedType.CALENDAR,
    Number(year)
  );

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
};
