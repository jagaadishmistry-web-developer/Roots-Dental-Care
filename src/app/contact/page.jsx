"use client";
import FirstSection from "@/components/FirstSection";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import IconC1 from "../../../public/IconC1.png";
import IconC2 from "../../../public/IconC2.png";
import IconC3 from "../../../public/IconC3.png";
import contactImage from "../../../public/contactImage.png";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lvjbpdv", "template_hr108vc", form.current, {
        publicKey: "VP9ddZ1Qezk8PryHz",
      })
      .then(
        (result) => {
          alert("sent message succesfull");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <FirstSection title="Contact Us" linkTitle="Contact Us" url="/contact" />
      <div className="container mx-auto px-4 xl:py-24 py-16 grid lg:grid-cols-3 md:grid-cols-2 xl:gap-8 gap-6">
        <div className="shad xl:px-10 px-5 xl:py-14 py-12 flex flex-col items-center gap-5 text-center">
          <Image src={IconC1} alt="" />
          <h1 className="xl:text-[30px] text-[25px] font-medium">Email</h1>
          <p className="xl:text-[18px] text-[#7A7A7A] pb-3">
            infosrdc@gmail.com
          </p>
          <button className="px-10 py-4 bg-[#06692B] rounded-lg text-white">
            Send Email
          </button>
        </div>
        <div className="shad xl:px-10 px-5 xl:py-14 py-12 flex flex-col items-center gap-5 text-center">
          <Image src={IconC2} alt="" />
          <h1 className="xl:text-[30px] text-[25px] font-medium">
            Location
          </h1>{" "}
          <p className="xl:text-[18px] text-[#7A7A7A]">
            3rd Floor, Lane Opposite toPillar No.975, Habsiguda,
            Hyderabad-500007.
          </p>
          <p className="xl:text-[18px] text-[#7A7A7A] pb-3">
            2nd Floor, Near Marichettu Junction, Opp. Water Tank, Manikonda -
            500039.
          </p>
          <button className="px-10 py-4 bg-[#06692B] rounded-lg text-white">
            View Locations
          </button>
        </div>
        <div className="shad xl:px-10 px-5 xl:py-14 py-12 flex flex-col items-center gap-5 text-center">
          <Image src={IconC3} alt="" />
          <h1 className="xl:text-[30px] text-[25px] font-medium">Phone</h1>
          <p className="xl:text-[18px] text-[#7A7A7A]">+91 40 27150505.</p>
          <p className="xl:text-[18px] text-[#7A7A7A]">+91 40 27150505.</p>
          <p className="xl:text-[18px] text-[#7A7A7A]">+91 40 27150505.</p>
        </div>
      </div>
      <section className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4 xl:py-24 py-16 grid lg:grid-cols-2">
          <Image src={contactImage} alt="" className="w-full" />
          <div className="bg-white 2xl:px-14 xl:px-10 px-5 xl:py-12 py-8 rounded-tr-lg">
            <h1 className="xl:text-[32px] text-[26px] text-[#7A7A7A]">
              Contact Us
            </h1>
            <h2 className="2xl:text-[54px] xl:text-[50px] md:text-[46px] text-[34px] font-semibold py-3">
              Schedule Your Evaluation
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 xl:pt-8 pt-5">
              <input
                name="from_name"
                type="text"
                placeholder="Name"
                className="xl:py-6 py-4 xl:px-6 px-4 focus:outline-none shad"
                required
              />
              <input
                name="from_email"
                type="text"
                placeholder="Email"
                className="xl:py-6 py-4 xl:px-6 px-4 focus:outline-none shad"
                required
              />
              <textarea
                name="message"
                placeholder="Massage"
                className="xl:pt-5 pt-3 2xl:h-52 xl:h-40 h-30 xl:px-6 px-4 focus:outline-none shad"
                required
              />
              <div className="flex justify-end pt-5">
                <button
                  type="submit"
                  value="Send"
                  className="xl:w-48 w-40 py-4 bg-[#06692B] rounded-lg text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="xl:pt-24 pt-16"></div>
    </>
  );
};

export default ContactUs;
