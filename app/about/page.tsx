import Link from "next/link";
import PageLayout from "@components/PageLayout";
import LinkWithHover from "@components/LinkWithHover";

const Home = () => (
  <PageLayout title="About Me">
    <div
      className="slide-enter-content flex justify-center items-start flex-col leading-9 mobile:text-lg
     break-words text-dark-secondary
    "
    >
      <Paragraph>
        I'm a 23 y/o frontend engineer from Bangalore, India. I'm currently
        working as a Software Development Engineer 1 at{" "}
        <LinkWithHover href="https://rubrik.com/">Rubrik</LinkWithHover>.
      </Paragraph>

      <p className="mt-8">
        There are a bunch of things that i'm interested in besides tech.
      </p>
      <ul className="list-none ml-2 mt-4">
        <li className="flex gap-2 before:content-['-'] before:text-zinc-200 before:mr-2">
          I've developed an interest in watches after starting my collection. I
          absolutely love dive watches and those with integrated bracelets.
        </li>
        <li className="flex gap-2 before:content-['-'] before:text-zinc-200 before:mr-2">
          I've developed an indulgence for fragrances and have a small but a
          growing collection of fragrances.
        </li>
        <li className="flex gap-2 before:content-['-'] before:text-zinc-200 before:mr-2">
          I'm very much into star-wars. At any given point of time there is a
          20% chance that i'll make a star-wars quote or a reference.
        </li>
        <li className="flex gap-2 before:content-['-'] before:text-zinc-200 before:mr-2">
          I'm also interested in mechanical keyboards. I use a Keychrom K2V2 and
          plan to build a custom keyboard soon. Also no, i'm not a sociopath, i
          don't use blue switches.
        </li>
        <li className="flex gap-2 before:content-['-'] before:text-zinc-200 before:mr-2">
          I do cook occasionally, you can call me sasta Gordon Ramsay.
        </li>
        <li className="flex gap-2 before:content-['-'] before:text-zinc-200 before:mr-2">
          When i'm not doing any of these, you'll either find me running or
          skateboarding at cubbon park or lifting weights at the gym.
        </li>
      </ul>

      <Paragraph>
        I tend to spend my free time working on some hobby projects like this
        site or{" "}
        <LinkWithHover href="https://mark3.vercel.app">Mark</LinkWithHover>{" "}
        contributing to open source or reading tech blogs.
      </Paragraph>

      <Paragraph>
        If you have an interesting project or if you want to collab on a
        hackathon or just want to say hi, feel free to reach out to me via my
        socials or through my mail.
      </Paragraph>

      {/* <Paragraph>
        If you want to know more about my work, you can check out my{" "}
        <Lin href="https://drive.google.com/file/d/1H1avtPcQQ7DulRdMLJ81MjKy0-Bl-jsu/view?usp=sharing">
          Resume
        </Lin>
        .
      </Paragraph> */}
    </div>
  </PageLayout>
);

const Paragraph = (props: any) => {
  return (
    <p className="mt-8 leading-9 mobile:mt-8 mobile:text-lg text-balance">
      {props.children}
    </p>
  );
};

const CustomLink = (props: any) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="font-medium underline decoration-zinc-700 underline-offset-6 hover:decoration-zinc-300 hover:underline-offset-4 transition-all duration-300 ease-in-out und"
    >
      {props.children}
    </Link>
  );
};

export default Home;
