import Container from "./Container";
import { motion } from "framer-motion";
export default function About() {
  return (
    <Container>
      <div dir="rtl" className="relative py-20 max-md:py-0">
        <div className="absolute z-[-1] -top-10 right-0 w-[400px] h-[400px] bg-[#4e4788] rounded-full blur-[1000px] " />

        <div className=" justify-center text-center text-[#FFFFFF] mb-[50px] max-md:mt-[-150px]">
          <h1 className="font-[700] text-[23px] mb-[10px]">
            ما هو نظام Dr.Lab؟
          </h1>
          <p className="text-[#9EA3BF] font-[400] text-[16px] text-center max-md:text-[13px] ">
            برنامجنا لإدارة المختبرات الطبية هو حل شامل ومتكامل صُمم خصيصاً
            لتلبية احتياجات المختبرات الطبية والمراكز <br />
            الصحية. يهدف البرنامج إلى تسهيل عمليات إدارة المختبر وتحسين كفاءة
            الأداء من خلال أدوات متعددة ووظائف
            <br />
            متقدمة.
          </p>
          <div className="flex flex-row gap-6 mt-[40px] max-md:flex-col">
            <div className="bg-[#9747FF1A] group hover:bg-[#9045f375] transition duration-500  hover:text-[#fff] px-6 py-8 flex flex-col  text-start gap-2 rounded-[12px] justify-start">
               <div className=" w-[44px] h-[43px] p-1 rounded-[12px] border border-[#4c4764] bg-[#ffffff31] flex items-center justify-center group-hover:border-[#afa7d4] group-hover:bg-[#d3bbf3ef] ">
              <img src="/icon1.png" alt="1" width="35px" height="35px" className="bg-transparent"  />
              </div>
              <h1 className="text-[20px] font-[200]">زيادة الكفاءة</h1>
              <p className="text-[#9EA3BF] font-[400] text-[16px]">
                تقليل الوقت المستغرق في إدارة العمليات اليومية من خلال أتمتة
                العديد من المهام الروتينية.
              </p>
            </div>

            <div className="bg-[#9747FF1A] px-6 py-8 flex flex-col group hover:bg-[#9045f375] transition duration-500  text-start gap-2 rounded-[12px] justify-start">
                 <div className="  w-[44px] h-[43px] p-1 rounded-[12px] border border-[#4c4764] bg-[#ffffff31] flex items-center justify-center  group-hover:border-[#afa7d4] group-hover:bg-[#d3bbf3ef] ">
              <img src="/icon2.png" alt="2" width="35px" height="35px" className="hover:bg-transparent" />
              </div>
              <h1 className="text-[20px] font-[200]">توفير التكاليف</h1>
              <p className="text-[#9EA3BF] font-[400] text-[16px]">
                تقليل الحاجة إلى الأعمال الورقية والتقليل من الأخطاء البشرية،
                مما يؤدي إلى تقليل التكاليف التشغيلية.
              </p>
            </div>

            <div className="bg-[#9747FF1A] px-6 py-8 flex flex-col group hover:bg-[#9045f375] transition duration-500 hover:text-[#fff] text-start gap-2 rounded-[12px] justify-start">
               <div className="  w-[44px] h-[43px] p-1 rounded-[12px] border border-[#4c4764] bg-[#ffffff31] flex items-center justify-center group-hover:border-[#afa7d4] group-hover:bg-[#d3bbf3ef] ">
              <img src="/icon3.png" alt="3" width="35px" height="35px" />
              </div>
              <h1 className="text-[20px] font-[200]">تحسين جودة الخدمة</h1>
              <p className="text-[#9EA3BF] font-[400] text-[16px]">
                توفير معلومات دقيقة وسريعة للمرضى والأطباء، مما يساهم في تحسين
                جودة الرعاية الصحية المقدمة.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-l from-[#040B17] to-[#241C45] hover:bg-gradient-to-l hover:to-[#9a5ee97c] w-full   px-6 py-8 max-md:px-4 max-md:py-4 flex flex-row max-md:flex-col text-start gap-2 rounded-[12px] justify-left mt-[20px] transition-colors duration-600">
            <div className="flex flex-col gap-4 w-[400px] max-md:w-[320px] max-sm:w-[290px]">
              <h1 className="font-[700] text-[34px] max-md:text-[16px] ">المميزات و الخصائص</h1>
              <p className=" font-[200] text-[15px] max-md:text-[10px]">
                يساهم برنامج إدارة المختبرات الطبية في زيادة الكفاءة من خلال
                أتمتة المهام الروتينية، مما يقلل من الوقت المستغرق في العمليات
                اليومية ويحسن الأداء العام. كما يعزز جودة الخدمة المقدمة من خلال
                توفير معلومات دقيقة وسريعة، مما يزيد من رضا المرضى. يتمتع النظام
                بأعلى مستويات الأمان، ويقلل من التكاليف التشغيلية بفضل تقليل
                الحاجة إلى الأعمال الورقية والأخطاء البشرية.
              </p>
            </div>
            <div className=" flex flex-row">
            <img
              src="/dr-lab1.png"
              className="transition-transform duration-500 ease-in-out hover:-translate-x-10 max-md:w-[150px] max-md:h-[200px] max-sm:w-[130px]  max-sm:h-[160px] "
            />
            <img src="/about.png" alt="about" className="w-[500px]  max-md:w-[250px] max-md:h-[200px] max-sm:w-[180px] max-sm:h-[150px]" />
         </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
