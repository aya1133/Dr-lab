"use client";

import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Bgr } from "./components/Bgr";
import Container from "./components/Container";
import About from "./components/About";
import Advans from "./components/Advans";
import Prem from "./components/Prem";
import Quastions from "./components/Quastions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className=" z-0 bg-[#030915] w-full h-screen overflow-x-hidden ">
        <Bgr className=" absolute z-[1] w-full h-screen" />
        <div className="absolute right-0 top-3/4 w-[650px] h-[650px] bg-[#C59CFF] rounded-full blur-[500px]" />

        <div className="absolute inset-0 z-[2] overflow-x-hidden ">
          <Container>
            <Navbar />
            <HeroSection />
            <About />
            <Advans />
            <Prem />
              <Bgr className=" absolute z-[3] w-full h-screen pointer-events-none " />
            <Quastions className=" absolute !z-[4]" />
             <Bgr className=" absolute z-[3] w-full h-screen pointer-events-none " />
            <Contact  className=" absolute !z-[5]"  />
            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
}
