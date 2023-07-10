import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <main className="flex-1 flex items-center justify-center break-words text-xl flex-col text-left mt-40 mb-20 text-light-primary dark:text-dark-primary mobile:py-10 mobile:px-4 mobile:mt-8 mobile:mb-4">
      <div className="flex items-start justify-center flex-col animate-fadeInUp">
        <p
          // className="text-7xl font-extrabold bg-[length:400%_400%] animate-gradient"
          className={styles.title}
        >
          Adarsh Sulegai.
        </p>
        <p className="text-left mt-4 w-[90%] m:w-[100%] text-light-secondary text-xl font-medium leading-relaxed dark:text-dark-secondary mobile:text-lg mobile:w-[100%]">
          I'm a 20 y/o full-stack developer working as an SDE Intern at{" "}
          <a
            href="https://cloudsek.com/"
            target="_blank"
            className="text-light-primary font-medium dark:text-dark-primary"
          >
            CloudSEK
          </a>
          , previously I worked as a Frontend developer at{" "}
          <a
            href="https://mydukaan.io/"
            target="_blank"
            className="text-light-primary font-medium dark:text-dark-primary"
          >
            Dukaan.{" "}
            <span className="desktop:hidden text-light-secondary dark:text-dark-secondary">
              I craft beautiful experiences for the web.
            </span>
          </a>{" "}
          <span className="mobile:hidden">
            <br />I craft beautiful experiences for the web.
          </span>
        </p>
      </div>
    </main>
  );
};

export default Hero;
