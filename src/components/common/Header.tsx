"use client";

import { Avatar } from "../ui/avatar";

export default function Header() {
  return (
    <header className="flex px-[46px] items-center justify-between h-[139px]">
      <div className="rounded-full w-[74px] h-[78px] border-1 border-gray-400">
        <Avatar />
      </div>
      <div className="flex text-8 font-bold px-[30px] py-1 gap-[30px]">
        <p> Todo </p>
        <p> . </p>
        <p> Categories </p>
        <p> . </p>
        <p> Schedule </p>
        <p> . </p>
        <p> Chart </p>
      </div>
    </header>
  );
}
