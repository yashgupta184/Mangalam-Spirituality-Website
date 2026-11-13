import type { MetadataRoute } from 'next';
import { products, collections } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mangalam.in';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collection`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/design-system`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic product routes (all 24 products)
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Collection purpose & material filter routes
  const materialRoutes: MetadataRoute.Sitemap = [
    'Rudraksha',
    'Karungali',
    'Pyrite',
    'Rose Quartz',
    'Amethyst',
    'Tiger Eye',
    'Sandalwood',
    '7 Chakra',
  ].map((mat) => ({
    url: `${baseUrl}/collection?material=${encodeURIComponent(mat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...materialRoutes];
}
