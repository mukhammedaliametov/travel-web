import React from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/assets/hero-bg.jpg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="h-full w-full mt-[80px] 2xl:mt-[160px] 2xl:px-[120px] flex flex-col">
      <Image src={heroBg} objectFit="cover" layout="fill" className="-z-10" />
      <div className="bg-black/70 top-0 bottom-0 left-0 right-0 absolute -z-10"></div>
      <div className="flex justify-between items-center w-full px-[50px] xl:px-[100px]">
        <div className="text-white flex flex-col w-full">
          <p className="font-montserrat uppercase text-[1.1rem] lg:text-2xl">
            Welcome
          </p>
          <h1 className="font-montserrat text-[2rem] lg:text-[3.5rem]">
            Explore our World <br /> deeper width us
          </h1>
          <span className="mb-[60px] font-montserrat text-[1.1rem]">
            Wath the best tours, buy trickets and relax
          </span>
          <Button name="Buy Tickets" url="/" />
          <div className="md:hidden flex gap-14 mt-10">
            <Link href="">
              <FiTwitter size={25} color="white" />
            </Link>
            <Link href="">
              <FiInstagram size={25} color="white" />
            </Link>
            <Link href="">
              <FaFacebook size={25} color="white" />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col gap-14 mt-10">
          <Link href="">
            <FiTwitter size={25} color="white" />
          </Link>
          <Link href="">
            <FiInstagram size={25} color="white" />
          </Link>
          <Link href="">
            <FaFacebook size={25} color="white" />
          </Link>
        </div>
      </div>
      <Link href='' className="hidden lg:flex justify-center mt-12 text-white text-4xl cursor-auto">
        <FontAwesomeIcon icon={faAnglesDown} bounce className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Hero;
