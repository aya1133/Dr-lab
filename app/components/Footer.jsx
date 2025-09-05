export default function Footer() {
  return (
    <div dir="rtl" className=" flex flex-col justify-between gap-8 max-sm:w-[370px]">
      <div className="flex flex-row max-md:flex-col  justify-between ">
        <div className="flex max-md:flex-col  !justify-between gap-10 max-md:items-center max-md:gap-5 ">
          <img src="/footer.png" alt="logo"className="max-md:w-[170px] " />
          <div className="border-l-1 border-[#ffffff] h-[20px]  w-[20px] mt-[10px] max-md:hidden"> </div>
          <p className="text-[13px] text-[#9EA3BF] font-[400] max-md:text-center">
            نظام ادارة المختبرات الاسهل على الاطللاق. نساعدكم
            <br /> على إدارة مختبراتكم بكفاءة ودقة لضمان أفضل خدمة للمرضى
          </p>
        </div>
        <div className=" flex items-center justify-between  text-[12px] text-[#9EA3BF] font-[400]  gap-[50px] max-md:gap-[10px] max-sm:gap-[0px] max-sm:justify-around max-md:mt-[20px]">
          <a href="/" className="underline ">التحديثات</a>
          <a href="/" className="underline ">سياسة الخصوصية</a>
          <a href="/"className="underline " >سياسة الدعم الفني</a>
        </div>
      </div>
      <div className="flex flex-row max-md:flex-col justify-between p-10 text-[12px] max-md:text-center  max-md:text-[17px]   text-[#9EA3BF] font-[400] border-t-1 border-[#CCCCCC40]">
<p>
    © puretik 2024 جميع الحقوق محفوظة
</p>
<div className=" flex flex-row justify-between gap-5 max-md:justify-around max-md:mt-[20px] ">
 <img src="/linkedin.png" alt="icon" />
<img src="/x.png" alt="icon" />
<img src="/insta.png" alt="icon" />
<img src="/face.png" alt="icon" />
</div>
      </div>
    </div>
  );
}
