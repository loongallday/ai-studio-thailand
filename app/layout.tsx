import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.aistudiothailand.com";
const siteName = "AI Studio Thailand";
const siteTitle = "AI Studio Thailand — สอน พัฒนา สร้างสรรค์ AI สำหรับธุรกิจไทย";
const siteDescription =
  "AI Studio Thailand คือทีมพัฒนาเบื้องหลัง LocalAI Thailand และ CloudAI Thailand — สอน Workshop, พัฒนาระบบ AI, สร้าง AI Content สำหรับธุรกิจไทย ครบวงจร";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "AI Studio Thailand",
    "AI Thailand",
    "AI สำหรับธุรกิจ",
    "Workshop AI",
    "อบรม AI",
    "พัฒนาระบบ AI",
    "AI Development Thailand",
    "AI Content Creation",
    "สร้าง AI Content",
    "LocalAI Thailand",
    "CloudAI Thailand",
    "AI Consulting",
    "ที่ปรึกษา AI",
    "AI Automation",
    "ระบบ AI อัตโนมัติ",
    "ChatGPT Thailand",
    "AI ภาษาไทย",
    "Machine Learning Thailand",
    "Generative AI",
    "AI Training",
    "สอน AI",
    "AI for Business",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
    creator: "@aistudioth",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      sameAs: [
        "https://www.localaithai.com",
        "https://www.cloudaithai.com",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        addressCountry: "TH",
        addressLocality: "Bangkok",
      },
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-18:00",
      telephone: "+66-XX-XXX-XXXX",
      areaServed: {
        "@type": "Country",
        name: "Thailand",
      },
      serviceType: [
        "AI Workshop & Training",
        "Custom AI Development",
        "AI Content Creation",
        "AI Consulting",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "AI Studio Thailand ให้บริการอะไรบ้าง?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI Studio Thailand ให้บริการ 3 ด้านหลัก: Workshop & Training สอนใช้ AI, Custom AI Development พัฒนาระบบ AI สำหรับธุรกิจ, และ AI Content Creation สร้างคอนเทนต์ด้วย AI",
          },
        },
        {
          "@type": "Question",
          name: "AI Studio Thailand เกี่ยวข้องกับ LocalAI Thailand และ CloudAI Thailand อย่างไร?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI Studio Thailand เป็นบริษัทแม่ที่อยู่เบื้องหลังทั้ง LocalAI Thailand (บริการ AI ภายในองค์กร) และ CloudAI Thailand (บริการ AI บน Cloud) โดยรวมความเชี่ยวชาญทุกด้าน",
          },
        },
        {
          "@type": "Question",
          name: "สามารถจัด Workshop AI ให้องค์กรได้ไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ได้ครับ เรามีบริการจัด Workshop แบบ In-house สำหรับองค์กร ปรับเนื้อหาให้ตรงกับธุรกิจและระดับความรู้ของทีม",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${baiJamjuree.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
