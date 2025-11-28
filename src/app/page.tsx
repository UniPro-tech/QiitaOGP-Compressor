export default function Home() {
  return (
    <div className="center">
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
          {/* TODO: ジェネレーター実装 */}
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
      </main>
    </div>
  );
}
