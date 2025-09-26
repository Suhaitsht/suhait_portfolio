import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";
export default function page() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs />
      <Newsletter />
    </>
  );
}
