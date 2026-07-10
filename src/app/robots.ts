// #ISSUE: 4순위 robots.txt 생성
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://www.gideondental.com/sitemap.xml',
    };
}
