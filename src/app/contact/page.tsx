"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { FormData, FormStatus } from "../types";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "../utils/animation";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [states, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1 className="text-4xl font-bold mb-20 text-center" {...fadeInUp}>
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            {" "}
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Email</h3>
                <Link
                  href="mailto:nm.suhaitsuhait@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  nm.suhaitsuhait@gmail.com
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Phone</h3>
                <Link
                  href="tel:0763300767"
                  className="text-secondary hover:text-primary"
                >
                  (+94) 123 456
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkedAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Location</h3>
                <Link
                  href="tel:0763300767"
                  className="text-secondary hover:text-primary"
                >
                  Anuradapuram ,kallanchiyagama kagama
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Contact Form */}
        <motion.div
          className="bg-white dark:bg-dark/50 rounded-lg p-4 shadow-md"
          {...slideInRight}
        >
          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Messages
              </label>
              <textarea
                rows={4}
                required
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Messages"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </motion.div>
            <motion.button
              className="w-full btn btn-primary"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {states === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
            {states === "success" && (
              <motion.p
                className="text-green-500 text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Message sent successfully!
              </motion.p>
            )}

            {states === "error" && (
              <motion.p
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
