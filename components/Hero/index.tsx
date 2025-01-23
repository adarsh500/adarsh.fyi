import { links } from "@components/Footer";
import LinkWithHover from "@components/LinkWithHover";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 mt-24 mb-20 mobile:py-12 mobile:px-4 mobile:my-0">
      <main className="flex-1 flex items-center justify-center break-words text-xl flex-col text-left text-dark-primary">
        <div className="flex items-start justify-center flex-col ">
          <p
            className="text-5xl leading-snug font-extrabold bg-[length:400%_400%] animate-gradientBlur bg-foo transition-all duration-300 ease-in-out text-transparent bg-clip-text mobile:text-[36px]"
            id="hero-text"
          >
            Adarsh Sulegai
          </p>
          <p className="slide-enter-content text-balance mobile:text-wrap text-left mt-4 text-xl leading-9 font-normal text-dark-primary mobile:text-lg mobile:leading-8 mobile:w-[100%]">
            A frontend developer who loves crafting rich and seamless
            experiences for the web. I'm currently working as a frontend
            engineer at{" "}
            <LinkWithHover href="https://www.rubrik.com/">Rubrik</LinkWithHover>
          </p>
        </div>
      </main>
      <div className="flex justify-start">
        {links.map((link, index) => {
          const { url, icon } = link;
          return (
            <Link key={index} href={url} target="_blank" className="fill-white">
              {icon({
                className: "h-5 w-5 align-middle mr-9 fill-white",
              })}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
