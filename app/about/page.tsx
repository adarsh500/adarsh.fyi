const Home = () => (
  <main className="flex justify-start items-start flex-col break-words text-xl text-left mt-32 mb-24 flex-1 text-light-primary dark:text-dark-primary mobile:py-6 mobile:px-4 mobile:mb-20 mobile:text-base">
    <div className="flex justify-center items-start flex-col animate-fadeInUp">
      <p className="text-5xl font-extrabold">About Me</p>
      <p className="mt-12 text-light-secondary dark:text-dark-secondary leading-9">
        I'm a 20 y/o full-stack developer from Bangalore, India. I'm currently
        studying at DSCE. I'm currently working as a Software Development
        Engineer Intern at{" "}
        <a href="https://cloudsek.com/" target="_blank" className="text-link">
          CloudSEK
        </a>
        <br />
        <br />I tend to spend my free time working on side projects like{" "}
        <a
          href="https://mark3.vercel.app"
          target="_blank"
          className="text-link"
        >
          Mark
        </a>{" "}
        and{" "}
        <a
          href="https://cal-nu.vercel.app"
          target="_blank"
          className="text-link"
        >
          Cal.ndr
        </a>
        , contributing to open source or practicing DSA.
        <br />
        <br />I absolutely love working with NextJs, React, and Typescript. I'm
        also learning backend development on the side. You can find my resume{" "}
        <a
          href="https://drive.google.com/file/d/1XvDKnRz8UDSHq5kLwZh7JcnD4QKX2cLI/view?usp=sharing"
          className="text-link"
        >
          here
        </a>
        .
        <br />
        <br />
        You can often find me talking about tech, mechanical keyboards and Star
        Wars.
        <br />
        <br />
        If you have an interesting project or if you want to collab on a
        hackathon or just want to say hi, feel free to reach out to me via{" "}
        <a
          href="https://twitter.com/adarshsulegai50"
          target="_blank"
          className="text-link"
        >
          Twitter
        </a>
        .
      </p>
    </div>
  </main>
);

export default Home;
