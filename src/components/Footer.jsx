import Image from "next/image";
import {
  FaFacebookF,
  FaLocationDot,
  FaLocationPin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../../public/logo.png";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4 xl:pb-24 pb-16">
        <div className="bg-[#06692B] xl:py-24 py-16 w-full flex flex-col items-center text-white rounded-lg">
          <h3 className="xl:text-[32px] md:text-[26px] text-[20px]">
            Have A Perfect Smile!
          </h3>
          <h2 className="xl:text-[55px] md:text-[45px] text-[35px] font-semibold xl:w-[790px] md:w-[700px] text-center py-4">
            Find The Ideal Treatment For Your Smile!
          </h2>
          <br />
          <br />
          <button className="px-8 py-3 border border-white rounded-lg">
            Contact Us
          </button>
        </div>
      </section>

      <section className="bg-[url('/footerBg.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 text-white xl:py-24 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 xl:gap-8 lg:gap-4 md:gap-24 gap-20">
            <div className="flex flex-col gap-6">
              <Image src={Logo} alt="image" className="" />
              <p className="2xl:text-base xl:text-sm lg:text-xs text-base">
                Roots Dental Care is a modern dental clinic, specialized in
                advanced diagnostics and treatment of dental and oral disorders.
              </p>
              <div className="flex gap-4">
                <button className="p-3 border-2 block group hover:bg-white rounded-md">
                  <FaFacebookF className="2xl:text-2xl text-xl group-hover:text-[#06692B]" />
                </button>
                <button className="p-3 border-2 block group hover:bg-white rounded-md">
                  <FaTwitter className="2xl:text-2xl text-xl group-hover:text-[#06692B]" />
                </button>
                <button className="p-3 border-2 block group hover:bg-white rounded-md">
                  <FaYoutube className="2xl:text-2xl text-xl group-hover:text-[#06692B]" />
                </button>
              </div>
            </div>
            {/* ------------------- */}
            <div className="flex flex-col xl:gap-6 gap-4">
              <h1 className="xl:text-[32px] lg:text-[22px] md:text-[26px] text-[20px] xl:pb-8 pb-5">
                Explore
              </h1>
              <h3 className="xl:text-[22px] text-xl">Home</h3>
              <h3 className="xl:text-[22px] text-xl">About Us</h3>
              <h3 className="xl:text-[22px] text-xl">Contact Us</h3>
              <h3 className="xl:text-[22px] text-xl">Schedule A Visit</h3>
            </div>
            {/* ------------------- */}
            <div className="flex flex-col xl:gap-6 gap-4">
              <h1 className="xl:text-[32px] lg:text-[22px] md:text-[26px] text-[20px] xl:pb-8 pb-5">
                Habsiguda Branch
              </h1>
              <div className="flex gap-5">
                <div className="">
                  <button className="p-3 border-2 bg-white rounded-md">
                    <FaLocationDot className="2xl:text-2xl text-xl text-[#06692B]" />
                  </button>
                </div>
                <div className="">
                  <h1 className="xl:text-[22px] text-xl pb-2">Location</h1>
                  <p className="2xl:text-base xl:text-sm lg:text-xs text-base">
                    3RD FLOOR, LANE OPPOSITE TOPILLAR NO.975, HABSIGUDA,
                    HYDERABAD-500007.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="">
                  <button className="p-3 border-2 bg-white rounded-md">
                    <FaPhone className="2xl:text-2xl text-xl text-[#06692B]" />
                  </button>
                </div>
                <div className="">
                  <h1 className="xl:text-[22px] text-xl pb-2">Phone</h1>
                  <p className="2xl:text-base xl:text-sm lg:text-xs text-base">
                    +91 903073 7474
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="">
                  <button className="p-3 border-2 bg-white rounded-md">
                    <MdEmail className="2xl:text-2xl text-xl text-[#06692B]" />
                  </button>
                </div>
                <div className="">
                  <h1 className="xl:text-[22px] text-xl pb-2">Email</h1>
                  <p className="2xl:text-base xl:text-sm lg:text-xs text-base">
                    srdchabsiguda@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* -------------------- */}
            <div className="flex flex-col xl:gap-6 gap-4">
              <h1 className="xl:text-[32px] lg:text-[22px] md:text-[26px] text-[20px] xl:pb-8 pb-5">
                Manikonda Branch
              </h1>
              <div className="flex gap-5">
                <div className="">
                  <button className="p-3 border-2 bg-white rounded-md">
                    <FaLocationDot className="2xl:text-2xl text-xl text-[#06692B]" />
                  </button>
                </div>
                <div className="">
                  <h1 className="xl:text-[22px] text-xl pb-2">Location</h1>
                  <p className="2xl:text-base xl:text-sm lg:text-xs text-base">
                    3RD FLOOR, LANE OPPOSITE TOPILLAR NO.975, HABSIGUDA,
                    HYDERABAD-500007.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="">
                  <button className="p-3 border-2 bg-white rounded-md">
                    <FaPhone className="2xl:text-2xl text-xl text-[#06692B]" />
                  </button>
                </div>
                <div className="">
                  <h1 className="xl:text-[22px] text-xl pb-2">Phone</h1>
                  <p className="2xl:text-base xl:text-sm lg:text-xs text-base">
                    +91 903073 7474
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="">
                  <button className="p-3 border-2 bg-white rounded-md">
                    <MdEmail className="2xl:text-2xl text-xl text-[#06692B]" />
                  </button>
                </div>
                <div className="">
                  <h1 className="xl:text-[22px] text-xl pb-2">Email</h1>
                  <p className="2xl:text-base xl:text-sm lg:text-xs text-base">
                    srdchabsiguda@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#06692B] flex justify-center text-white xl:py-8 py-6 xl:text-[22px] text-[16px] px-4 text-center">
        ©2024 – Roots Dental Care Created by Techninza
      </div>
    </>
  );
};

export default Footer;
