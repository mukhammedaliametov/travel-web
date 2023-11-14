import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { IoLanguageOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {
  const navLink = [
    { name: "About Us", url: "#" },
    { name: "Destination", url: "#" },
    { name: "Tours", url: "#" },
    { name: "Reviews", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const [lan, setLan] = useState(false);
  const [nav, setNav] = useState(false);

  const handleLan = () => {
    setLan(!lan);
  }  

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="top-0 w-full px-[30px] lg:px-[60px] 2xl:px-[120px] py-4 lg:py-5">
      <div className="flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex gap-10">
          {navLink.map((item) => (
            <li key={item} className="text-white font-montserrat group flex flex-col uppercase text-1xl">
              <Link href={item.url}>{item.name}</Link>
              <span className="border-b-[2px] border-white mr-[100%] group-hover:mr-[0%] duration-500 ease-in-out"></span>
            </li> 
          ))}
        </ul>
        <div className="text-white relative font-montserrat uppercase text-1xl cursor-pointer hidden lg:block">
          <span onClick={handleLan} className="flex gap-2 text-[#66DAFF]"><IoLanguageOutline size={25} /> English</span>
          <div className={lan ? "absolute bg-black/70 flex flex-col py-2 rounded-sm mt-2" : 'hidden'}>
            <Link href="/ka" className="px-3 py-2 hover:bg-black/50 border-b-[1px] border-black">Karakalpak</Link>
            <Link href="/ru" className="px-3 py-2 hover:bg-black/50">Russian</Link>
          </div>
        </div>
        <div className="flex md:hidden gap-4 text-1xl font-montserrat text-white">
          <span className="border-b-[1px] border-white">Eng</span>
          <Link href='#'>Kar</Link>
          <Link href='#'>Rus</Link>
        </div>
        <div onClick={handleNav} className="text-white text-2xl md:hidden">
          {nav ? <LiaTimesSolid size={25} color="white" />  : <RxHamburgerMenu size={25} color="white" /> }
        </div>
        <ul className={nav ? "flex flex-col absolute bg-black/90 top-[100px] text-center w-full left-[0%] py-3 duration-500 ease-out" : "flex flex-col absolute bg-black/90 top-[100px] text-center w-full left-[-100%] py-3 duration-500 ease-out"}>
          {navLink.map((item) => (
            <li key={item} className="text-white font-montserrat flex flex-col uppercase text-1xl py-4">
              <Link href={item.url}>{item.name}</Link>
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
