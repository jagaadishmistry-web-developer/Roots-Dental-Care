import FirstSection from "@/components/FirstSection";

const ContactUs2 = () => {
  return (
    <>
      <FirstSection title="Contact Us" linkTitle="Contact Us" url="/contact2" />
      <section className="bg-[#FAFAFA] xl:pb-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="xl:py-24 py-16 text-center flex flex-col items-center">
            <div className="md:w-[600px]">
              <h1 className="xl:text-[55px] md:text-[45px] text-[35px] font-semibold pb-4">
                Request Schedule
              </h1>
              <h3 className="xl:text-[32px] md:text-[26px] text-[20px]">
                Fill out the form below to schedule a visit with us.
              </h3>
            </div>
          </div>
          <form>
            <div className="grid grid-cols-6 gap-8">
              <div className="lg:col-span-3 md:col-span-3 col-span-6 xl:text-[22px] text-[18px] flex flex-col gap-3">
                <label>Your Name</label>
                <input
                  type="text"
                  className="focus:outline-none w-full xl:py-6 py-4 border-2 px-5 border-[#E0E0E0] rounded-md text-[#7A7A7A]"
                />
              </div>
              <div className="lg:col-span-3 md:col-span-3 col-span-6 xl:text-[22px] text-[18px] flex flex-col gap-3">
                <label>Your Email</label>
                <input
                  type="text"
                  className="focus:outline-none w-full xl:py-6 py-4 border-2 px-5 border-[#E0E0E0] rounded-md text-[#7A7A7A]"
                />
              </div>
              <div className="lg:col-span-2 md:col-span-3 col-span-6 xl:text-[22px] text-[18px] flex flex-col gap-3">
                <label>Service</label>
                <select className="focus:outline-none w-full xl:py-7 py-4 border-2 px-5 border-[#E0E0E0] rounded-md text-[#7A7A7A]">
                  <option>Whitening</option>
                  <option>Saab</option>
                  <option>Whitening</option>
                  <option>Audi</option>
                </select>
              </div>
              <div className="lg:col-span-2 md:col-span-3 col-span-6 xl:text-[22px] text-[18px] flex flex-col gap-3">
                <label>Date</label>{" "}
                <input
                  type="date"
                  className="focus:outline-none w-full xl:py-6 py-4 border-2 px-5 border-[#E0E0E0] rounded-md text-[#7A7A7A]"
                />
              </div>
              <div className="lg:col-span-2 md:col-span-3 col-span-6 xl:text-[22px] text-[18px] flex flex-col gap-3">
                <label>Hours</label>
                <input
                  className="focus:outline-none w-full xl:py-6 py-4 border-2 px-5 border-[#E0E0E0] rounded-md text-[#7A7A7A]"
                  type="time"
                  name=""
                  id=""
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="xl:pb-24 pb-16"></div>
    </>
  );
};

export default ContactUs2;
