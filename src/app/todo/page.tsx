"use client";
import { useEffect, useState } from "react";
import AddTodoBtn from "@/components/common/AddTodoBtn";
import Calendar from "@/components/common/Calendar";
import DetailDay from "@/components/common/DetailDay";
import Header from "@/components/common/Header";
import Todo from "@/components/common/Todo";
import AddCategoryBtn from "@/components/common/AddCategoryBtn";
import axios from "axios";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  useEffect(() => {
    axios
      .get("api/category")
      .then((res) => {
        console.error(res);
        if ((res.status = 200)) {
        } else {
          console.error(res.status, res);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="w-full flex px-[48px]">
        <div className="w-1/2">
          <Calendar selected={selectedDate} onSelect={setSelectedDate} />
        </div>
        <div className="w-1/2">
          <DetailDay selectedDate={selectedDate} onSelect={setSelectedDate} />
          <Todo title="hi" id={1} />
          <AddTodoBtn />
          <AddCategoryBtn />
        </div>
      </div>
    </>
  );
}
