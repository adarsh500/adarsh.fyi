import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { MdMail } from "react-icons/md";
import NowPlaying from "@components/NowPlaying";

const links = [
  {
    name: "Github",
    url: "https://github.com/adarsh500",
    icon: VscGithubInverted,
  },
  {
    name: "Email",
    url: "mailto:adarshsulegai50@gmail.com",
    icon: MdMail,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/adarshsulegai50",
    icon: VscTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adarsh-sulegai/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/adarsh_sulegai/",
    icon: SiInstagram,
  },
];

const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center w-full mt-12 border-t border-solid border-border-light dark:border-border-dark slide-enter-content
      py-8 px-6 mobile:mt-4 mobile:py-6 mobile:px-8
    "
    >
      <div className="flex justify-start">
        {links.map((link, index) => {
          const { name, url, icon } = link;
          return (
            <a
              key={index}
              href={url}
              target="_blank"
              className="fill-black dark:fill-white"
            >
              {icon({
                className: "h-5 w-5 align-middle mr-9",
              })}
            </a>
          );
        })}
      </div>

      <div className="mobile:hidden">
        {/* @ts-expect-error Server Component */}
        <NowPlaying />
      </div>
    </footer>
  );
};

export default Footer;
