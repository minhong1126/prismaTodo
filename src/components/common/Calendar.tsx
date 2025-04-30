"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export default function Calendar({ selected, onSelect }: CalendarProps) {
  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={onSelect}
      classNames={{
        today: `font-extrabold`,
        selected: `bg-[#4E4E4E] text-white rounded-full`,
      }}
    />
  );
}
