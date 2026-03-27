[![Deploy to Deno Deploy](https://github.com/rickcogley/rick.cogley.jp/actions/workflows/deploy.yml/badge.svg)](https://github.com/rickcogley/rick.cogley.jp/actions/workflows/deploy.yml)

**Today is:** Saturday, March 28, 2026
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

* [🔧 Migrate to Svelte 5は、React・Vue・AngularからSvelte 5への移行リファレンスサイトです。フレームワーク間の概念対応表が約300件、構文・アーキテクチャ・エコシステムをカバーしています。

人間がサイトを読んで調べる分にはそれで十分です。ただ、SvelteKitのコードベースでClaude Codeを使いながら「Svelteの最新機能を確認して、このリポジトリに適用できるものを見つけて」と頼みたい場面が増えてきました。AIエージェントが得意とする素早い横断分析です。データはサイトにあるのに、機械が問い合わせる手段がなかった。

そこで 構造化パターンフィード と フィルタ可能なパターンページ を追加しました。背景と実装を記録します。

静的な移行ガイドの限界

移行ガイドは「SvelteでXはどう書く？」に答えるもの。開発者が質問を持って答えを探しに来るプル型のやりとりです。便利ですが、その形のやりとりに限…

https://cogley.jp/articles/svelte-patterns-feed-ai-codebase-audits](https://rick.status.lol/rick/69c59f7515e51)
* [🔧 My Migrate to Svelte 5 site started as a side-by-side reference for developers wanting to convert to Svelte 5, from React, Vue, or Angular. It maps concepts across frameworks: &quot;your  is Svelte&#039;s ,&quot; &quot;your  is ,&quot; and so on — about 300 entries covering syntax, architecture, and ecosystem. 

That&#039;s useful, for a human reading the site. But I kept running into a different scenario: working in a SvelteKit codebase with Claude Code…

https://cogley.jp/articles/svelte-patterns-feed-ai-codebase-audits](https://rick.status.lol/rick/69c59e6f3d27a)
* [🔧 My Migrate to Svelte 5 site started as a side-by-side reference for developers wanting to convert to Svelte 5, from React, Vue, or Angular. It maps concepts across frameworks: &quot;your  is Svelte&#039;s ,&quot; &quot;your  is ,&quot; and so on — about 300 entries covering syntax, architecture, and ecosystem.

That&#039;s useful, for a human reading the site. But I kept running into a different scenario: working in a SvelteKit codebase with Claude Code…

https://cogley.jp/articles/svelte-patterns-feed-ai-codebase-audits](https://rick.status.lol/rick/69c5994b6184f)
* [🔧 I needed to run user-defined JavaScript templates from a database — code that formats RSS feed items into social media posts. The templates could be anything: hand-written, AI-generated, pasted from a blog. Running arbitrary code strings inside my production Worker, with access to D1 databases and R2 buckets, wasn&#039;t an option. 

Cloudflare&#039;s Dynamic Workers, released in March 2026, solved this. They l…

https://cogley.jp/articles/cloudflare-dynamic-workers-sandboxed-code-execution-at-the-edge](https://rick.status.lol/rick/69c4b304c2d06)
* [🔧 データベースに保存したJavaScriptテンプレートを実行する必要があった。RSSフィードのアイテムをSNS投稿にフォーマットするコードだ。テンプレートは何でもあり得る：手書き、AI生成、ブログからのコピペ。D1データベースやR2バケットにアクセスできる本番Worker内で任意のコード文字列を実行するわけにはいかない。

2026年3月にリリースされたCloudflareのDynamic Workersがこれを解決した。親Workerが実行時にコード文字列から新しいWorkerを生成し、それぞれが独自のV8アイソレートで動作する。アクセス権限は親が明示的に制御する。自分のパブリッシングスタックに半日で組み込めた。

Dynamic Workers以前の問題

データベースにJavaScript関数を保存し、Cloudflare Worker内で実行したい場合、選択肢は3つ——どれも問題があった：

/ ——Workerプロセス内でコードを実行する。すべてのバインディン…

https://cogley.jp/articles/cloudflare-dynamic-workers](https://rick.status.lol/rick/69c4b2f60839f)

## Stats:

| Item | Value |
| --- | --- |
| Total Files | 143 |
| Repo Size in MB | 25 |
| Lume Version | v3.0.11 |
| Deno Version | 2.7.9 |
| V8 Version | 14.7.173.7-rusty |
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
    更新日付 2026年3月28日 1:59:50 GMT+9<br>
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

