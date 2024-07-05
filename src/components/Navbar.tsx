"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="flex justify-between items-center px-4 py-6 fixed w-full  top-0 ">
      <Link
        href={"/"}
        className="flex justify-between items-center space-x-4 text-black"
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1578403881967-084f9885be74?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="logo"
          width={40}
          height={40}
        />
        <h3>Geolocate</h3>
      </Link>
      <div className="flex justify-between items-center space-x-2">
        <Link
          href={"/product"}
          className={`${
            pathName === "/product" ? "text-green-400" : ""
          } text-white`}
        >
          Product
        </Link>
        <Link
          href={"/price"}
          className={`${
            pathName === "/price" ? "text-green-400" : ""
          } text-white`}
        >
          Pricing
        </Link>

        <Link href={"/login"}>
          <button className="px-4 py-2 bg-green-400 rounded-xl text-white">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
