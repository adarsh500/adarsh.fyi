import Link from "next/link";
import React from "react";

type ExperienceProps = {
  company: string;
  role: string;
  location: string;
  duration: string;
  shortDuration: string;
  logo: any;
  description: string[];
  url: string;
};

const Experience = (props: ExperienceProps) => {
  const {
    company,
    role,
    location,
    duration,
    shortDuration,
    description,
    logo,
    url,
  } = props;

  return (
    <div className="slide-enter-content flex h-min p-8 text-lg rounded-md w-full transition-all duration-300 ease-in-out bg-bg-dark border border-solid border-border-dark shadow-soft-elev ring-1 ring-white/5 hover:ring-white/15 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand mobile:ml-0 mobile:py-5 mobile:px-[18px]">
      <div className="mr-6 mobile:hidden ">
        <Link href={url} target="_blank" className="fill-white">
          {logo()}
        </Link>
      </div>
      <div className="w-full float-right flex-col">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <Link
              href={url}
              target="_blank"
              className="text-lg font-semibold mobile:text-lg text-dark-primary"
            >
              {company}
            </Link>
            <p className="text-lg font-medium text-dark-secondary mobile:text-base">
              {role}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold mobile:text-lg text-dark-primary mobile:hidden">
              {duration}
            </p>
            <p className="desktop:hidden mobile:text-lg text-dark-primary font-medium">
              {shortDuration}
            </p>
            <p className="text-lg text-dark-secondary mobile:text-base font-medium">
              {location}
            </p>
          </div>
        </div>
        <div className="mt-6 text-lg text-dark-secondary mobile:mt-4 mobile:text-base">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
