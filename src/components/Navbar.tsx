import Image from 'next/image'
import React from 'react'
import { FiMenu } from "react-icons/fi";

import logo from "../../public/logo.png";

function Navbar() {
  return (
    <div className='grid grid-cols-6 m-4 gap-y-4'>
      <Image
        src={logo}
        alt='NextCommerce logo'
        width={50}
        height={50}
        className='col-start-3 col-span-2 justify-self-center'
      />
      <button className='col-start-6 col-span-2 w-[40px] h-[40px] self-center justify-self-center flex flex-row items-center justify-center bg-quaternary text-quinary p-1 rounded-full'>
        <FiMenu />
      </button>
    </div>
  )
}

export default Navbar