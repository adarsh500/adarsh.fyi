"use client";
import { Analytics } from "@vercel/analytics/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ClientWrapper = () => {
  return (
    <>
      <Analytics />
      <ProgressBar
        height="3px"
        color="#ffffff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ClientWrapper;
