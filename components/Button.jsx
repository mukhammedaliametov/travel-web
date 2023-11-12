import React from "react";
import Link from "next/link";

const Button = ({ name, url }) => {
  return (
    <div>
      <Link
        href={url}
        className="bg-[#66DAFF] text-[0.9rem] lg:text-[1.1rem] hover:bg-white duration-300 ease-in-out uppercase font-bold text-black font-montserrat px-4 md:px-8 py-3 md:py-4"
      >
        {name}
      </Link>
    </div>
  );
};

export default Button;
