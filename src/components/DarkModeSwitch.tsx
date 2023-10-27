"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const DarkModeSwitch = () => {
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="cursor-pointer hover:text-amber-600">
      {currentTheme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")}/>
      ): (
        <BiSolidMoon onClick={() => setTheme("dark")}/>
      )}
    </div>
  );
};

export default DarkModeSwitch;
