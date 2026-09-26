import type { MetadataRoute } from "next";

const teamSlugs = [
  "rajdev-kumar",
  "shezar-khatri",
  "vivek-anand",
  "gulshan-malhotra",
  "siddhant-khanna",
  "divya-anand",
  "suriyansh-kumar",
  "pawan-kumar",
  "gaurav-kumar-pal",
  "suraj-raj",
  "saurav-raj",
  "ajit-kumar-keshari",
  "lokesh-anand",
  "kumar-aditya",
  "amit-sahani",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: "https://bhadagadi.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://bhadagadi.in/bihar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://bhadagadi.in/shiv-kumar-khatri",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://bhadagadi.in/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://bhadagadi.in/terms-and-conditions",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const teamPages: MetadataRoute.Sitemap = teamSlugs.map((slug) => ({
    url: 'https://bhadagadi.in/team/${slug}',
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...mainPages, ...teamPages];
}