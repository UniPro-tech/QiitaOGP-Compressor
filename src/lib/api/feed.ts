import { XMLParser, XMLBuilder } from "fast-xml-parser";

export enum FeedType {
  TAG = "tags",
  USER = "",
  POPULAR = "popular-items",
  ORGANIZATION = "organizations",
  CALENDAR = "advent-calendar",
}

const options = {
  ignoreAttributes: false,
};
const parser = new XMLParser(options);
const builder = new XMLBuilder(options);

interface feedEntry {
  id: string;
  published: Date;
  updated: Date;
  link: {
    "@_rel": "alternate";
    "@_type": "text/html";
    "@_href": string;
  };
  url: string;
  title: string;
  content: {
    "#text": string;
    "@_type": "text";
  };
  author: { name: string };
}

export const getAtomFeed = async (
  headerList: Headers,
  id: string,
  type: FeedType,
  year?: number
): Promise<string> => {
  // validation
  if (type !== FeedType.CALENDAR && year) {
    throw new Error("Year parameter is only valid for CALENDAR feed type");
  }
  if (type === FeedType.CALENDAR && !year) {
    throw new Error("Year parameter is required for CALENDAR feed type");
  }

  const res = await fetch(
    `https://qiita.com/${type}${year ? `/${year}` : ""}/${id}/${
      type == FeedType.USER
        ? "feed.atom"
        : type == FeedType.ORGANIZATION
        ? "activities.atom"
        : "feed"
    }`,
    {
      headers: {
        Accept: "application/atom+xml",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch feed", { cause: res.statusText });
  }

  const body = await res.text();
  const parsedXml = parser.parse(body);
  const baseUrl = headerList.get("x-base-url");

  parsedXml.feed.entry.forEach((element: feedEntry) => {
    element.link["@_href"] = element.link["@_href"].replace(
      "https://qiita.com",
      baseUrl || "localhost:3000"
    );
    element.url = element.url.replace(
      "https://qiita.com",
      baseUrl || "localhost:3000"
    );
  });

  return builder.build(parsedXml);
};
