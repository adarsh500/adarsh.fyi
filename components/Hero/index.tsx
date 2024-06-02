import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex-1 flex items-center justify-center break-words text-xl flex-col text-left mt-24 mb-20 text-dark-primary mobile:py-12 mobile:px-4 mobile:my-0">
      <div className="flex items-start justify-center flex-col ">
        <p
          className="text-5xl leading-snug font-extrabold bg-[length:400%_400%] animate-gradientBlur bg-foo transition-all duration-300 ease-in-out text-transparent bg-clip-text mobile:text-[36px]"
          id="hero-text"
        >
          Adarsh Sulegai
        </p>

        <p className="slide-enter-content text-balance text-left mt-4 text-xl leading-9 font-normal text-dark-primary mobile:text-lg mobile:leading-8 mobile:w-[100%]">
          A frontend developer who loves crafting rich and seamless experiences
          for the web. I'm currently working as an SDE 1 at{" "}
          <Link
            href="https://www.cloudsek.com/"
            target="_blank"
            className="font-medium underline decoration-zinc-700 underline-offset-6 hover:decoration-zinc-300 hover:underline-offset-4 transition-all duration-300 ease-in-out und"
          >
            CloudSEK
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Hero;
