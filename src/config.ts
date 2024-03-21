import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://zyfan42.github.io/", // replace this with your deployed domain
  author: "Kevin Zheng",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "zyfan42 blog",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 7,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/zyfan42",
    linkTitle: `Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "",
    linkTitle: `Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "",
    linkTitle: `Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "",
    linkTitle: `LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Email`,
    active: false,
  },
  {
    name: "Twitter",
    href: "",
    linkTitle: `Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "",
    linkTitle: `Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "",
    linkTitle: `Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "",
    linkTitle: `CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/profiles/76561199378837432/",
    linkTitle: `Steam`,
    active: true,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@K3v1Nz",
    linkTitle: `Mastodon`,
    active: true,
  },
];
