"use server";
import { Metadata } from "next";
import { headers } from "next/headers";

export const getMetadata = async (
  itemid: string,
  userid?: string,
  isPrivate?: boolean
) => {
  const metadataRes = await fetch(
    userid
      ? `http://localhost:3000/api/${userid}/${
          isPrivate ? "private" : "items"
        }/${itemid}`
      : `http://localhost:3000/api/${isPrivate ? "private" : "items"}/${itemid}`
  );
  const data = (await metadataRes.json()).data;
  const headerList = await headers();
  const baseUrl = headerList.get("x-base-url");
  const metadata: Metadata = {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: `${baseUrl}/api/${
        userid ? userid + "/" : ""
      }items/${itemid}/photo`,
      siteName: data.siteName,
      type: data.type,
    },
  };
  return metadata;
};
