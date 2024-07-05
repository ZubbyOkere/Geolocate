import Link from "next/link";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-custom-image bg-cover bg-center text-center text-white">
      <section className="flex flex-col gap-4">
        <h1 className=" text-2xl font-bold">
          Travel wherever you want all over the world.
          <br />
          Geolocate will keep track of your adventure.
        </h1>
        <h2 className=" ">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link href={"/app"}>
          <button className="px-4 py-2 bg-green-400 rounded-xl text-white">
            Start now!
          </button>
        </Link>
      </section>
    </main>
  );
}
