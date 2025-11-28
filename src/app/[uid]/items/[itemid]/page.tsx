"use server";
import Redirector from "@/components/Redirector";
import { getMetadata } from "@/lib/ogp";
import { Metadata, Viewport } from "next/types";

type Props = {
  params: Promise<{ itemid: string; uid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = await getMetadata((await params).itemid, (await params).uid);
  return metadata;
}

export const viewport: Viewport = {
  themeColor: "#67cb1c",
};

export default async function Page({ params }: Props) {
  const { itemid } = await params;
  return (
    <div>
      Redirect for item {itemid}
      <Redirector toItemId={itemid} />
    </div>
  );
}
