import React from "react";
import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
      <Icon className="text-2xl sm:hidden mx-2" />
      <span className="hidden sm:inline my-2 text-sm lg:text-lg text-red-500">
        {title}
      </span>
    </Link>
  );
};

export default MenuItem;
