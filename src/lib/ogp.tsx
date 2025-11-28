"use server";
import { Metadata } from "next";
import { headers } from "next/headers";

export const getMetadata = async (itemid: string, userid?: string) => {
  const metadataRes = await fetch(
    userid
      ? `http://localhost:3000/api/${userid}/items/${itemid}`
      : `http://localhost:3000/api/items/${itemid}`
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
