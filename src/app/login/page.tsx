"use client";
import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState<string>("zubby@email.com");
  const [password, setPassword] = useState<number | string>("12345");

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-slate-600">
      <form className="flex flex-col items-center justify-center bg-green-300 h-1/2 w-1/2 gap-4">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            className="outline-none w-full py-2 px-4"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            className="outline-none w-full py-2 px-4"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
          />
        </div>
        <button className="px-4 py-2 bg-green-400 rounded-xl text-white">
          Login
        </button>
      </form>
    </main>
  );
}
