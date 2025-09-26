"use client";
import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa6";

import { motion } from "framer-motion";
import {
  cardHover,
  fadeIn,
  fadeInDown,
  fadeInUp,
  staggerContainer,
} from "../utils/animation";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1 className="text-4xl font-bold text-center" {...fadeInDown}>
        About Me
      </motion.h1>
      {/* Bio section */}

      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          {" "}
          I&apos;m a passionate Full Stack Developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend technologies, I create seamless user experiences and robust
          server-side solutions.
        </p>
      </motion.section>
      {/* Skilled Section */}
      <motion.section className="mb-16" {...fadeIn}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">FrontEnd</h3>
            <ul className="text-secondary space-y-3">
              <li>React /Next.js</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">BackEnd</h3>
            <ul className="text-secondary space-y-3">
              <li>Node Js</li>
              <li>Express Js</li>
              <li>PHP</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others </h3>
            <ul className="text-secondary space-y-3">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience */}

      <motion.section className="mb-16" {...fadeIn}>
        <motion.h2 className="section-title" transition={{ delay: 0.4 }}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-2">
              Junior Full Stack Developer
            </h3>
            <p className="text-primary mb-2">BLiNX Lanka Pvt Ltd</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Developed a real-time Service Management System using PHP, AJAX,
                jQuery, HTML5, CSS, and Bootstrap.
              </li>
              <li>
                Automated warranty verification and repair cost calculation
                workflows, improving service efficiency
              </li>
              <li>
                Managed Free-of-Charge (FOC) and chargeable services based on
                warranty conditions.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section className="mb-16" {...fadeIn}>
        <motion.h2 className="section-title" {...fadeInUp}>
          {" "}
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-2">
              Higher National Diploma (HND) in Software Engineering
            </h3>
            <p className="text-primary mb-2"> ESOFT Metro Campus</p>
            <ul className="text-secondary list-disc list-inside space-y-2"></ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
