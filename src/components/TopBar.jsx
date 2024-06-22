import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const TopBar = () => {
  return (
    <>
      <div className="bg-[#06692B] text-white md:flex flex-col justify-center py-2 hidden">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex lg:flex-row flex-col lg:gap-4 gap-[3px] xl:text-[14px] text-[11px] lg:items-center">
            <div className="flex gap-1 items-center">
              <span>
                <FaLocationDot className="text-lg" />
              </span>
              3rd Floor, Lane Opposite toPillar No.975, Habsiguda,
              Hyderabad-500007.
            </div>
            <div className="flex gap-1 items-center">
              <span className="">
                <IoIosMail className="text-lg" />
              </span>
              Email: srdchabsiguda@gmail.com
            </div>
            <div className="flex gap-1 items-center">
              <span className="">
                <BiSolidPhoneCall className="text-lg" />
              </span>
              +91 893893 7474
            </div>
          </div>
          <div className="lg:flex hidden">
            <div className="flex gap-4 text-[#06692B]">
              <div className="p-2 bg-white rounded-md">
                <FaFacebookF className="" />
              </div>
              <div className="p-2 bg-white rounded-md">
                <FaInstagram className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
