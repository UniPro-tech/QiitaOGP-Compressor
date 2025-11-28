"use server";
import Redirector from "@/components/edirector";
import { getMetadata } from "@/lib/ogp";
import { Metadata } from "next/types";

type Props = {
  params: Promise<{ itemid: string; uid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = await getMetadata((await params).itemid, (await params).uid);
  return metadata;
}

export default async function Page({ params }: Props) {
  const { itemid } = await params;
  return (
    <div>
      Redirect for item {itemid}
      <Redirector toItemId={itemid} />
    </div>
  );
}
