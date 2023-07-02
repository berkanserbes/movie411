import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-orange-400 p-2 ${
          genre === param &&
          "underline underline-offset-8 decoration-2 decoration-amber-600 text-amber-800 dark:text-orange-400 rounded-lg"
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
