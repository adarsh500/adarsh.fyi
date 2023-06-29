import { Inter } from "next/font/google";
import "../styles/globals.scss";
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
        <div className="text-left flex flex-col h-full flex-1 mobile:p-0 desktop:w-[720px] mt-[20] mx-auto mb-0">
          <Navbar />
          {children}
          <div className="fixed py-4 px-5 rounded-lg bottom-4 left-4 backdrop-blur-md bg-bg-light border border-solid border-border-light dark:bg-bg-dark dark:border-border-dark mobile:hidden">
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
