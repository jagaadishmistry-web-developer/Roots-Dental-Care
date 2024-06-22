import { DataData } from "@/utils/HomeData";

const OpeningHours = () => {
  return (
    <>
      <section className="bg-[url('/bg2.png')] bg-center bg-cover">
        <div className="container mx-auto px-4 xl:py-24 py-16 grid lg:grid-cols-2 gap-16">
          <div className="text-white flex flex-col justify-center gap-3 text-center lg:text-start">
            <h3 className="2xl:text-[30px] xl:text-[28px] text-[24px]">
              Nearly Invisible
            </h3>
            <h1 className="xl:text-[52px] md:text-[40px] text-[30px] font-semibold">
              Orthodontics With Innovative Transparent Aligners
            </h1>
          </div>
          <div className="2xl:py-20 md:py-16 py-6 2xl:px-20 md:px-10 px-4 bg-white rounded-md">
            <h1 className="font-semibold xl:text-[52px] md:text-[40px] text-[34px] pb-8">
              Opening Hours
            </h1>
            <div className="flex flex-col xl:gap-7 gap-4">
              {DataData.map((dData) => {
                return (
                  <div
                    key={dData.id}
                    className="grid grid-cols-11 gap-3 text-[#7A7A7A]">
                    <span className="md:col-span-1 col-span-2">
                      {dData.day}
                    </span>
                    <span className="xl:col-span-7 lg:col-span-6 md:col-span-7 col-span-4 border-b border-dashed border-[#7A7A7A] mb-2"></span>
                    <span className="xl:col-span-3 lg:col-span-4 md:col-span-3 col-span-5">
                      {dData.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpeningHours;
