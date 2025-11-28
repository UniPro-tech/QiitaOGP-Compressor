"use server";
import Redirector from "@/components/redirector";
import { getMetadata } from "@/lib/ogp";
import { headers } from "next/headers";
import { Metadata } from "next/types";

type Props = {
  params: Promise<{ itemid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const headersList = await headers();
  const header_url = headersList.get("x-url") || "";
  const basePath = header_url.replace(/\/items\/.*$/, "");
  const url = new URL(basePath);
  const baseURL = url.origin;
  const metadata = await getMetadata(baseURL, (await params).itemid);
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
