"use client";
import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-neutral-100 lg:text-lg p-4 w-screen ">
      <NavbarItem title={"Trending"} param="fetchTrending" />
      <NavbarItem title={"Top Rated"} param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
