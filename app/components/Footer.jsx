export default function Footer() {
  return (
    <div className=" flex flex-col justify-between gap-6">
      <div className="flex flex-row justify-between ">
        <div className="flex  !justify-between gap-10 ">
          <img src="/footer.png" alt="logo" />
          <div className="border-l-1 border-[#ffffff] h-[20px]  w-[20px] mt-[10px]"> </div>
          <p className="text-[13px] text-[#9EA3BF] font-[400]">
            نظام ادارة المختبرات الاسهل على الاطللاق. نساعدكم
            <br /> على إدارة مختبراتكم بكفاءة ودقة لضمان أفضل خدمة للمرضى
          </p>
        </div>
        <div className=" flex items-center justify-between  text-[12px] text-[#9EA3BF] font-[400]  gap-[50px]">
          <a href="/" className="underline ">التحديثات</a>
          <a href="/" className="underline ">سياسة الخصوصية</a>
          <a href="/"className="underline " >سياسة الدعم الفني</a>
        </div>
      </div>
      <div className="flex flex-row justify-between p-10 text-[12px] text-[#9EA3BF] font-[400] border-t-1 border-[#CCCCCC40]">
<p>
    © puretik 2024 جميع الحقوق محفوظة
</p>
<div className=" flex flex-row justify-between gap-5">
 <img src="/linkedin.png" alt="icon" />
<img src="/x.png" alt="icon" />
<img src="/insta.png" alt="icon" />
<img src="/face.png" alt="icon" />
</div>
      </div>
    </div>
  );
}
