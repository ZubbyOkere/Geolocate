"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const AppNav = (props: Props) => {
  const path = usePathname();
  console.log(path);

  return (
    <div
      className={
        "z-50 mt-20 text-black w-1/2 flex items-center justify-center gap-6  "
      }
    >
      <Link
        href={"/app/cities"}
        className={`${path === "/app/cities" ? "text-red-300" : "text-black"}`}
      >
        Cities
      </Link>
      <Link
        href={"/app/countries"}
        className={`${
          path === "/app/countries" ? "text-red-300" : "text-black"
        }`}
      >
        Countries
      </Link>
    </div>
  );
};

export default AppNav;
