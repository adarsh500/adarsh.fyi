import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { MdMail } from "react-icons/md";
import NowPlaying from "@components/NowPlaying";

const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center w-full mt-12 border-t border-solid border-border-light dark:border-border-dark animate-fadeInUp
      py-8 px-6 mobile:mt-4 mobile:py-6 mobile:px-8
    "
    >
      <div className="flex justify-start">
        <a href="https://github.com/adarsh500">
          <VscGithubInverted className="h-5 w-5 align-middle mr-9" />
        </a>
        <a href="https://twitter.com/adarshsulegai50">
          <VscTwitter className="h-5 w-5 align-middle mr-9" />
        </a>
        <a href="https://www.linkedin.com/in/adarsh-sulegai/">
          <FaLinkedinIn className="h-5 w-5 align-middle mr-9" />
        </a>
        <a href="mailto:adarshsulegai50@gmail.com">
          <MdMail className="h-5 w-5 align-middle mr-9" />
        </a>
        <a href="https://www.instagram.com/adarsh_sulegai/">
          <SiInstagram className="h-5 w-5 align-middle mr-9" />
        </a>
      </div>

      <div className="mobile:hidden">
        {/* @ts-expect-error Server Component */}
        <NowPlaying />
      </div>
    </footer>
  );
};

export default Footer;
