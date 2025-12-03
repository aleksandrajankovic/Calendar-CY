// src/app/en/page.js
export const dynamic = "force-dynamic";

import CalendarPageShell from "../CalendarPageShell";

export const metadata = {
  metadataBase: new URL("https://calendar.meridianbet.com.cy"),
  title: "Promotion Calendar | Meridianbet Cyprus",
  description:
    "Discover the Christmas Promo Calendar at Meridianbet Cyprus with daily surprises, bonuses, and exclusive holiday offers.",
  keywords: [
    "christmas promo calendar",
    "daily bonuses Cyprus",
    "Meridianbet Christmas offers",
    "holiday promotions",
    "December gifts",
    "betting promotions cyprus",
  ],
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "Promotion Calendar | Meridianbet Cyprus",
    description:
      "Discover the Christmas Promo Calendar at Meridianbet Cyprus with daily surprises, bonuses, and exclusive holiday offers.",
    url: "/en",
    siteName: "Meridianbet",
    images: [
      {
        url: "https://cloud.merbet.com/Preview-image/calendar-universal.png",
        width: 1200,
        height: 630,
        alt: "Promotion Calendar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotion Calendar | Meridianbet Cyprus",
    description:
      "Discover the Christmas Promo Calendar at Meridianbet Cyprus with daily surprises, bonuses, and exclusive holiday offers.",
    images: ["https://cloud.merbet.com/Preview-image/calendar-universal.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

export default function Page(props) {
  return <CalendarPageShell {...props} defaultLang="en" />;
}
