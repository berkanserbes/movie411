"use client";
import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-black border-y-2 border-y-red-500 dark:border-y-white bg-neutral-100 lg:text-lg p-4 w-screen ">
      <NavbarItem title={"Trending"} param="fetchTrending" />
      <NavbarItem title={"Top Rated"} param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
