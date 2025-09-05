import { useState } from "react";

export default function Quastions() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "ما هو برنامج إدارة المختبرات الطبية؟",
      answer:
        "برنامج إدارة المختبرات الطبية هو نظام شامل مصمم لإدارة كافة جوانب المختبرات الطبية، بدءًا من إدارة بيانات المرضى والفحوصات، إلى إنشاء التقارير.",
    },

    {
      question: 
     "كيف يمكنني البدء باستخدام البرنامج؟",
      answer:
         "يمكنك البدء بإستخدام البرنامج من خلال تحميليه من هذا الموقع عبر روابط التحميل المتوفرة و التمتع بنسخة مجانية مدى الحياة.",
    },

    {
      question: 
       "كيف يتم تأمين بيانات المرضى في النظام؟",
      answer:
           "يتم تأمين بيانات المرضى باستخدام تقنيات التشفير الحديثة وضوابط الوصول الصارمة.",
    },

    {
      question:
      "ما هي متطلبات النظام لتشغيل البرنامج؟",
      answer:
          "متطلبات النظام لتشغيل البرنامج تشمل معالج حديث, ذاكرة عشوائية كافية, ومساحة تخزين مناسبة.",
 },
    {
      question: 
     "هل يمكنني تخصيص البرنامج حسب احتياجات مختبري؟",
      answer:
        "نعم، يمكنك تخصيص البرنامج وفقًا لاحتياجات مختبرك من خلال الخيارات المتاحة في الإعدادات.",
    },
  ];

  return (

    <div dir="rtl" className=" relative mt-[90px] flex max-md:flex-col gap-5  w-full text-[#ffffff]" >
          <div className="absolute z-[0] right-0 top-3/4 w-[650px] h-[650px] bg-[#C59CFF] rounded-full blur-[500px]" />
      <div className="flex flex-col gap-4 w-[500px]">
        <h1 className="font-[700] text-[40px] max-md:text-[25px]">الأسئلة الشائعة</h1>
        <p className="text-[#9EA3BF] font-[400] text-[23px] max-md:text-[18px]">
          سنحاول الأجابة على ابرز الأسئلة التي تخطر ببالك
        </p>
        <img src="/quastion.png" width="195px" height="300px" alt="dr-lab" />
      </div>
      <div className="flex flex-col gap-4 w-[550px] max-md:w-[450px] max-sm:w-[350px] ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`py-[20px] px-[10px] ${
              openIndex === index ? "" : "border-b border-[#292D3A]"
            }`}
          >
            <div className=" flex flex-rows !justify-between gap-25 font-[400] text-[24px] text-center text-[#ffffff] ">
              <h1 className="font-[400] text-[18px] max-md:text-[13px] "> {faq.question}</h1>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="text-[24px]"
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <p className="text-[16px] bg-[#0A0E28] p-10 max-md:p-6 rounded-[15px] !mt-[20px] max-md:text-[10px]">
                {" "}
                {faq.answer}{" "}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
