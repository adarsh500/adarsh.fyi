import ClientWrapper from "@components/ClientWrapper";
import { GeistSans } from "geist/font/sans";
import dynamic from "next/dynamic";
import { Metadata } from "next/types";
import { Suspense } from "react";
import "../styles/globals.scss";
import Navbar from "./nav";
const Footer = dynamic(() => import("@components/Footer"), {
  ssr: true,
});

type LayoutProps = {
  children: React.ReactNode;
  params?: string;
};

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body suppressHydrationWarning={true} className="dark:bg-dark">
        <Suspense fallback={<></>}>
          <ClientWrapper />
          <Navbar />
        </Suspense>
        <div className="text-left flex flex-col h-full flex-1 mobile:p-0 desktop:w-[760px] mt-[20] mx-auto mb-0">
          {props.children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Adarsh Sulegai",
  description:
    "Adarsh Sulegai is a frontend engineer based in Bangalore, India.",
  icons: {
    icon: "/_next/static/media/metadata/favicon.svg",
  },
};
