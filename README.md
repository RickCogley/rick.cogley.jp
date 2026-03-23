[![Deploy to Deno Deploy](https://github.com/rickcogley/rick.cogley.jp/actions/workflows/deploy.yml/badge.svg)](https://github.com/rickcogley/rick.cogley.jp/actions/workflows/deploy.yml)

**Today is:** Tuesday, March 24, 2026
Rick Cogley's current events landing page page, generated via «[Lume ルメ](https://lume.land/)» SSG using [Vento](https://vento.js.org/) templates, and hosted on [Deno Deploy](https://deno.com/deploy) as static files.

Many thanks to [Óscar Otero](https://oscarotero.com/), creator of Lume, [Lume CMS](https://lume.land/cms/), and Vento, for his great work coding useful tools, and for his help answering questions. 🙏🏻

## Notes:

- Production Site: https://rick.cogley.jp
- CMS: https://cms.rick.cogley.jp
- Font: Alegreya via
  [Google Fonts](https://fonts.google.com/specimen/Alegreya?query=alegreya)
- Icons: from [Phosphor](https://phosphoricons.com/)
- CSS base library: [Tachyons](https://tachyons.io/)

## Latest Statuses:

* [🔧 AIによるクロール・要約の波が押し寄せています。GoogleのGemini、OpenAIのGPT、AnthropicのClaude、Perplexityなど、あらゆるエージェントがあなたのサイトにアクセスしています。HTMLを返せば、AcceptAcceptmermaid
flowchart TD
    A[リクエスト受信] --&gt; B{Accept: text/markdownまたは ?format=md}
    B --&gt;|はい| C[handleMarkdownRequest]
    C --&gt; D{ルートに一致?}
    D --&gt;|はい| E[Service Binding経由でAPIデータを取得]
    E --&gt; F[Markdownとしてフォーマット]
    F --&gt; G[Responseを返却text/markdown + ヘッダ]
    D --&gt;|いいえ| H[SSRにフォールスルー]
    B --&gt;|いいえ| H
    H --&gt; I[通…

https://cogley.jp/articles/markdown-for-agents](https://rick.status.lol/rick/69c0e068e46fe)
* [🔧 Vite 8は2026年3月12日にリリースされた。その2日後、筆者は8つのSvelteKitプロジェクトを移行し終えた。モノレポとスタンドアロンの混在構成で、すべてCloudflare Workersにデプロイしている。移行はほぼ機械的な作業で、ビルドも速くなった。いくつかの教訓を共有する。 ☕

Vite 8で何が変わるのか

Vite 8は、従来の「分裂型」バンドラアーキテクチャを置き換えるものだ。Vite 7では、開発時のトランスフォームと依存関係の最適化にesbuildを使い、本番ビルドではRollupに切り替えていた。2つの異なるツールが重複する仕事をし、それぞれの環境で微妙に異なる挙動を示していた。

Vite 8ではRolldownに統一される。RolldownはRustベースのバンドラで、OxcがJavaScriptのトランスフォームとミニファイを担い（esbuildの役割を置き換え）、Lightning CSSがCSSのミニファイを担当する。バ…

https://cogley.jp/articles/migrating-sveltekit-to-vite-8](https://rick.status.lol/rick/69c0db3db2c5b)
* [🔧 CloudflareはPagesをWorkersに統合しつつある。Pagesが明日なくなるわけではないが、新機能はすべてWorkers側にのみ追加されている。筆者は2026年初頭に全PagesプロジェクトをWorkersへ移行し、その過程でつまずいたポイントをまとめた。

Cloudflare Pagesは廃止されるのか？

正確にはそうではない。RedditやHacker Newsでは「Pagesは非推奨」という声が多いが、実態は少し違う。Workersテックリードの Kenton Varda 氏は「Pages固有の機能をすべて汎用的なWorkers機能に変えていく」と述べている。つまり、製品が廃止されるのではなく、吸収されるのだ。

しかしシグナルは明確だ。新機能はWorkersが先行（もしくはWorkers限定）で提供される。Secrets Store、Workflows、Containers、いずれもWorkers専用だ。Pagesはメンテ…

https://cogley.jp/articles/cloudflare-pages-to-workers-migration](https://rick.status.lol/rick/69c0bca2bcad4)
* [🔧 AIエージェントが「Svelte 5での相当は？」と質問するとします。現状では2つの方法があります。ページのHTMLをスクレイピングしてパースするか、を取得して100以上の項目からコンテキスト内でフィルタリングするか。どちらも動作しますが、トークンの無駄遣いです。

WebMCPを使えば、AIエージェントに第3の選択肢が生まれます。を呼び出すだけで、構造化された回答が直接返ってきます。データは同じ。インターフェースがエージェント向けに最適化されています。

WebMCPとは

WebMCPはW3Cコミュニティグループのドラフトで、ブラウザにを追加する仕様です。ウェブサイトがMCPツールをウェブページ上に直接登録できるようになります。Claudeのツール利用やCursorのコンテキストなど、エージェントフレームワークで使われるのと同じプロトコルです。サイトを閲覧するAIエージェントは、スクレイピングなしでツールを発見・呼び…

https://cogley.jp/articles/enabling-webmcp-tools-sveltekit-migration-reference](https://rick.status.lol/rick/69c0a703b6fb2)
* [🔧 同じ気持ちの方はいませんか？ React（またはVue、Angular）で何年もプロダクションコードを書き、依存配列と格闘し、バニラJSライブラリをフレームワーク固有のアダプターでラップし、がアプリ本体より重いことに疑問を感じている。そんなとき、Svelte 5のrunes — 、、 — を知って、何かがピンとくる。試してみたいけど、移行の道筋が見えない。

そのギャップを埋めるために作ったのが svelte.cogley.jp です。

svelte.cogley.jp とは

React、Vue、AngularからSvelte 5とSvelteKitへの概念マッピングを、構文だけでなくアーキテクチャレベルで提供するインタラクティブリファレンスです。いわばフロントエンドフレームワークの「ロゼッタストーン」です。ソース言語（React、Vue、Angular）を選び、カテゴリ（概要、構文、アーキテクチャ、エコシステム）を選ぶと、各概念がどう…

https://cogley.jp/articles/migrate-to-svelte-5-interactive-reference](https://rick.status.lol/rick/69c08eb8a3601)

## Stats:

| Item | Value |
| --- | --- |
| Total Files | 143 |
| Repo Size in MB | 25 |
| Lume Version | v3.0.11 |
| Deno Version | 2.7.7 |
| V8 Version | 14.6.202.9-rusty |
| Typescript Version | 5.9.2 |
| Timezone | Asia/Tokyo |


## Note to self

Footer: 

```
<footer
  style="background-image: url(/assets/footer_bg2.gif)"
  class="tc-l bg-center cover bg-black text"
>
  <div class="w-100 ph3 pv5 bg-black-70">
    <span class="white-40"><small>&copy; <span id="copyright-year"></span> , juo00oc@gmail.com<br>
    更新日付 2026年3月24日 1:59:46 GMT+9<br>
    本日は<span id="holiday"></span><br></small></span>
    <a
      rel="me"
      class="link white-90 bg-transparent hover-green inline-flex items-center ma2 tc br2 pa2"
      href="https://www.instagram.com/jo00oc/?hl=ja"
      title="Instagram"
      target="_blank"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/></svg>
      <span class="f6 ml3 pr2 display-300">Instagram</span>
    </a>
    <a
      rel="me"
      class="link white-90 bg-transparent hover-green inline-flex items-center ma2 tc br2 pa2"
      href="https://github.com/juliecogley"
      title="GitHub"
      target="_blank"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2"/><path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"/></svg>
      <span class="f6 ml3 pr2 display-300">GitHub</span>
    </a>
  </div>
</footer>
    <script>
        async function checkHoliday() {
            try {
                const response = await fetch('/jp_holidays.json');
                const holidays = await response.json();

                // Debugging: Log the fetched data
                console.log('Fetched holidays:', holidays);

                const today = new Date().toISOString().split('T')[0];
                const todayjp = new Date().toLocaleString('ja-JP',{ year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

                // const todaytest = "2025-02-11";
                const holidayName = holidays[today];
                const holidayElement = document.getElementById('holiday');

                if (holidayName) {
                    holidayElement.textContent = `${todayjp} (${holidayName})`;
                } else {
                    holidayElement.textContent = `${todayjp}`;
                }
            } catch (error) {
                console.error('Error checking holiday:', error);
                document.getElementById('holiday').textContent = 'Error checking holiday';
            }
        }

        checkHoliday();

        document.addEventListener('DOMContentLoaded', () => {
            const currentYear = new Date().getFullYear();
            document.getElementById('copyright-year').textContent = currentYear;
        });

    </script>
    <script>

    </script>
```

