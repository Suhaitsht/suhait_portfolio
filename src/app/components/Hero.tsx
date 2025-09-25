import Image from "next/image";
import React from "react";
import Profile from "../../../public/sht2.jpg";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa6";

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
        <div className="flex flex-col items-center mb-4">
          <Image
            src={Profile}
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>
        <h1 className="text-4xl md-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-primary">Suhait</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {socialMedia.map((items, index) => (
            <Link
              key={index}
              href={items.href}
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              {items.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href=""
            className="bg-primary inline-block w-fit md:w-auto text-white px-8 py-3 rounded-lg  hover:bg-primary/70 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href=""
            className="bg-gray-500  inline-block w-fit md:w-auto text-white-800 px-8 py-3 rounded-lg  hover:bg-gray-400 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
