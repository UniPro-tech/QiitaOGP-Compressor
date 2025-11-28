"use client";
import { useState } from "react";

export default function URLGenerator() {
  const [generatedURL, setGeneratedURL] = useState<string | null>(null);
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("url") as HTMLInputElement | null;
    if (input) {
      const url = input.value;
      if (url.includes("qiita.com")) {
        try {
          const urlObj = new URL(url);
          const pathParts = urlObj.pathname.split("/").filter(Boolean);
          console.log(pathParts);
          if (pathParts.length === 3 && pathParts[1] === "items") {
            const uid = pathParts[0];
            const slug = pathParts[2];
            setGeneratedURL(`${origin}/${uid}/items/${slug}`);
          } else if (pathParts.length === 2 && pathParts[0] === "items") {
            const slug = pathParts[1];
            setGeneratedURL(`${origin}/items/${slug}`);
          } else {
            setGeneratedURL("無効なQiita記事のURLです。");
          }
        } catch {
          setGeneratedURL("エラーが発生しました。");
        }
      } else {
        setGeneratedURL("QiitaのURLではありません。");
      }
    }
  };
  return (
    <>
      <form
        className="flex flex-row gap-2 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="url"
          placeholder="Qiitaの記事のURLを入力してください"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded min-w-20"
        >
          生成
        </button>
      </form>
      {generatedURL && (
        <div className="mt-4">
          <p>生成されたOGP用URL:</p>
          <pre
            className="p-2 rounded border cursor-copy"
            onClick={() => {
              navigator.clipboard.writeText(generatedURL);
              alert("URLをコピーしました！");
            }}
          >
            {generatedURL}
          </pre>
        </div>
      )}
    </>
  );
}
