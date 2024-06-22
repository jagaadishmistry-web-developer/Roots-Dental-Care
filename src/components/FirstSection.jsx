import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FirstSection = (props) => {
  return (
    <>
      <section className="bg-[url('/bg1.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4 lg:grid grid-cols-2 xl:py-14 py-10">
          <div className="bg-white/60 rounded-lg 2xl:py-16 md:p-12 p-8 md:w-[420px] flex flex-col items-center">
            <button className="bg-[#06692B] text-white md:text-2xl text-lg rounded-full py-3 md:px-7 px-5">
              Your Perfect Smile
            </button>
            <h1 className="2xl:text-[52px] xl:text-[50px] md:text-[35px] text-[25px] font-semibold pt-7">
              {props.title}
            </h1>
            <div className="flex gap-3 xl:text-[22px] text-[16px] px-4 items-center font-medium pt-2">
              <Link href="/">Home</Link> <MdKeyboardDoubleArrowRight />{" "}
              <Link href={props.url}>{props.linkTitle}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
