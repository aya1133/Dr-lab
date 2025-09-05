import Container from "./Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Prem() {
   const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  return (
    <Container>
      <div className="!mt-[100px] flex flex-col justify-center text-center w-full h-full mb-[70px]">
        <h1 className=" text-[#ffffff] font-[700] text-[23px] mb-[10px]">
          {" "}
          خطط الاشتراك في نظام Dr. Lab{" "}
        </h1>
        <p className="text-[#9EA3BF] font-[200] text-[16px] ">
          اختر الخطة التي تناسب احتياجاتك{" "}
        </p>
      </div>
      <div className=" flex gap-3 text-[#ffffff] justify-center w-fit items-stretch mb-[30px]">
        <div className=" flex flex-col gap-4  h-full !justify-start bg-[#0D131E] !px-[50px] !py-6 rounded-[26px] border-1 border-[#1D232C] ">
          <h1 className="font-[700] text-[18px]">النسخة المجانية </h1>
          <p className="font-[200] text-[16px]">
            يمكنك استخدام النسخة المجانية مدى الحياة
          </p>
          <h1 className="font-[700] text-[24px] mb-[20px]">0 دينار عراقي</h1>
          <div className="relative flex items-center w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
            <div className="absolute Z-[2] bg-[#262B34] right-15 text-[12px] font-light w-[100px] px-2 py-2 !text-center rounded-[10px]">
              {" "}
              ماذا تتضمن
            </div>
          </div>
          <div className="flex flex-col text-[12px] text-[#FFFFFF99] gap-3 !mt-[30px]">
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1> عدد التحاليل اليومي</h1>
              </div>
              <h1>20 فقط </h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1> التحديثات</h1>
              </div>
              <h1>تلقائياً</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1>الدعم الفني</h1>
              </div>
              <h1>محدود</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/notcheck.png" alt="done" />
                <h1> الإحصائيات والتقارير</h1>
              </div>
              <h1>غير متوفرة</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/notcheck.png" alt="done" />
                <h1>إرسال النتائج عبر واتساب</h1>
              </div>
              <h1>غير متوفرة</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/notcheck.png" alt="done" />
                <h1>طباعة الباركود</h1>
              </div>
              <h1>غير متوفرة</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/notcheck.png" alt="done" />
                <h1> النسخ الاحتياطي</h1>
              </div>
              <h1>غير متوفرة</h1>
            </div>

            <a href="/">
              <motion.div
                className="!px-0 py-3 text-[18px] text-[white] font-bold bg-[#262B34] rounded-2xl items-center text-center flex justify-center gap-2 cursor-pointer mt-[20px]"
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
              >
                {hovered1 && (
                  <motion.span
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <ArrowIcon />
                  </motion.span>
                )}
                اختر الباقة
              </motion.div>
            </a>
          </div>
        </div>

        <div className=" flex flex-row ">
          <div className=" relative z-[1] flex flex-col gap-4  h-[650px] !justify-start bg-[#0D131E] px-[60px] py-12 pt-10 mt-[-20px] rounded-[26px] border-1 border-[#205cb6]">
            <div className="absolute z-[2] left-[-20px] top-[-100px]">
              <img src="/prem.png" alt="dr-lab" />
            </div>
            <h1 className="font-[700] text-[18px]">
              الاشتراك الشهري ( الاكثر شيوعاً )
            </h1>
            <p className="font-[200] text-[16px]">
              سيتم تجديد الاشتراك بعد انتهاء 30 يوم من تاريخ الاشتراك
            </p>
            <h1 className="font-[700] text-[24px] mb-[20px]">
              15,000 دينار عراقي
            </h1>
            <div className="relative flex items-center w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
            <div className="absolute Z-[2] bg-[#262B34] right-20  text-[12px] font-light w-[100px] px-2 py-2 !text-center rounded-[10px]">
              {" "}
              ماذا تتضمن
            </div>
          </div>
            <div className="flex flex-col text-[12px] text-[#FFFFFF99] gap-3 !mt-[30px]">
              <div className="flex flex-row !text-center gap-2 justify-between ">
                <div className=" flex flex-row text-center justify-center gap-2 ">
                  <img src="/check.png" alt="done" />
                  <h1> عدد التحاليل اليومي</h1>
                </div>
                <h1>غير محدود</h1>
              </div>
              <div className="flex flex-row !text-center gap-2 justify-between ">
                <div className=" flex flex-row text-center justify-center gap-2 ">
                  <img src="/check.png" alt="done" />
                  <h1> التحديثات</h1>
                </div>
                <h1>تلقائي</h1>
              </div>
              <div className="flex flex-row !text-center gap-2 justify-between ">
                <div className=" flex flex-row text-center justify-center gap-2 ">
                  <img src="/check.png" alt="done" />
                  <h1>الدعم الفني</h1>
                </div>
                <h1>كامل</h1>
              </div>
              <div className="flex flex-row !text-center gap-2 justify-between ">
                <div className=" flex flex-row text-center justify-center gap-2 ">
                  <img src="/check.png" alt="done" />
                  <h1> الإحصائيات والتقارير</h1>
                </div>
                <h1>متوفرة</h1>
              </div>
              <div className="flex flex-row !text-center gap-2 justify-between ">
                <div className=" flex flex-row text-center justify-center gap-2 ">
                  <img src="/check.png" alt="done" />
                  <h1> إرسال النتائج عبرواتسابي</h1>
                </div>

                <h1>اختياري</h1>
              </div>
              <div className="flex flex-row !text-center gap-2 justify-between ">
                <div className=" flex flex-row text-center justify-center gap-2 ">
                  <img src="/check.png" alt="done" />
                  <h1>طباعة الباركود</h1>
                </div>

                <h1>متوفرة</h1>
              </div>
              <div className="flex flex-row !text-center gap-2 justify-between ">
                <div className=" flex flex-row text-center justify-center gap-2 ">
                  <img src="/check.png" alt="done" />
                  <h1> النسخ الاحتياطي</h1>
                </div>

                <h1>متوفر</h1>
              </div>

              <a href="/">
                <motion.div
                  className="!px-0 py-3 text-[18px] text-[white] font-bold bg-[#9053E7] rounded-2xl items-center text-center flex justify-center gap-2 cursor-pointer mt-[20px]"
                  onMouseEnter={() => setHovered2(true)}
                  onMouseLeave={() => setHovered2(false)}
                >
                  {hovered2 && (
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center"
                    >
                      <ArrowIcon />
                    </motion.span>
                  )}
                  اختر الباقة
                </motion.div>
              </a>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4  h-full !justify-start bg-[#0D131E] !px-[20px] !py-6 rounded-[26px] border-1 border-[#1D232C] ">
          <h1 className="font-[700] text-[18px]">شراء لمرة واحدة</h1>
          <p className="font-[200] text-[16px]">
            اشتر التطبيق لمرة واحدة وتمتع بجميع المميزات مدى الحياة
          </p>
          <h1 className="font-[700] text-[24px] mb-[20px]">
            350,000 دينار عراقي
          </h1>
         <div className="relative flex items-center w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
            <div className="absolute Z-[2] right-25 bg-[#262B34]   text-[12px] font-light w-[100px] px-4 py-2 !text-center rounded-[10px]">
              {" "}
              ماذا تتضمن
            </div>
          </div>
          <div className="flex flex-col text-[12px] text-[#FFFFFF99] gap-3 !mt-[30px]">
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1> عدد التحاليل اليومي</h1>
              </div>
              <h1>غير محدود</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1> التحديثات</h1>
              </div>
              <h1>تلقائي</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1>الدعم الفني</h1>
              </div>
              <h1>كامل</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1> الإحصائيات والتقارير</h1>
              </div>
              <h1>متوفرة</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1> إرسال النتائج عبرواتسابي</h1>
              </div>

              <h1>اختياري</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1>طباعة الباركود</h1>
              </div>

              <h1>متوفرة</h1>
            </div>
            <div className="flex flex-row !text-center gap-2 justify-between ">
              <div className=" flex flex-row text-center justify-center gap-2 ">
                <img src="/check.png" alt="done" />
                <h1> النسخ الاحتياطي</h1>
              </div>

              <h1>متوفر</h1>
            </div>
            <a href="/">
              <motion.div
                className="!px-0 py-3 text-[18px] text-[white] font-bold bg-[#262B34] rounded-2xl items-center text-center flex justify-center gap-2 cursor-pointer mt-[20px]"
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
              >
                {hovered3 && (
                  <motion.span
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <ArrowIcon />
                  </motion.span>
                )}
                اختر الباقة
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
