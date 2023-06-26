import React from "react";

const Section = (props: { children: React.ReactElement; subtitle: string }) => {
  return (
    <div className="flex flex-col justify-center align-top my-12 animate-fadeInUp mobile:my-10 mobile:mx-4 last:mb-16">
      <h2 className="text-3xl font-bold mobile:text-2xl">{props.subtitle}</h2>
      {props.children}
    </div>
  );
};

export default Section;
