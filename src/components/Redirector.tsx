"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirector({ toItemId }: { toItemId: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(`https://qiita.com/items/${toItemId}`);
  }, [router, toItemId]);
  return null;
}
