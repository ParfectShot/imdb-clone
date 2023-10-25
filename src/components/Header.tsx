import React from 'react'
import MenuItem from './MenuItem'
import {BiSolidSun, BiSolidHomeAlt2, BiInfoCircle} from 'react-icons/bi'
import { AiOutlineInfo } from "react-icons/ai";
import {SiImdb} from 'react-icons/si'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 lg:px-8'>
      <div className="gap-6 items-center lg:gap-12 flex ">
        <div className="">
          <MenuItem title="Home" link="/" Icon={() => <BiSolidHomeAlt2 />}/>
        </div>
        <div className="">
          <MenuItem title="About" link="/about" Icon={() => <AiOutlineInfo />} />
        </div>
      </div>
      <div>
      </div>
      <div className='flex items-center gap-4 lg:gap-12'>
        <div className=''>
            <BiSolidSun/>
            {/* <BiSolidMoon /> */}
        </div>
        <div className=''>
      <SiImdb className="lg:text-2xl"  />

        </div>
      </div>
    </div>
  );
}

export default Header