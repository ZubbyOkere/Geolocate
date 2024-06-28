import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-custom-image bg-cover bg-center text-center text-white">
      <section>
        <h1 className=" text-2xl">
          Travel wherever you want all over the world.
          <br />
          Geolocate will keep track of your adventure.
        </h1>
        <h2 className=" text-3xl">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
      </section>
    </main>
  );
}
