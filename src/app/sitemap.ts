import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.devsoc.codechefvit.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}#about`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#tracks`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#speaker`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#timeline`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}#sponsors`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}#faq`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
