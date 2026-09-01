import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.gideondental.com';

const routes = [
    { path: '/', priority: 1 },
    { path: '/about/philosophy', priority: 0.8 },
    { path: '/about/promise', priority: 0.8 },
    { path: '/about/location', priority: 0.8 },
    { path: '/about/tour', priority: 0.7 },
    { path: '/doctors', priority: 0.8 },
    { path: '/implant/insurance', priority: 0.7 },
    { path: '/guide/ai-navigation', priority: 0.8 },
    { path: '/guide/full-implant', priority: 0.7 },
    { path: '/guide/implant-denture', priority: 0.7 },
    { path: '/guide/laminate', priority: 0.8 },
    { path: '/guide/prosthetics', priority: 0.7 },
    { path: '/guide/aligner', priority: 0.8 },
    { path: '/guide/ortho', priority: 0.7 },
    { path: '/guide/tmj', priority: 0.8 },
    { path: '/guide/t-scan', priority: 0.7 },
    { path: '/guide/laser', priority: 0.7 },
    { path: '/guide/endo', priority: 0.7 },
    { path: '/price', priority: 0.4 },
    { path: '/blog', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return routes.map((route) => ({
        url: `${SITE_URL}${route.path}`,
        lastModified,
        changeFrequency: route.path === '/' ? 'weekly' : 'monthly',
        priority: route.priority,
    }));
}
