import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-6 p-2 bg-amber-100 dark:bg-gray-600">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="topRated" />
    </div>
  );
};

export default Navbar;
