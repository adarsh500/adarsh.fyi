import ClientWrapper from "@components/ClientWrapper";
import { Manrope } from "next/font/google";
import { Metadata } from "next/types";
import { Suspense } from "react";
import "../styles/globals.scss";
import Navbar from "./nav";

type LayoutProps = {
  children: React.ReactNode;
  params?: string;
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en" className={manrope.className}>
      <body suppressHydrationWarning={true} className="bg-dark">
        <Suspense fallback={<></>}>
          <ClientWrapper />
          <Navbar />
        </Suspense>
        <div className="text-left flex flex-col h-full flex-1 mobile:p-0 desktop:w-[760px] mt-[20] mx-auto mb-0">
          {props.children}
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
