import lume from "lume/mod.ts";
import { getCurrentVersion } from "lume/core/utils/lume_version.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import date from "lume/plugins/date.ts";
import { enUS } from "npm:date-fns/locale/en-US";
import { ja } from "npm:date-fns/locale/ja";
import { getGitDate } from "lume/core/utils/date.ts";
// import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import filter_pages from "lume/plugins/filter_pages.ts";
import inline from "lume/plugins/inline.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
// import minify_html from "lume/plugins/minify_html.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";
import sri from "lume/plugins/sri.ts";
import terser from "lume/plugins/terser.ts";
import phosphor from "https://deno.land/x/lume_icon_plugins@v0.2.4/phosphor.ts";
// import icons from "lume/plugins/icons.ts";
// import picture from "lume/plugins/picture.ts";
// import transformImages from "lume/plugins/transform_images.ts";
import brotli from "lume/plugins/brotli.ts";
import onDemand from "lume/plugins/on_demand.ts";
import cssBanner from "https://raw.githubusercontent.com/RickCogley/hibana/v0.5.0/plugins/css_banner.ts?1";
import shuffle from "https://raw.githubusercontent.com/RickCogley/hibana/v0.5.0/plugins/shuffle.ts?1";
import fff from "lume/plugins/fff.ts";
import purgecss from "lume/plugins/purgecss.ts";

const site = lume(
  {
    src: "./src",
    location: new URL("https://rick.cogley.jp"),
  },
);

site.use(googleFonts({
  subsets: ["latin", "latin-ext","[2]","[3]","[4]","[5]","[6]","[7]","[8]","[9]","[10]","[11]","[12]","[13]","[14]","[15]","[16]","[17]","[18]","[19]","[20]","[21]","[22]","[23]","[24]","[25]","[26]","[27]","[28]","[29]","[30]","[31]","[32]","[33]","[34]","[35]","[36]","[37]","[38]","[39]","[40]","[41]","[42]","[43]","[44]","[45]","[46]","[47]","[48]","[49]","[50]","[51]","[52]","[53]","[54]","[55]","[56]","[57]","[58]","[59]","[60]","[61]","[62]","[63]","[64]","[65]","[66]","[67]","[68]","[69]","[70]","[71]","[72]","[73]","[74]","[75]","[76]","[77]","[78]","[79]","[80]","[81]","[82]","[83]","[84]","[85]","[86]","[87]","[88]","[89]","[90]","[91]","[92]","[93]","[94]","[95]","[96]","[97]","[98]","[99]","[100]","[101]","[102]","[103]","[104]","[105]","[106]","[107]","[108]","[109]","[110]","[111]","[112]","[113]","[114]","[115]","[116]","[117]","[118]","[119]"],
  cssFile: "styles.css",
  placeholder: "/* lume-google-fonts-here */",
  fonts: {
    display:
      "https://fonts.google.com/share?selection.family=Alegreya+Sans+SC:wght@300",
    text:
      "https://fonts.google.com/share?selection.family=Alegreya:ital,wght@0,400..900;1,400..900",
    textjp:
      "https://fonts.google.com/share?selection.family=Zen+Maru+Gothic:wght@700&display=swap",
  },
}));

site.use(attributes());
site.use(base_path());
site.use(date({ locales: { enUS, ja } }));
// site.use(favicon());
site.use(feed());
site.use(filter_pages());
site.use(inline());
site.use(lightningcss());
site.use(metas());
// site.use(minify_html());
site.use(nav());
site.use(pagefind());
site.use(robots());
site.use(sitemap({
  // query: "external_link=undefined",
  lastmod: "lastmod",
  priority: "priority",
  filename: "sitemap.xml",
  sort: "lastmod=desc",
}));
site.use(source_maps());
site.use(sri());
site.use(terser());
site.use(phosphor());
// site.use(icons(/* Options */));
// site.use(picture(/* Options */));
// site.use(transformImages({
//   cache: true, // Toggle cache
// }));
site.use(brotli());
site.use(onDemand({
  extraData(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const params = Object.fromEntries(searchParams.entries());

    return {
      params,
      request,
    };
  },
}));
site.use(cssBanner({
  message: "===rickcogley - css jokes are always in style===",
}));
site.use(shuffle());
site.use(fff({
  date: "published",
  presets: [{
    summary: "content",
  }],
  strict: {
    categories: false,
    media: {
      array: false,
      type: "object",
    },
  },
  getGitDate: true,
  postTypeDiscovery: true,
}));
site.use(purgecss({
  fontFace: true,
}));

// site.filter("shuffle", <T>(array: T[] = []) => {
//   for (let i = array.length - 1; i >= 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// });

site.data("lumeVersion", getCurrentVersion());
site.copy("assets");
// site.copy("static/portfolio", "portfolio");
site.copy([".gif", ".pdf", ".docx", ".pptx", ".xlsx", ".zip", ".svg"]);
site.copyRemainingFiles();

site.ignore("*.DS_Store");
site.ignore("archive");

site.preprocess([".html"], (pages) => {
  for (const page of pages) {
    const src = page.src.entry?.src;

    if (src) {
      page.data.lastmod = getGitDate("modified", src);
      page.data.created = getGitDate("created", src);
    }
  }
});

// Create zip and tree scripts
site.script(
  "zipsite",
  "zip -r _site/rick_cogley_jp_site.zip _site",
);
site.script(
  "maketree",
  "cd _site && tree -H . -L 5 --charset utf-8 -C -h -o rick_cogley_jp_tree.html",
);
site.script(
  "copyreadme",
  "cd _site && cp repo-readme.md ../README.md",
);
// site.script(
//   "getjpholidays",
//   "cd src/_data && curl https://holidays-jp.github.io/api/v1/date.json -o jp_holidays.json",
// );

// Execute scripts before build
// site.addEventListener("beforeBuild", "getjpholidays");
// Execute scripts after build
site.addEventListener("afterBuild", "zipsite");
site.addEventListener("afterBuild", "maketree");
site.addEventListener("afterBuild", "copyreadme");

export default site;
