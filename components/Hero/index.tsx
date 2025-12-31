import { links } from "@components/Footer";
import LinkWithHover from "@components/LinkWithHover";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col gap-8 mt-24 mb-24 mobile:py-12 mobile:px-4 mobile:my-0">
      {/* Ambient backgrounds */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 -left-10 h-32 w-[520px] rounded-full bg-foo opacity-30 blur-3xl bg-[length:400%_400%] animate-gradient -z-10"
      />

      <main className="flex-1 flex items-center justify-center break-words text-xl flex-col text-left text-dark-primary">
        <div className="flex items-start justify-center flex-col">
          <p
            className="text-6xl leading-tight tracking-tight bg-[length:400%_400%] animate-gradientBlur bg-foo transition-all duration-300 ease-in-out text-transparent bg-clip-text mobile:text-[36px] font-extrabold"
            id="hero-text"
          >
            Adarsh Sulegai
          </p>
          <p className="slide-enter-content text-balance mobile:text-wrap text-left mt-4 text-xl leading-9 font-normal text-dark-primary/90 mobile:text-lg mobile:leading-8 mobile:w-[100%]">
            A frontend developer who loves crafting rich and seamless
            experiences for the web. Currently working as a frontend
            engineer at{" "}
            <LinkWithHover href="https://www.rubrik.com/">Rubrik</LinkWithHover>
          </p>
        </div>
      </main>

      <div className="flex justify-start items-center gap-4">
        {links.map((link, index) => {
          const { name, url, icon } = link;
          return (
            <Link
              key={index}
              href={url}
              target="_blank"
              aria-label={name}
              className="group outline-none inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-white/10 bg-white/5 hover:bg-white/10 hover:ring-white/20 hover:shadow-glow-brand focus-visible:ring-2 focus-visible:ring-brand transition"
            >
              {icon({
                className:
                  "h-5 w-5 align-middle fill-white opacity-90 transition-transform group-hover:opacity-100 group-hover:scale-101 focus-visible:scale-101",
              })}
              <span className="sr-only">{name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
