"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirector({
  toItemId,
  isPrivate = false,
}: {
  toItemId: string;
  isPrivate?: boolean;
}) {
  const router = useRouter();
  useEffect(() => {
    router.replace(
      `https://qiita.com/${isPrivate ? "private" : "items"}/${toItemId}`
    );
  }, [router, toItemId, isPrivate]);
  return null;
}
