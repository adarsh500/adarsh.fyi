import Link from "next/link";

const Home = () => (
  <main
    className="flex justify-start items-start flex-col break-words text-xl text-left 
    mt-20 mb-16 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 
    mobile:mt-6 mobile:mb-10 mobile:text-base"
  >
    <p className="text-5xl font-extrabold mobile:text-4xl mobile:font-bold mb-4 animate-fadeInUp">
      About Me
    </p>
    <div
      className="flex justify-center items-start flex-col leading-9 mobile:text-lg
     break-words text-light-secondary dark:text-dark-secondary animate-fadeInUp
    "
    >
      <Paragraph>
        I'm a 21 y/o frontend engineer from 📍 Bangalore, India. I'm currently
        studying at DSCE and I'm working as a Software Development Engineer 1 at{" "}
        <CustomLink href="https://cloudsek.com/">CloudSEK</CustomLink>.
      </Paragraph>

      <p className="mt-8">
        There are quite a few niche domains that i'm interested in besides tech.
      </p>
      <ul className="list-disc ml-8 mt-4">
        <li>
          I've developed an interest in watches ⌚️ after starting my
          collection. I absolutely love dive watches and those with integrated
          bracelets.
        </li>
        <li>
          I've developed an indulgence for fragrances and have a small but a
          growing collection of fragrances.
        </li>
        <li>
          I'm very much into star-wars ✨. At any given point of time there is a
          20% chance that i'll make a star-wars quote or a reference.
        </li>
        <li>
          I'm also interested in mechanical keyboards. I use a Keychrom K2V2 ⌨️
          and plan to build a custom keyboard soon. Also no, i'm not a socipath,
          i don't use blue switches.
        </li>
      </ul>

      <Paragraph>
        I tend to spend my free time working on some hobby projects like this
        site or <CustomLink href="https://mark3.vercel.app">Mark</CustomLink>, contributing to
        open source or reading tech blogs.
      </Paragraph>

      <Paragraph>
        If you have an interesting project or if you want to collab on a
        hackathon or just want to say hi 👋, feel free to reach out to me via my
        socials or through my mail.
      </Paragraph>

      {/* <Paragraph>
        If you want to know more about my work, you can check out my{" "}
        <Lin href="https://drive.google.com/file/d/1EdIZrgXqwtX1lKmlWMEJV_MW5XcWSVhS/view?usp=sharing">
          Resume
        </Lin>
        .
      </Paragraph> */}
    </div>
  </main>
);

const Paragraph = (props: any) => {
  return (
    <p className="mt-8  leading-9 mobile:mt-8 mobile:text-lg">
      {props.children}
    </p>
  );
};

const CustomLink = (props: any) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold special-underline"
    >
      {props.children}
    </Link>
  );
};

export default Home;
