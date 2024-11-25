// Simple constants
export const cacheBuster = `${new Date().getTime()}`;
export const todaysDateYYYYMMDD = `${new Date().toISOString().split("T")[0]}`;

// export const todaysDateYYYYMMDD2 = `${new Date().toISOString().slice(0, 10)}`;

export const todaysDateJAJP = `${
  new Date().toLocaleString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
}`;
export const todaysDateENUS = `${
  new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
}`;

// Fetch holidays
const response = await fetch("https://holidays-jp.github.io/api/v1/date.json", {
  method: "GET",
  mode: "no-cors",
  headers: {
    "Accept": "application/json",
  },
});
const holidays = await response.json();

export { holidays };

// Get repo folder size
import { join } from "https://deno.land/std/path/mod.ts";

async function getFolderSize(path: string): Promise<number> {
  let totalSize = 0;

  for await (const entry of Deno.readDir(path)) {
    const entryPath = join(path, entry.name);
    const info = await Deno.stat(entryPath);

    if (info.isFile) {
      totalSize += info.size;
    } else if (info.isDirectory) {
      totalSize += await getFolderSize(entryPath);
    }
  }

  return totalSize;
}

const folderPath = "./";
getFolderSize(folderPath).then((size) => {
  console.log(`Total size: ${size / 1024 / 1024} MB`);
});
export const repoSizeLong = await getFolderSize(folderPath);
export const repoSizeMB = Math.trunc(repoSizeLong / 1024 / 1024);

// Shuffle
// https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
import shuffle from "https://deno.land/x/shuffle/mod.ts";
console.log(shuffle(["i", "ro", "ha", "ni", "ho", "he", "to"]));

// Import rss feed and convert to json
import { parseFeed } from "https://deno.land/x/rss/mod.ts";
async function fetchAndConvertRSS(url: string, limit: number) {
  // Fetch the RSS feed
  const response = await fetch(url);
  const xml = await response.text();
  // Parse the RSS feed
  const feed = await parseFeed(xml);
  // Limit the number of entries
  const limitedEntries = feed.entries.slice(0, limit);
  // Convert to JSON
  // const json = JSON.stringify( {...feed, entries: limitedEntries }, null, 2);
  const json = { ...feed, entries: limitedEntries };
  return json;
}
const rssUrl = "https://rick.status.lol/feed/rss";
const limit = 5;
fetchAndConvertRSS(rssUrl, limit).then(console.log).catch(console.error);
export const statuses = await fetchAndConvertRSS(rssUrl, limit);
