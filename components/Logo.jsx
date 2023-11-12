import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';

const Logo = () => {
  return (
    <div>
      <Link href={''} className='flex items-center gap-3'>
        <Image src={logo} width='60' height='20'></Image>
        <span className='text-white text-1xl font-montserrat'> <b>W</b>orld <br /> <b>E</b>xplore</span>
      </Link>
    </div>
  );
};

export default Logo;