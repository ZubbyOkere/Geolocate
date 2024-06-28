"use client";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href={"/"}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </main>
  );
};

export default NotFound;
