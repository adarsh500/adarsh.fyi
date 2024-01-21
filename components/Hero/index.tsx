const Hero = () => {
  return (
    <main className="flex-1 flex items-center justify-center break-words text-xl flex-col text-left mt-24 mb-20 text-light-primary dark:text-dark-primary mobile:py-12 mobile:px-4 mobile:my-0">
      <div className="flex items-start justify-center flex-col">
        <p
          className="text-5xl leading-snug font-extrabold bg-[length:400%_400%] animate-gradientBlur bg-foo transition-all duration-300 ease-in-out text-transparent bg-clip-text mobile:text-[36px]"
          id="hero-text"
        >
          Adarsh Sulegai
        </p>

        <p className="text-left mt-4 w-[90%] text-light-secondary text-xl leading-9 font-medium dark:text-dark-secondary mobile:text-lg mobile:leading-8 mobile:w-[100%]">
          A frontend developer who loves crafting rich and seamless experiences
          for the web. I'm currently working as an SDE 1 at{" "}
          <a
            href="https://www.cloudsek.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CloudSEK
          </a>
          .<br /> Previously, did frontend at{" "}
          <a
            href="https://www.mydukaan.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Dukaan.
          </a>
        </p>
      </div>
    </main>
  );
};

export default Hero;
