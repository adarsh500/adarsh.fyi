"use client";
const Analytics = dynamic(
  () =>
    import("@vercel/analytics/react").then((component) => component.Analytics),
  {
    ssr: false,
  }
);
const ProgressBar = dynamic(
  () =>
    import("next-nprogress-bar").then((component) => component.AppProgressBar),
  {
    ssr: false,
  }
);
const SpeedInsights = dynamic(
  () =>
    import("@vercel/speed-insights/next").then(
      (component) => component.SpeedInsights
    ),
  {
    ssr: false,
  }
);
import dynamic from "next/dynamic";

const ClientWrapper = () => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <ProgressBar
        height="2px"
        color="#ffffff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ClientWrapper;
