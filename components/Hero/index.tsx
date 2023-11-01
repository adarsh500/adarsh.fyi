const Hero = () => {
  return (
    <main className="flex-1 flex items-center justify-center break-words text-xl flex-col text-left mt-40 mb-20 text-light-primary dark:text-dark-primary mobile:py-10 mobile:px-4 mobile:mt-8 mobile:mb-4">
      <div className="flex items-start justify-center flex-col">
        <p
          className="text-6xl leading-snug font-extrabold bg-[length:400%_400%] animate-gradientBlur bg-foo transition-all duration-300 ease-in-out text-transparent bg-clip-text mobile:text-[42px]"
          id="hero-text"
        >
          Adarsh Sulegai
        </p>

        <p>
          A frontend developer who loves to build things for the web. I'm
          currently working at{" "}
          <a
            href="https://www.cloudsek.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            CloudSEK
          </a>
          .

        </p>
      </div>
    </main>
  );
};

export default Hero;
