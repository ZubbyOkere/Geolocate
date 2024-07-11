"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const BackButton = (props: Props) => {
  const router = useRouter();
  return (
    <div onClick={router.back} className="bg-green-400 py-2 px-6 rounded-full">
      BackButton
    </div>
  );
};

export default BackButton;
