import FirstSection from "@/components/FirstSection";
import { TeamData } from "@/utils/OurTeamData";
import Image from "next/image";
import React from "react";
import tImage1 from "../../../public/tImage1.jpg";
import tImage2 from "../../../public/tImage2.jpg";
import tImage3 from "../../../public/tImage3.jpg";
import tImage4 from "../../../public/tImage4.jpg";

const OurTeam = () => {
  return (
    <>
      <FirstSection title="Our Team" linkTitle="Our Team" url="/team" />
      <section className="container mx-auto px-4 xl:py-24 py-16">
        <h2 className="xl:text-[55px] md:text-[45px] text-[35px] font-semibold text-center pb-12">
          Excellence
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {TeamData.map((tData) => {
            return (
              <div
                key={tData.id}
                className="bg-[#06692B] text-white text-center xl:py-20 py-16 rounded-lg px-3">
                <h1 className="xl:text-[40px] md:text-[32px] text-[28px] font-medium">
                  {tData.name}
                </h1>
                <h3 className="xl:text-[22px] text-[16px] font-medium xl:pt-5 pt-3">
                  {tData.profetion}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-[#FAFAFA] xl:pb-24 pb-16">
        <div className="container mx-auto px-4 xl:py-24 py-16 grid lg:grid-cols-2 xl:gap-8 gap-6">
          <div className="lg:text-start text-center">
            <h3 className="text-[#06692B] xl:text-3xl text-2xl font-medium">
              Our Team
            </h3>
            <h1 className="2xl:text-[52px] xl:text-[46px] md:text-[36px] text-[28px] font-semibold xl:pt-7 pt-5">
              Providing Excellent Dental Care Is Our Objective
            </h1>
            <p className="text-[#7A7A7A] xl:text-[22px] text-lg pt-6">
              A erat nam at lectus urna. Eleifend donec pretium vulputate sapien
              nec sagittis aliquam malesuada bibendum. Risus pretium quam
              vulputate dignissim suspendisse in est ante in. Purus in massa
              tempor nec feugiat nisl. Dui sapien eget mi proin sed libero.
              Vitae tortor condimentum lacinia quis vel. Aliquam purus sit amet
              luctus venenatis lectus magna. Consectetur adipiscing elit duis
              tristique sollicitudin nibh sit amet. Adipiscing elit pellentesque
              habitant morbi tristique. Orci a scelerisque purus semper eget
              duis at tellus at. Cursus vitae congue mauris rhoncus aenean vel
              elit. Justo donec enim diam vulputate ut pharetra sit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:gap-8 gap-6">
            <div className="flex flex-col gap-4 items-center">
              <Image src={tImage1} alt="image" className="w-full pb-3" />
              <button className="bg-[#06692B] text-white md:text-2xl text-lg rounded-full py-2 md:px-8 px-6 md:text-[18px] text-[14px]">
                Dentist
              </button>
              <h1 className="xl:text-[22px] text-lg font-semibold">
                Dr. Riyaz Basha MDS
              </h1>
              <p className="text-[#7A7A7A] px-5 text-center">
                Prosthodontist & Implantologist
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image src={tImage2} alt="image" className="w-full pb-3" />
              <button className="bg-[#06692B] text-white md:text-2xl text-lg rounded-full py-2 md:px-8 px-6 md:text-[18px] text-[14px]">
                Dentist
              </button>
              <h1 className="xl:text-[22px] text-lg font-semibold">
                Dr.C.Sandeep Reddy MDS
              </h1>
              <p className="text-[#7A7A7A] px-5 text-center">
                Oral & Maxillofacial Surgeon, Implantologist
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative container mx-auto px-4">
        <div className="absolute left-4 right-4 xl:-top-[100px] -top-[70px] xl:py-16 py-12 bg-[#06692B] text-white flex flex-col items-center rounded-lg px-3">
          <h1 className="2xl:text-[52px] xl:text-[46px] md:text-[36px] text-[28px] font-semibold text-center xl:pb-7 pb-5">
            High-Quality Dental Aesthetics
          </h1>
          <button className="bg-white text-[#06692B] md:text-2xl text-lg rounded-full py-3 w-52">
            {"Smile Again"}
          </button>
        </div>
      </section>
      <div className="xl:h-72 h-60"></div>
      <section className="container mx-auto px-4 xl:pb-24 pb-16 grid lg:grid-cols-3">
        <Image src={tImage3} alt="image" className="col-span-1 w-full" />
        <div className="col-span-1 bg-[#06692B] text-white flex flex-col lg:py-0 py-16 2xl:gap-9 gap-6 items-center justify-center xl:px-6 px-4">
          <h2 className="xl:text-[32px] md:text-[28px] text-[24px]">
            Perfect Smile
          </h2>
          <h1 className="2xl:text-[52px] xl:text-[42px] md:text-[32px] text-[24px] font-semibold text-center">
            We Connect Ideal Dentists To Their Potential Patients
          </h1>
          <p className="xl:text-[22px] text-lg text-center">
            Choosing The Best Dentist Is Critical For Your Dental Health
          </p>
        </div>
        <Image src={tImage4} alt="image" className="col-span-1 w-full" />
      </section>
      <section className="container mx-auto px-4 xl:pb-24 pb-16 grid lg:grid-cols-2 xl:gap-8 gap-6">
        <div className="xl:py-[80px] py-[60px] bg-[#fafbfa] shadow-lg lg:px-4 md:px-8 px-3 flex flex-col items-center text-center rounded-lg">
          <h1 className="xl:text-[40px] md:text-[32px] text-[28px] font-medium">
            Our Vission
          </h1>
          <p className="xl:text-[22px] text-[16px] font-medium xl:pt-5 pt-3 xl:w-[455px] md:w-[400px] text-[#7A7A7A]">
            We strive for the perfection in all the services and implement
            latest technical equipment for the same.
          </p>
        </div>
        <div className="xl:py-[80px] py-[60px] bg-[#06692B] text-white lg:px-4 md:px-8 px-3 flex flex-col items-center text-center rounded-lg">
          <h1 className="xl:text-[40px] md:text-[32px] text-[28px] font-medium">
            Clinic Location
          </h1>
          <p className="xl:text-[22px] text-[16px] font-medium xl:pt-5 pt-3 xl:w-[455px] md:w-[400px]">
            Our both the clinics are established at the most prime locations in
            Hyderabad for better approachability.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
