import React from "react";
import styles from "./Experience.module.scss";

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
    <div className="flex h-min p-8 text-lg rounded-lg w-full mb-6 transition-all duration-300 ease-in-out bg-bg-light border border-solid border-border-light dark:bg-bg-dark dark:border-border-dark hover:scale-101 hover:border-black hover:dark:border-white even:mb-0 mobile:ml-0 mobile:h-[220px] mobile:py-7 mobile:px-[18px]">
      <div className="mr-6 mobile:hidden ">
        <a
          href={url}
          target="_blank"
          className="fill-light-primary dark:fill-dark-primary"
        >
          {logo()}
        </a>
      </div>
      <div className="w-full float-right flex-col ">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <a href={url} target="_blank" className={styles.primary}>
              {company}
            </a>
            <a href={url} target="_blank" className={styles.primaryMobile}>
              {company}
            </a>
            <p className={styles.secondary}>{role}</p>
          </div>
          <div className="text-right">
            <p className={styles.primary}>{duration}</p>
            <p className={styles.primaryMobile}>{shortDuration}</p>
            <p className={styles.secondary}>{location}</p>
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
