import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

const username = Deno.env.get("USERNAME1")!;
const password = Deno.env.get("PASSWORD1")!;

const cms = lumeCMS({
  site: {
    name: "Rick Cogley Current Events CMS",
    description: "Edit the content of the Rick Cogley Current Events site.",
    url: "https://rick.cogley.jp",
    body: `
    <p>This is the CMS for an English-language portfolio site, with just a single landing page. </p>
    `,
  },
  auth: {
    method: "basic",
    users: {
      // foo: "bar",
      [username]: password,
    },
  },
});

// Register GitHub storage
cms.storage(
  "gh",
  new GitHub({
    client: new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") }),
    owner: "rickcogley",
    repo: "rick.cogley.jp",
    branch: "master",
    path: "src",
  }),
);

// Configure an upload folder
cms.upload("assets", "gh:assets");

cms.document({
  name: "Top Page",
  description: "Edit the content of the home page",
  store: "gh:index.yml",
  fields: [
    "title: text",
    "description: text",
    {
      name: "priority",
      type: "number",
      label: "Priority for sitemap",
      description:
        "1 is highest priority, 0 is lowest priority, and you can set decimal numbers in between like 0.9.",
      attributes: {
        required: false,
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    "content: markdown",
  ],
});

cms.document({
  name: "ld-person",
  description:
    "Edit the content of the ld-person script for the person, which will appear in the head of the about page",
  store: "gh:_includes/templates/ld-person.vto",
  fields: [
    "content: markdown",
  ],
});

export default cms;
