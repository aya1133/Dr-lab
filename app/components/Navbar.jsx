"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import ArrowIcon from "./ArrowIcon";
export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container>
      <nav dir="rtl" className="mt-[40px] flex justify-center">
        <div
          className="bg-[#1e1e1e] text-[#CCCCCC] w-[60%] max-md:w-full py-2 px-2 flex  max-md:gap-2 items-center justify-between text-center rounded-xl border-2 border-[#FFFFFF1A] transition-all duration-100 ease-in-out hover:w-[100%] max-md:hover:w-full max-md:flex-col relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          
          <div className="w-full flex items-center justify-between">
           
            <button
              className="hidden max-md:block"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <Button
              className={`flex items-center py-4 !px-6 max-md:hidden rounded-[12px] transition-all duration-500 ${
                hovered ? "bg-[#6C40B5]" : "bg-[#9053E7]"
              }`}
            >
              <ArrowIcon />
              {hovered && (
                <span className="transition-opacity duration-500 text-[18px] max-md:text-[14px] max-md:hidden font-[700]">
                  جرب الآن
                </span>
              )}
            </Button>

             <div className="flex gap-5 items-center max-md:hidden max-md:text-[white] mt-2">
            <Link href="/contact" className="text-[18px] hover:text-purple-500">
              الرئيسية
            </Link>
            <Link href="/contact" className="text-[18px] hover:text-purple-500">
              عن Dr.Lab
            </Link>
            <Link href="/contact" className="text-[18px] hover:text-purple-500">
              المميزات
            </Link>
            <Link href="/contact" className="text-[18px] hover:text-purple-500">
              الاشتراكات
            </Link>
            <Link href="/contact" className="text-[18px] hover:text-purple-500">
              تواصل معنا
            </Link>
          </div>

            <Link href="/" className="hover:text-blue-600 mr-20px max-md:mr-0">
              <img
                src={hovered ? "/footer.png" : "/lab-header.png"}
                alt="Lab logo"
                className="max-md:h-8"
              />
            </Link>
          </div>

          
          {mobileMenuOpen && (
  <div className="flex flex-col gap-3 p-4 w-full bg-[#1e1e1e] rounded-xl border-2 border-[#FFFFFF1A] md:hidden mt-2">
    <Link href="/contact" className="text-[16px] hover:text-purple-500 py-2">الرئيسية</Link>
    <Link href="/contact" className="text-[16px] hover:text-purple-500 py-2">عن Dr.Lab</Link>
    <Link href="/contact" className="text-[16px] hover:text-purple-500 py-2">المميزات</Link>
    <Link href="/contact" className="text-[16px] hover:text-purple-500 py-2">الاشتراكات</Link>
    <Link href="/contact" className="text-[16px] hover:text-purple-500 py-2">تواصل معنا</Link>
   
    <Button
      className="flex items-center py-4 px-6 rounded-[12px] transition-all duration-500 bg-[#9053E7] mt-2"
    >
      <ArrowIcon />
      <span className="transition-opacity duration-500 text-[16px] font-[700] ml-2">
        جرب الآن
      </span>
    </Button>
  </div>
)}
        </div>
      </nav>
    </Container>
  );
}