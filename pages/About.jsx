import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import aboutImg from "@/public/assets/about-img.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex justify-center min-h-[100vh] w-full mt-[30px]"
      id="/#about"
    >
      <div className="container w-full flex justify-between items-center px-[40px] lg:px-[100px]">
        <div className="lg:w-[50%] flex flex-col gap-3 w-full">
          <div className="block lg:hidden mt-[190px]">
            <Image src={aboutImg} width="300" className="rounded-xl"></Image>
          </div>
          <h1 className="text-5xl text-[#1E264D] font-montserrat font-bold mb-1">
            About Us
          </h1>
          <p className="text-[1.2rem] text-[#1E264D] font-bold font-montserrat">
            The best travel agency for you
          </p>
          <span className="text-[#a1a1a1] font-montserrat py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero
            repudiandae illo adipisci ea dolor iste accusamus veritatis aliquid,
            error maxime quidem praesentium fugit vel ullam voluptatem ducimus!
            Corporis blanditiis quos illum sapiente. Excepturi ab quisquam esse
            a quibusdam provident!
          </span>
          <Link
            href="#"
            className="flex gap-6 font-montserrat text-[#1E264D] font-bold group"
          >
            Read more about us{" "}
            <BsArrowRight
              size={25}
              color="#66DAFF"
              className="group-hover:ml-5 ease-out duration-500"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Image src={aboutImg} width="400" className="rounded-xl"></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
