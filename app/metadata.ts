import { Metadata } from 'next';

const baseUrl = 'https://your-domain.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'سايبر بلوج - مدونة الأمن السيبراني',
    template: '%s | سايبر بلوج',
  },
  description: 'مدونة متخصصة في مجال الأمن السيبراني، نقدم محتوى عربي احترافي للمهتمين والمختصين',
  keywords: ['أمن سيبراني', 'تحليل ثغرات', 'اختبار اختراق', 'هندسة عكسية', 'تشفير'],
  authors: [{ name: 'سايبر بلوج' }],
  creator: 'سايبر بلوج',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: baseUrl,
    title: 'سايبر بلوج - مدونة الأمن السيبراني',
    description: 'مدونة متخصصة في مجال الأمن السيبراني، نقدم محتوى عربي احترافي للمهتمين والمختصين',
    siteName: 'سايبر بلوج',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سايبر بلوج - مدونة الأمن السيبراني',
    description: 'مدونة متخصصة في مجال الأمن السيبراني، نقدم محتوى عربي احترافي للمهتمين والمختصين',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};