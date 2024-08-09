import React from "react";
import logo from "../assets/aliev-logo.png";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { delay, motion } from "framer-motion";

export const SOCIAL_MEDIA_LINKS = [
  {
    id: 1,
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    id: 2,
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    id: 3,
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    id: 4,
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    id: 5,
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    id: 6,
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          trasnition={{ duration: 0.5 }}
          src={logo}
          alt="logo"
          className="my-20 w-[10rem]"
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((item, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            trasnition={{ duration: 0.2, delay:index * 0.5 }}
            href={item.href}
            target="_blank"
            key={item.id}>
            {item.icon}
          </motion.a>
        ))}
      </div>

      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy:Aliev Davlat. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
