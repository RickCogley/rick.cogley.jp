export const cacheBuster = `${new Date().getTime()}`;
export const todaysDateYYYYMMDD = `${new Date().toISOString().split("T")[0]}`;

// export const todaysDateYYYYMMDD2 = `${new Date().toISOString().slice(0, 10)}`;

export const todaysDateJAJP = `${new Date().toLocaleString('ja-JP',{ year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}`;
export const todaysDateENUS = `${new Date().toLocaleString('en-US',{ year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}`;

const response = await fetch('https://holidays-jp.github.io/api/v1/date.json', {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Accept': 'application/json'
  }
});
const holidays = await response.json();

export {
  holidays,
};

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
getFolderSize(folderPath).then(size => {
  console.log(`Total size: ${size/1024/1024} MB`);
});
export const repoSizeLong = await getFolderSize(folderPath);
export const repoSizeMB = Math.trunc(repoSizeLong/1024/1024);

// https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
import shuffle from "https://deno.land/x/shuffle/mod.ts";
console.log(shuffle(["i","ro","ha","ni","ho","he","to"]));
