import FirstSection from "@/components/FirstSection";
import OpeningHours from "@/components/OpeningHours";
import { ServicesData } from "@/utils/ServicesData";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <FirstSection title="Services" linkTitle="Services" url="/services" />
      <section className="container mx-auto px-4 xl:py-24 py-16 grid lg:grid-cols-3 md:grid-cols-2 xl:gap-8 gap-6">
        {ServicesData.map((sData) => {
          return (
            <div
              key={sData.id}
              className="shad xl:px-10 md:px-6 px-3 xl:py-16 py-10">
              <Image src={sData.url} alt="image" />
              <h1 className="xl:text-3xl text-2xl font-medium xl:py-8 py-6">
                {sData.title}
              </h1>
              <p className="xl:text-[14px] text-[12px]">{sData.description}</p>
            </div>
          );
        })}
      </section>

      <section className="bg-[url('/servicesBg.jpg')] bg-cover bg-center text-white xl:py-24 py-16 flex flex-col items-center text-center">
        <div className="xl:py-24 py-16 px-4">
          <h1 className="xl:text-[55px] md:text-[45px] text-[35px] font-semibold">
            Online Booking
          </h1>
          <p className="xl:text-[32px] text-[24px] font-medium xl:pb-12 pb-9 pt-4">
            Schedule your evaluation and start your treatment right now.
          </p>
          <button className="bg-white text-[#06692B] px-10 py-4 rounded-lg font-medium">
            Contact Us
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 xl:py-24 py-16 grid lg:grid-cols-2 xl:gap-8 gap-6">
        <div className="xl:py-[150px] py-[100px] bg-[#fafbfa] shadow-lg text-center rounded-lg">
          <h1 className="xl:text-[46px] md:text-[36px] text-[28px] font-medium">
            More Precise Treatment
          </h1>
        </div>
        <div className="xl:py-[150px] py-[100px] bg-[#06692B] text-white text-center rounded-lg">
          <h1 className="xl:text-[46px] md:text-[36px] text-[28px] font-medium">
            Stop Feeling Pain
          </h1>
        </div>
      </section>
      <OpeningHours />
      <div className="xl:pt-24 pt-16"></div>
    </>
  );
};

export default Services;
