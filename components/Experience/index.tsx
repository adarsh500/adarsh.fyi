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
    <div className="flex h-min p-8 text-lg rounded-lg w-full transition-all duration-300 ease-in-out bg-bg-light border border-solid border-border-light dark:bg-bg-dark dark:border-border-dark hover:scale-101 hover:border-black hover:dark:border-white mobile:ml-0 mobile:py-7 mobile:px-[18px]">
      <div className="mr-6 mobile:hidden ">
        <a href={url} target="_blank" className="fill-black dark:fill-white">
          {logo()}
        </a>
      </div>
      <div className="w-full float-right flex-col ">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <a
              href={url}
              target="_blank"
              className="text-lg font-medium mobile:text-lg text-light-primary dark:text-dark-primary"
            >
              {company}
            </a>
            <p className="text-lg text-light-secondary dark:text-dark-secondary mobile:text-base">
              {role}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium mobile:text-lg text-light-primary dark:text-dark-primary mobile:hidden">
              {duration}
            </p>
            <p className="desktop:hidden mobile:text-lg text-light-primary dark:text-dark-primary font-medium">
              {shortDuration}
            </p>
            <p className="text-lg text-light-secondary dark:text-dark-secondary mobile:text-base">
              {location}
            </p>
          </div>
        </div>
        <div className="mt-6 text-lg text-light-secondary dark:text-dark-secondary mobile:mt-4 mobile:text-base">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
