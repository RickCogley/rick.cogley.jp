[![Deploy to Deno Deploy](https://github.com/rickcogley/rick.cogley.jp/actions/workflows/deploy.yml/badge.svg)](https://github.com/rickcogley/rick.cogley.jp/actions/workflows/deploy.yml)

**Today is:** Friday, April 24, 2026
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

* [🔧 AI crawlers — Gemini, GPT, Claude, Perplexity — are reading your site constantly, and they&#039;d rather parse markdown than HTML. Markdown means cleaner context, fewer tokens, cheaper inference for them, which translates (via the economics of who pays for those tokens) into more efficient use of everyone&#039;s budget. If an agent is going to summarize your page anyway, giving it markdown directly means it spends its token budget on your…

https://cogley.jp/articles/cloudflare-workers-html-to-markdown](https://rick.status.lol/rick/69e5456a009b1)
* [🔧 AIクローラー（Gemini、GPT、Claude、Perplexityなど）は絶えずサイトを読みにきており、HTMLよりMarkdownのほうを好む。Markdownのほうが文脈がクリーンで、トークン数が少なく、推論コストも安い。エージェントがどうせあなたのページを要約するなら、DOMを歩くことに割くトークン予算を、実際のコンテンツに回したほうが合理的だ。 

エージェントにMarkdownを届ける方法は二つある。コンテンツが すでにMarkdown の場合（CMS、Gitリポジトリ、データベースにある場合）、ヘッダでフォーマットを交渉するだけで済む。筆者の姉妹記事「SvelteKit + Cloudflare WorkersでAIエージェント向けMarkdownを配信する」が、そのケースを詳しく扱っている。

コンテンツが HTML の場合（サードパーティページのプロキシ、ドキュメントのミラー、リーダーモード・エンドポイント、LLMサマライザーへの…

https://cogley.jp/articles/cloudflare-workers-html-to-markdown](https://rick.status.lol/rick/69e5456a01f50)
* [💼 東京で小さなITサービス会社を運営している。現在ISO/IEC 27001（国際ISMS規格・日本ではJIS Q 27001として同内容で採択されており、日本政府資料では多くの場合JIS表記が使われる）の取得作業を進めていて、その途中でSECURITY ACTION（セキュリティアクション）という制度にたどり着いた。IPA（情報処理推進機構）が運営していて、料金はかからず、宣言作業そのものは半日で終わる。日本で中小企業を経営していて、セキュリティに少しでも関心があるなら、この制度の存在くらいは知っておいていい。

この記事は、この制度の存在を知らない中小企業経営者（特に、日本の制度に疎い外国人経営者）に向けて書いている。何かを売りたいわけではない。私が学んだことを共有しているだけだ。2026年4月のgBizID Prime必須化と、新設されるMETIのSCS（サプライチェーンセキュリティ）制度が組み合わさることで、この制度は半年前までの印象よりもずっと意味を持ち始…

https://cogley.jp/articles/japan-ipa-security-action-sme](https://rick.status.lol/rick/69e1b7b5137c3)
* [💼 I run an IT services firm in Tokyo. We&#039;re currently working through ISO/IEC 27001 certification — the international ISMS standard, adopted in Japan as JIS Q 27001 (the two documents are substantively identical; Japanese government materials cite the JIS flavor) — and somewhere in the middle of that process I stumbled onto something called SECURITY ACTION. It&#039;s run by the IPA (Information-technology Promotion Agency, Japan), costs noth…

https://cogley.jp/articles/japan-ipa-security-action-sme](https://rick.status.lol/rick/69e1b7b4d2f4d)
* [💼 I run an IT services firm in Tokyo. We&#039;re currently working through ISO/IEC 27001 certification — the international ISMS standard, adopted in Japan as JIS Q 27001 (the two documents are substantively identical; Japanese government materials cite the JIS flavor) — and somewhere in the middle of that process I stumbled onto something called SECURITY ACTION. It&#039;s run by the IPA (Information-technology Promotion Agency, Japan), costs noth…

https://cogley.jp/articles/japan-ipa-security-action-sme](https://rick.status.lol/rick/69e1b66b149d9)

## Stats:

| Item | Value |
| --- | --- |
| Total Files | 143 |
| Repo Size in MB | 25 |
| Lume Version | v3.0.11 |
| Deno Version | 2.7.13 |
| V8 Version | 14.7.173.20-rusty |
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
    更新日付 2026年4月24日 2:04:27 GMT+9<br>
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

