import ClientWrapper from "@components/ClientWrapper";
import Footer from "@components/Footer";
import NowPlaying from "@components/NowPlaying";
import { GeistSans } from "geist/font";
import { Metadata } from "next";
import "../styles/globals.scss";
import Navbar from "./nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body suppressHydrationWarning={true} className="dark:bg-dark">
        <Navbar />
        <div className="text-left flex flex-col h-full flex-1 mobile:p-0 desktop:w-[760px] mt-[20] mx-auto mb-0">
          {children}
          <Footer />
        </div>
        <ClientWrapper />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Adarsh Sulegai",
  icons: {
    icon: "/_next/static/media/metadata/favicon.svg",
  },
};
