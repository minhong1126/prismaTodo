"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useRef, useState } from "react";
import { DatePicker } from "react-aria-components";

const CreateTodo = () => {
  const [date, setDate] = useState<Date>(new Date());
  const titleRef = useRef<HTMLInputElement>(null);
  const memoRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    axios.post("api/todo", {});
  }

  return (
    <div className="w-full h-full">
      <form onSubmit={onSubmit}>
        <label>날짜</label>
        {/* <DatePicker
          value={date} // DatePicker에 value로 Date 객체를 넘김
          onChange={(newDate) => setDate(newDate)} // 선택한 날짜를 상태에 저장
        /> */}

        <label> 할 일</label>
        <input type="text" ref={titleRef} />

        <label> 메모 </label>
        <input type="textarea" ref={memoRef} />

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default CreateTodo;
