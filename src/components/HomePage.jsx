"use client";
import OpeningHours from "@/components/OpeningHours";
import { DecsData, HomeData1 } from "@/utils/HomeData";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import home1 from "../../public/home1.png";
import home2 from "../../public/home2.png";
import home3 from "../../public/home3.png";

const HomePage = () => {
  return (
    <>
      <section className="bg-[url('/bg1.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4 lg:grid grid-cols-2 xl:py-48 py-52">
          <div className="bg-white rounded-tr-[80px] rounded 2xl:py-20 md:p-14 p-8">
            <button className="bg-[#06692B] text-white md:text-2xl text-lg rounded-full py-3 md:px-7 px-5">
              Your Perfect Smile
            </button>
            <h1 className="2xl:text-[64px] xl:text-[54px] md:text-[40px] text-[25px] font-semibold pt-7">
              Roots Dental Care
            </h1>
            <h4 className="text-[#7A7A7A] md:text-base text-sm md:pb-11 pb-8">
              A DECADE OF EXCELLENCE IN DENTAL CARE .
            </h4>
            <button className="border border-[#06692B] text-[06692B] py-3 px-7">
              Learn More
            </button>
          </div>
          <div className=""></div>
        </div>
      </section>
      <section className="container mx-auto px-4 xl:py-24 py-16">
        <div className="xl:py-20 py-14 bg-[#06692B] 2xl:px-16 xl:px-10 px-5 rounded-md">
          <h1 className="xl:text-6xl text-4xl font-semibold text-white text-center">
            The Leading Perks
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:pt-12 pt-10 xl:gap-8 gap-6 font-medium text-center">
            {HomeData1.map((hData1) => {
              return (
                <div
                  key={hData1.id}
                  className="bg-white xl:p-16 md:p-10 p-5 rounded-md">
                  <h2 className="xl:text-3xl text-2xl">{hData1.title}</h2>
                  <p className="text-[#7A7A7A] xl:text-lg xl:pt-6 pt-4">
                    {hData1.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#06692B] text-white">
        <div className="container mx-auto px-4 xl:py-24 py-16 grid lg:grid-cols-2 2xl:gap-0 xl:gap-20 gap-16">
          <Image
            src={home1}
            alt="image"
            className="2xl:h-[620px] 2xl:w-[645px] w-full"
          />
          <div className="flex flex-col lg:justify-center items-center lg:items-start">
            <div className="flex flex-col xl:gap-6 gap-4 text-center lg:text-start">
              <h4 className="xl:text-4xl text-3xl font-medium">Why Smile</h4>
              <h2 className="xl:text-6xl text-4xl font-medium">Our Vision</h2>
              <p className="xl:w-[570px] lg:w-full md:w-[500px] xl:text-xl text-lg">
                We strive for the perfection in all the services and implement
                latest technical equipment for the same.
              </p>
            </div>
            <div className="xl:pt-[70px] pt-12 text-center lg:text-start 2xl:w-[600px] xl:w-[580px] md:w-[450px] w-full">
              <div className="">
                <h2 className="xl:text-xl text-lg font-medium pb-1">
                  Quality In Health Care
                </h2>
                <div className="">
                  <ProgressBar
                    bgColor="#25D366"
                    completed={50}
                    maxCompleted={100}
                  />
                </div>
              </div>
              <div className="xl:pt-12 pt-8">
                <h2 className="xl:text-xl text-lg font-medium pb-1">
                  Quality In Health Care
                </h2>
                <div className="">
                  <ProgressBar
                    bgColor="#25D366"
                    completed={75}
                    maxCompleted={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#f5f5f5]">
        <section className="container mx-auto px-4 xl:py-24 py-16">
          <div className="grid lg:grid-cols-2 2xl:gap-28 xl:gap-24 gap-16">
            <div className="flex flex-col justify-center gap-5 items-center lg:items-start">
              <h1 className="xl:text-[55px] md:text-[45px] text-[35px] font-semibold">
                Clinic Location
              </h1>
              <p className="xl:text-[22px] text-[18px] xl:w-[470px] md:w-[400px] lg:text-start text-center">
                Our both the clinics are established at the most prime locations
                in Hyderabad for better approachability.
              </p>
            </div>
            <Image src={home2} alt="image" className="w-full" />
          </div>
          <div className="grid lg:grid-cols-2 2xl:gap-28 xl:gap-24 gap-16 xl:pt-24 pt-16">
            <Image src={home3} alt="image" className="w-full" />
            <div className="flex flex-col justify-center gap-5 items-center lg:items-start">
              <h1 className="xl:text-[55px] md:text-[45px] text-[35px] font-semibold">
                Amiable Care
              </h1>
              <p className="xl:text-[22px] text-[18px] xl:w-[470px] md:w-[400px] lg:text-start text-center">
                Visiting Roots dental care is an exceptional experience of care
                comfort and cordial service which creates an everlasting impact.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 xl:py-24 py-16 xl:gap-8 gap-6">
        {DecsData.map((dsData) => {
          return (
            <div
              key={dsData.id}
              className="flefx flex-col xl:gap-10 gap-7 shadow-lg">
              <Image src={dsData.url} alt="image" className="w-full" />
              <h1 className="2xl:text-[30px] xl:text-[28px] text-[24px] font-medium 2xl:px-10 xl:px-8 lg:px-5 md:px-8 px-4 lg:py-6 py-4">
                {dsData.title}
              </h1>
              <p className="pb-12 xl:text-[14px] text-[12px] text-[#7A7A7A] 2xl:px-10 xl:px-8 lg:px-5 md:px-8 px-4">
                {dsData.description}
              </p>
            </div>
          );
        })}
      </section>
      <OpeningHours />
      <section className="xl:py-24 py-16 text-center flex flex-col items-center">
        <div className="md:w-[780px]">
          <h3 className="xl:text-[32px] md:text-[26px] text-[20px] text-[#7A7A7A] pb-4">
            Painless laser whitening
          </h3>
          <h1 className="xl:text-[55px] md:text-[45px] text-[35px] font-semibold">
            The Best Technique Immediate & Efficient Result
          </h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
