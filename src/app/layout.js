import { Roboto, Roboto_Condensed} from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata = {
  metadataBase: new URL("https://meridianbet.com.cy"),
  title: "Προωθητικό Ημερολόγιο | Meridianbet",
  description:
    "Μείνε ενημερωμένος για τις καθημερινές προσφορές, ανακάλυψε νέες προωθήσεις και απόλαυσε αποκλειστικές ανταμοιβές με το Προωθητικό Ημερολόγιο της Meridianbet.",
  alternates: {
    canonical: "/calendar",
  },
  openGraph: {
    title: "Προωθητικό Ημερολόγιο | Meridianbet",
    description:
      "Μείνε ενημερωμένος για τις καθημερινές προσφορές, ανακάλυψε νέες προωθήσεις και απόλαυσε αποκλειστικές ανταμοιβές με το Προωθητικό Ημερολόγιο της Meridianbet.",
    url: "/calendar",
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
    title: "Προωθητικό Ημερολόγιο | Meridianbet",
    description:
      "Μείνε ενημερωμένος για τις καθημερινές προσφορές, ανακάλυψε νέες προωθήσεις και απόλαυσε αποκλειστικές ανταμοιβές με το Προωθητικό Ημερολόγιο της Meridianbet.",
    images: ["https://cloud.merbet.com/Preview-image/ccalendar-universal.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/src/app/favicon.ico",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} min-h-screen`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{ style: { background: "#fff", color: "#333" } }}
        />
      </body>
    </html>
  );
}
