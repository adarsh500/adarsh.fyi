import NowPlaying from "@components/NowPlaying";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";

export const links = [
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
    icon: RiTwitterXLine,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adarsh-sulegai/",
    icon: FaLinkedinIn,
  },
];

const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center w-full mt-12 border-t border-solid border-border-dark slide-enter-content
      py-8 px-6 mobile:mt-4 mobile:py-6 mobile:px-8
    "
    >
      <div className="flex justify-start">
        {links.map((link, index) => {
          const { name, url, icon } = link;
          return (
            <Link key={index} href={url} target="_blank" className="fill-white">
              {icon({
                className: "h-5 w-5 align-middle mr-9 fill-white",
              })}
            </Link>
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
