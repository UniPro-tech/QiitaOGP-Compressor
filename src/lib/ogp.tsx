import { Metadata } from "next";

export const getMetadata = async (
  baseUrl: string,
  itemid: string,
  userid?: string
) => {
  const metadataRes = await fetch(
    userid
      ? `${baseUrl}/api/${userid}/items/${itemid}`
      : `${baseUrl}/api/items/${itemid}`
  );
  const data = (await metadataRes.json()).data;
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
    themeColor: data.themeColor,
  };
  return metadata;
};
