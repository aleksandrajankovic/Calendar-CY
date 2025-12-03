// src/app/page.js
export const dynamic = "force-dynamic";

import CalendarPageShell from "./CalendarPageShell";

export const metadata = {
  metadataBase: new URL("https://calendar.meridianbet.com.cy"),
  title: "Ημερολόγιο Προσφορών | Meridianbet Cyprus",
  description:
    "Ανακάλυψε το Χριστουγεννιάτικο Ημερολόγιο Προσφορών της Meridianbet Κύπρου με καθημερινές εκπλήξεις, μπόνους και αποκλειστικές προσφορές όλο τον Δεκέμβριο.",
  keywords: [
    "ημερολόγιο προσφορών",
    "χριστουγεννιάτικες προσφορές",
    "Meridianbet Cyprus προσφορές",
    "δώρα Δεκεμβρίου",
    "ημερήσιες προσφορές στοίχημα",
    "Christmas calendar Cyprus",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ημερολόγιο Προσφορών | Meridianbet Cyprus",
    description:
      "Ανακάλυψε το Χριστουγεννιάτικο Ημερολόγιο Προσφορών της Meridianbet Κύπρου με καθημερινές εκπλήξεις, μπόνους και αποκλειστικές προσφορές όλο τον Δεκέμβριο.",
    url: "/",
    siteName: "Meridianbet",
    images: [
      {
        url: "https://cloud.merbet.com/Preview-image/calendar-universal.png",
        width: 1200,
        height: 630,
        alt: "Προωθητικό Ημερολόγιο",
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ημερολόγιο Προσφορών | Meridianbet Cyprus",
    description:
      "Ανακάλυψε το Χριστουγεννιάτικο Ημερολόγιο Προσφορών της Meridianbet Κύπρου με καθημερινές εκπλήξεις, μπόνους και αποκλειστικές προσφορές όλο τον Δεκέμβριο.",
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
  return <CalendarPageShell {...props} defaultLang="el" />;
}
