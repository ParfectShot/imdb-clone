import React from "react";
import MenuItem from "./MenuItem";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiOutlineInfo } from "react-icons/ai";
import { SiImdb } from "react-icons/si";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 mx-4 lg:mx-24">
      <div className="gap-6 items-center lg:gap-12 flex ">
        <div className="">
          <MenuItem title="Home" link="/" Icon={() => <BiSolidHomeAlt2 />} />
        </div>
        <div className="">
          <MenuItem
            title="About"
            link="/about"
            Icon={() => <AiOutlineInfo />}
          />
        </div>
      </div>
      <div></div>
      <div className="flex items-center gap-4 lg:gap-12">
        <div className="">
          <DarkModeSwitch />
        </div>
        <div className="">
          <SiImdb className="text-2xl lg:text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
