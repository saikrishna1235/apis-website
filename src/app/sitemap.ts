import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.apishealthcare.co.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.apishealthcare.co.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.apishealthcare.co.in/courses",
      lastModified: new Date(),
    },
    {
      url: "https://www.apishealthcare.co.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.apishealthcare.co.in/faq",
      lastModified: new Date(),
    },
  ];
}