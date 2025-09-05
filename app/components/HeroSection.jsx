"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import ArrowIcon from "./ArrowIcon";
import { motion } from "framer-motion";
export default function HeroSection() {

const [hovered, setHovered] = useState(false);
  return (
    <Container>
      <div dir="rtl" >
      <div className="flex flex-col bg-[0f1223] text-[#ece0e0] text-center mt-[50px] text-4xl mx-auto max-w-2xl items-center justify-between gap-7">
        <a href="/">
          <div className="relative px-10 py-3 max-md:px-6 max-md:py-2  max-md:text-[10px] text-[16px]  text-center rounded-full bg-[#0A0315] text-white  shadow-[inset_0_4px_6px_rgba(58,110,242,0.41)] ">
            إصدار جديد متوفر.
            <span className="text-[#845abb] font-extrabold text-[16px] max-md:text-[10px]">
              حمّل الآن
            </span>
          </div>
        </a>
        <h1 className="font-[700] text-[60px] max-md:text-[30px]">
          أجعل عملك أسهل مع نظام المختبرات الأفضل
        </h1>
        <p className="text-[#9EA3BF] font-[400] text-[23px] max-md:text-[13px]">
          نساعدكم على إدارة مختبراتكم الطبية بكفاءة ودقة من خلال نظام مجاني يضمن
          أفضل خدمة لصاحب المختبر.
        </p>

       <a href="/">
        <motion.div
          className="px-10 py-4 max-md:px-8 max-md:py-2  max-md:text-[15px] max-md:rounded-[10px]  text-[18px] font-bold bg-[#9053E7] rounded-2xl items-center text-center flex justify-center gap-2 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          
          {hovered && (
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <ArrowIcon />
            </motion.span>
          )}
          ابدأ مجاناً
        </motion.div>
      </a>

        <p className="text-[#FFFFFF] text-[16px] font-light">
          خطة مجانية مدى الحياة
        </p>
      </div>
      <div className="h-[500px]">
        <div className=" relative  mt-[40px]  ">
          <img className="absolute z-2 h-[500px] w-full max-md:h-[200px] max-md:w-[400px] max-md:mt-[40px]" src="/hero.png" alt="hero" />
          <motion.img
            src="/dr-lab2.png"
            alt="Animated"
            className="absolute z-1 top-[-133px] left-10 max-md:w-[100px] max-md:h-[100px] max-md:top-[5] max-md:left-[35]"
            initial={{ y: 100 }}
            animate={{ y: -50 }}
            transition={{
              y: {
                duration: 0.3,
                yoyo: 1,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </div>
      </div>
    </Container>
  );
}
