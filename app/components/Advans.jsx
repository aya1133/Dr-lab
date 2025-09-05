import Container from "./Container";

export default function Advans() {
  return (
    <Container>
      <div dir="rtl" >
      <div className="flex flex-col justify-center text-center text-[60px] max-md:text-[30px] font-bold mt-[50px] ">
        <h1 className="text-[#F6F6F7]">ميزات قوية لمساعدتك في إدارة</h1>
        <h1 className="text-[#7E808F]"> جميع العملاء المحتملين لديك </h1>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-row mt-[40px] text-white w-full gap-3 max-md:flex-col">
          <div className="bg-[#151829] p-6  rounded-[16px] w-[30%] max-md:w-[100%] hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685] ">
            <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img   src="/grid1.png" />
           </div>
            <h1 className="text-[20px] font-[700] !mt-3 mb-[5px]">
              سجل الزيارات
            </h1>
            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              تتبع سجل زيارات المرضى للمختبر، يسهل الوصول إلى التاريخ الطبي لكل
              مريض
            </p>
          </div>
          <div className="bg-[#151829] p-6  rounded-[16px] w-[30%] max-md:w-[100%] hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685]">
             <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img src="/grid2.png" />
            </div>
            <h1 className="text-[20px] font-[700] !mt-3 mb-[5px]">
              طباعة النتائج والتقارير{" "}
            </h1>
            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              طباعة النتائج والتقارير بصيغة PDF مباشرة من النظام لنسخ ورقية عند
              الحاجة.
            </p>
          </div>
          <div className="bg-[#151829] p-6  rounded-[16px] w-[40%] max-md:w-[100%] hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685] ">
             <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img src="/grid3.png" />
            </div>
            <h1 className="text-[20px] font-[700] !mt-10 mb-[8px] ">
              توليد الباركود
            </h1>

            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              يولد باركود للطباعة على العينات، مما يسهل إدارة العينات والوصول
              السريع إلى معلومات المرضى.
            </p>
          </div>
        </div>
        <div className="text-[#F6F6F7] grid lg:grid-cols-3  grid-rows-auto gap-3  ">
          <div className="bg-[#151829] p-6 rounded-[16px] hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685]">
             <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img src="/grid4.png" />
            </div>
            <h1 className="text-[20px] font-[700] !mt-8 mb-[5px] ">
              {" "}
              بيانات المرضى{" "}
            </h1>
            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              تخزين وإدارة معلومات المرضى الطبية و الشخصية في النظام.
            </p>
          </div>
          <div className="bg-[#151829] p-6 max-md:h-[350px] rounded-[16px] row-span-2 hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685]">
             <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img src="/grid5.png"  />
            </div>
            <h1 className="text-[20px] font-[700] !mt-8 mb-[5px]">
              {" "}
              تخصيص الفحوصات
            </h1>
            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              تخصيص الفحوصات بناءً على احتياجات المرضى، لتقديم خدمات دقيقة.
            </p>
            <div className=" relative z-10">
                <div className="absolute left-[-8] top-10 bg-[#c49aff9c]/20 blur-[50px] rounded-full group-hover:bg-[#c49aff9c]/60 transition-all duration-500 w-[170px] h-[170px] -translate-x-8 -translate-y-8"></div>
            <img className="absolute left-[-8] top-5 max-md:top-0 max-md:w-[150px]" src="/grid5-2.png" />
            </div>
            
          </div>
          <div className="bg-[#151829] p-6 rounded-[16px] hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685]">
             <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img src="/grid6.png" />
            </div>
            <h1 className="text-[20px] font-[700] !mt-8 mb-[5px]">
              {" "}
              تجربة مستخدم سلسة
            </h1>
            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              واجهة مستخدم تضمن سهولة الاستخدام وكفاءة الأداء.
            </p>
          </div>
          <div className="bg-[#151829] p-6 rounded-[16px] hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685]">
             <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img src="/grid7.png" />
            </div>
            <h1 className="text-[20px] font-[700] !mt-3 mb-[5px] ">
              التحديث تلقائيًا{" "}
            </h1>
            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              عند صدور تحديث جديد يصل التحديث تلقائيًا دون الحاجة لإعادة
              التنزيل.
            </p>
          </div>
          <div className="bg-[#151829] p-6 rounded-[16px] hover:bg-[#0f1220] hover:text-white group hover:shadow-[inset_0_2px_2px_0_#7e28f685,inset_2px_0_0_0_#7e28f685]">
             <div className="w-16 h-16 bg-transparent hover:bg-[#0f1220] rounded-2xl flex items-center justify-center ml-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#7e28f6de]/50 transition-all duration-500">
            <img src="/grid8.png" />
            </div>
            <h1 className="text-[20px] font-[700] !mt-3 mb-[5px]">
              {" "}
              الإرسال عبر الواتساب
            </h1>
            <p className="text-[#9EA3BF] font-[400] text-[16px]">
              إرسال النتائج مباشرة إلى المرضى عبر الواتساب بنقرة واحدة.
            </p>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
}
