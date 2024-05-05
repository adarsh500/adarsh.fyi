import React from "react";

const Section = (props: { children: React.ReactElement; subtitle: string }) => {
  return (
    <div className="slide-enter-content flex flex-col justify-center align-top my-12 slide-enter-content mobile:my-6 mobile:mx-4 last:mb-16">
      <h2 className="slide-enter-content text-3xl font-bold mobile:text-xl text-dark-primary">
        {props.subtitle}
      </h2>
      {props.children}
    </div>
  );
};

export default Section;
