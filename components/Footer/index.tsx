import React from "react";
import styles from "./Footer.module.scss";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/adarsh500">
        <VscGithubInverted className={styles.icon} />
      </a>
      <a href="https://twitter.com/adarshsulegai50">
        <VscTwitter className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/adarsh-sulegai/">
        <FaLinkedinIn className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/adarsh_sulegai/">
        <SiInstagram className={styles.icon} />
      </a>
      <a href="mailto:adarshsulegai50@gmail.com">
        <MdMail className={styles.icon} />
      </a>
    </div>
  );
};

export default Footer;
