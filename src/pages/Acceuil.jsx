import Hero from "@/components/sections/Hero";
import React from "react";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
const Acceuil = () => {
  return (
    <>
      <main className="">
        <Hero></Hero>
        <About></About>
        <Blog></Blog>
      </main>
    </>
  );
};

export default Acceuil;
