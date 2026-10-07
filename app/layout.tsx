import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Allura } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gemy de mon cœur",
  description: "Une histoire, un avenir.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FDF6F5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          background: "linear-gradient(180deg, #FDF6F5 0%, #F8E8EC 100%)",
          backgroundAttachment: "fixed",
          color: "#4A3B3F",
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {children}
      </body>
    </html>
  );
}
