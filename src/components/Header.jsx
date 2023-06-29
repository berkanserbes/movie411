import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 w-screen bg-red-400">
      <div className="flex">
        <MenuItem title={"Home"} address={"/"} Icon={AiFillHome} />
        <MenuItem title={"About"} address={"/about"} Icon={AiFillInfoCircle} />
      </div>

      <div className="flex items-center space-x-5">
        <Link href="/">
          <h2 className="text-2xl pe-3 lg:pe-16">Movie411</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;