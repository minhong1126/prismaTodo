"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function Calendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      classNames={{
        today: `border-[#4E4E4E] border-1 rounded-full`,
        selected: `bg-[#4E4E4E] text-white rounded-full`,
        nav: ``,
      }}
    />
  );
}
