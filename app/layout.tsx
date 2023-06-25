import { Inter } from "next/font/google";
import "../styles/globals.scss";
import styles from "./Layout.module.scss";
import Footer from "@components/Footer";
import Navbar from "./nav";
import NowPlaying from "@components/NowPlaying";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <div className={styles.container}>
          <Navbar />
          {children}
          <div className={styles.nowPlaying}>
            {/* @ts-expect-error Server Component */}
            <NowPlaying />
          </div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Adarsh's Portfolio",
  icons: {
    icon: "/_next/static/media/metadata/favicon.svg",
  },
};
