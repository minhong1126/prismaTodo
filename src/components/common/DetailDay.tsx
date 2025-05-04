"use client";
import React from "react";

interface DetailDayProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

const DetailDay = ({ selectedDate, onSelect }: DetailDayProps) => {
  const formattedDate =
    selectedDate &&
    selectedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

  function handlePreviousDay() {
    if (selectedDate) {
      const prevDate = new Date(selectedDate);
      prevDate.setDate(prevDate.getDate() - 1);
      onSelect(prevDate);
    }
  }

  function handleNextDay() {
    if (selectedDate) {
      const nextDate = new Date(selectedDate);
      nextDate.setDate(nextDate.getDate() + 1);
      onSelect(nextDate);
    }
  }

  return (
    <div className="flex text-[24px] font-bold justify-between mb-[69px] w-full">
      <button onClick={handlePreviousDay}>&lt;</button>
      <p>{formattedDate}</p>
      <button onClick={handleNextDay}>&gt;</button>
    </div>
  );
};

export default DetailDay;
