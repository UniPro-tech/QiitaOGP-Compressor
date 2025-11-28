import Redirector from "@/components/redirector";
import { getMetadata } from "@/lib/ogp";
import { Metadata } from "next/types";

type Props = {
  params: Promise<{ itemid: string; uid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const basepath = "http://localhost:3000";
  const metadata = await getMetadata(
    basepath,
    (
      await params
    ).itemid,
    (
      await params
    ).uid
  );
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
