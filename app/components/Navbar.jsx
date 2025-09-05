"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import ArrowIcon from "./ArrowIcon";

export default function Navbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <Container>
      <nav className="mt-[40px] flex justify-center">
        <div
          className="bg-[#1e1e1e] text-[#CCCCCC] w-[60%] py-2 px-2 flex items-center justify-between text-center rounded-xl border-2 border-[#FFFFFF1A] transition-all duration-100 ease-in-out hover:w-[100%]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Button
  className={`flex items-center  py-4 !px-6 rounded-[12px] transition-all duration-500 ${
    hovered ? "bg-[#6C40B5]" : "bg-[#9053E7]"
  }`}
>
  <ArrowIcon />
  {hovered && (
    <span className="transition-opacity duration-500 text-[18px] font-[700]">
      جرب الآن
    </span>
  )}
</Button>

          <div className="flex gap-5">
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

          <Link
            href="/"
            className="hover:text-blue-600 mr-20px "
          >
            <img
              src={hovered ? "/footer.png" : "/lab-header.png"}
              alt="Lab logo"
            />
          </Link>
        </div>
      </nav>
    </Container>
  );
}