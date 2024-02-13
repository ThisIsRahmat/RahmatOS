import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://thisisrahmat.com/", // replace this with your deployed domain

  desc: "The personal site of Rahmat Junaid",
  title: "Rahmat",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,

};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/thisisrahmat",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rahmat-junaid/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:thisisrahmat@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },




];
