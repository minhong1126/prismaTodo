"use client";
import { useState } from "react";
import AddTodoBtn from "@/components/common/AddTodoBtn";
import DetailDay from "@/components/common/DetailDay";
import Header from "@/components/common/Header";
import Todo from "@/components/common/Todo";
import AddCategoryBtn from "@/components/common/AddCategoryBtn";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <>
      <Header />
      <div className="w-full flex px-[48px]">
        <div className="w-1/2">
          <Calendar selected={selectedDate} onDayClick={setSelectedDate} />
          <AddCategoryBtn />
        </div>
        <div className="w-1/2">
          <DetailDay selectedDate={selectedDate} onSelect={setSelectedDate} />
          <Todo title="hi" id={1} />
          <AddTodoBtn />
        </div>
      </div>
    </>
  );
}
