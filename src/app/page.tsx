import URLGenerator from "@/components/URLGenerator";
import { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qiita OGP Compressor",
  description: "QiitaのOGPをうまく表示できるようにするためのサイトです。",
  keywords: ["Qiita", "OGP", "URL", "Compressor"],
  authors: [{ name: "Yuito Akatsuki", url: "https://yuito-it.jp/" }],
  creator: "Yuito Akatsuki",
  publisher: "Yuito Akatsuki",
  openGraph: {
    title: "Qiita OGP Compressor",
    description: "QiitaのOGPをうまく表示できるようにするためのサイトです。",
    url: "https://qiita.uniproject.jp/",
    siteName: "Qiita OGP Compressor",
    images: [
      {
        url: "https://qiita.uniproject.jp/ogp_1920x1080.png",
        width: 1920,
        height: 1080,
        alt: "Qiita OGP Compressor",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qiita OGP Compressor",
    description: "QiitaのOGPをうまく表示できるようにするためのサイトです。",
    site: "@yuito_it",
    images: [
      {
        url: "https://qiita.uniproject.jp/ogp_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Qiita OGP Compressor",
      },
    ],
  },
  applicationName: "Qiita OGP Compressor",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#67cb1c",
};

export default function Home() {
  return (
    <div className="center p-2">
      <main>
        <section>
          <h1>Qiita OGP Compressor</h1>
          <p>QiitaのOGPをうまく表示できるようにするためのサイトです。</p>
        </section>
        <section>
          <h2>ジェネレーター</h2>
          <p>
            下記ボックスにQiitaの記事のURLを入力すると、OGP用のURLを生成します。
          </p>
          <URLGenerator />
        </section>
        <section>
          <h2>背景</h2>
          <p>
            このサイトを
            <wbr />
            作るにあたって、
            <wbr />
            Discordで
            <wbr />
            Qiitaの
            <wbr />
            OGPが
            <wbr />
            うまく
            <wbr />
            表示されないという
            <wbr />
            話題を見かけました。
            <wbr />
            調べてみると、Qiitaの
            <wbr />
            OGP画像には
            <wbr />
            Imaginxを
            <wbr />
            使っているらしく、URLに記事の
            <wbr />
            情報をクエリパラメータが
            <wbr />
            乗せまくっており、Discordの
            <wbr />
            OGP画像の
            <wbr />
            URL長の
            <wbr />
            上限を
            <wbr />
            軽く超えてしまう
            <wbr />
            記事が
            <wbr />
            あるようです。
            <wbr />
            つまりは...
            <wbr />
            <strong>
              OGPのimageの
              <wbr />
              URLを
              <wbr />
              短縮して
              <wbr />
              バイパスする
              <wbr />
              サイトを
              <wbr />
              つくればいいのでは？
            </strong>
            と思い、このサイトを
            <wbr />
            作成しました。
          </p>
        </section>
        <section>
          <h2>使い方</h2>
          <p>
            使い方は簡単です。Qiitaの記事のURLを以下のフォーマットに変換してください。
            また、ユーザーIDの部分は省略可能です。
            このURLは自動的に該当の記事へリダイレクトされます。
          </p>
          <pre>
            <code>
              {`https://qiita.com/{ユーザーID}/items/{記事のスラッグ}`}
            </code>
            <br />
            ↓
            <br />
            <code>{`https://qiita.uniproject.jp/{ユーザーID}/items/{記事のスラッグ}`}</code>
            <br />
            もしくは
            <br />
            <code>{`https://qiita.uniproject.jp/items/{記事のスラッグ}`}</code>
          </pre>
          <section>
            <h3>Chrome拡張機能について</h3>
            <p>
              さらに便利に使いたい方のために、Qiitaの共有ボタンから直にこのURLを取得できるようにする、Chrome拡張機能を誠意製作中です。
              完成次第、こちらのページで告知いたします。
            </p>
          </section>
          <section>
            <h3>例</h3>
            <p></p>
          </section>
        </section>
        <section>
          <h2>注意事項</h2>
          <p>
            このサイトはQiita株式会社とは一切関係ありません。
            また、Qiitaの利用規約に違反しないようにご注意ください。
          </p>
        </section>
        <section>
          <h2>制作者について</h2>
          <p>あかつき ゆいと (Yuito Akatsuki) が個人で開発しています。</p>
          <p>
            ご意見・ご要望・バグ報告などがございましたら、以下のメールアドレスまでご連絡ください。
          </p>
          <p>
            Email:{" "}
            <Link href="mailto:yuito@yuito-it.jp">yuito@yuito-it.jp</Link>
          </p>
          <section>
            <h3>リンク</h3>
            <ul>
              <li>
                Website:{" "}
                <Link href="https://yuito-it.jp/">https://yuito-it.jp/</Link>
              </li>
              <li>
                Qiita:{" "}
                <Link href="https://qiita.com/yuito_it_">@yuito_it_</Link>
              </li>
              <li>
                Twitter:{" "}
                <Link href="https://twitter.com/yuito_it_">@yuito_it_</Link>
              </li>
              <li>
                GitHub:{" "}
                <Link href="https://github.com/yuito-it">@yuito-it</Link>
              </li>
            </ul>
          </section>
        </section>
      </main>
      <footer>
        <Link href="https://yuito-it.jp" className="max-w-1/3 inline-block">
          <Image
            src="https://yuito-it.jp/img/banner/yuitopia_80x31.gif"
            alt="yuitopia - あかつきゆいと公式ウェブサイト"
            width="367"
            height="130"
          />
        </Link>
        <Link href="https://uniproject.jp" className="max-w-1/3 inline-block">
          <Image
            src="/banner/powered_by_unipro_ol.webp"
            alt="UniProject - 個人開発を応援するコミュニティ"
            width="367"
            height="130"
          />
        </Link>
        <span className="text-center">
          &copy; 2025 Yuito Akatsuki, &copy; 2025 UniProject All rights
          reserved.
        </span>
      </footer>
    </div>
  );
}
