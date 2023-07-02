"use client";

import React, { useState, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMount(true), []);

  return (
    <>
      {mount && currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsMoonStarsFill
          className="text-xl cursor-pointer text-white hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
