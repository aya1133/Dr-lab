import ArrowIcon from "./ArrowIcon";
import GradientBorder from "./GradientBorder";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Contact({ className }) {
  const [hovered, setHovered] = useState(false);

  const list = [
    {
      icon: <Mail className="w-[30px] h-[30px]" />,
      title: "info@puretik.com",
    },
    {
      icon: <Phone className="w-[30px] h-[30px]" />,
      title: "07710553120",
    },
    {
      icon: <MapPin className="w-[30px] h-[30px]" />,
      title: "بغداد ,شارع الصناعة",
    },
  ];

  return (
    <div dir="rtl" className="relative mt-[120px] flex max-md:flex-col justify-between gap-8  items-center w-full text-[#ffffff] !mb-[80px]">
      <div className="flex flex-col gap-4 w-[500px] max-md:w-[400px]  max-sm:w-[320px] ">
        <h1 className="font-[700] text-[40px] max-md:text-[30px]">تواصل معنا</h1>
        <p className="text-[#9EA3BF] font-[400] text-[16px] max-md:text-[13px]">
          نحن هنا لمساعدتك! إذا كان لديك أي استفسارات أو تحتاج إلى دعم فني لا
          تتردد في التواصل معنا عبر أي من الوسائل التالية
        </p>

        {list.map((item, index) => (
          <GradientBorder
            key={index}
            gradientFrom="#5600D0"
            gradientTo="#5600D000"
            borderWidth="1px"
            borderRadius="rounded-3xl"
            hoverEffect={true}
          >
            <div className="flex items-center gap-8 text-[20px] font-light px-[20px] py-[20px] bg-[#27273E] rounded-3xl border border-gray-600 cursor-pointer transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#040B17] group-hover:to-[#241C45] group">
              <div className="w-[40px] h-[40px] p-2 flex items-center justify-center group-hover:bg-white/20  group-hover:border-white/50 group-hover:border-2 rounded-xl transition-all duration-300">
                {item.icon}
              </div>
              <p>{item.title}</p>
            </div>
          </GradientBorder>
        ))}
      </div>

      <div>
        <div className="flex flex-col gap-4 max-md:w-[400px] max-sm:w-[330px] ">
          <div className=" relative overflow-hidden  group  shadow-[inset_0_1px_1px_0_#7e28f685,inset_1px_0_0_0_#7e28f685] rounded-3xl p-6  !mt-[20px] gruop hover:shadow-none">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.4155240072055!2d44.451455382893236!3d33.30795069172612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578100209e050d%3A0x6de2a37696fbcd0e!2sPureTik!5e0!3m2!1sar!2siq!4v1756916820775!5m2!1sar!2siq"
              className="w-[466px] h-[400px] px-[20px] max-md:w-[350px] max-sm:w-[280px] max-md:h-[300px] max-sm:h-[250px] items-center mt-[20px] mb-[20px] rounded-2xl border-0  transition-transform duration-500 group-hover:scale-120"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(170deg)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-1 bg-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="relative z-0 right-50 bottom-65 max-md:right-27  max-md:bottom-55 max-sm:bottom-50 ">
          <a href="/">
            <motion.div
              className="w-[150px] h-[50px] max-sm:w-[100px]  max-sm:text-[12px] text-[18px] font-bold bg-[#9053E7] rounded-xl items-center text-center flex justify-center gap-2 cursor-pointer"
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
              زيارة الموقع
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
}
