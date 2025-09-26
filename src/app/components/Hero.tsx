"use client";

import Image from "next/image";
import React from "react";
import Profile from "../../../public/sht2.jpg";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "../utils/animation";

export default function Hero() {
  const socialMedia = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Suhaitsht",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/mouhammadu-suhait/",
    },
  ];

  return (
    <section className="p-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src={Profile}
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </motion.div>
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl md-6xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <motion.span
            {...fadeIn}
            transition={{ delay: 0.8 }}
            className="text-primary"
          >
            Suhait
          </motion.span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {socialMedia.map((items, index) => (
            <Link
              key={index}
              href={items.href}
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              {items.icon}
            </Link>
          ))}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Link
            href=""
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href=""
            className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
