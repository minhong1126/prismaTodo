"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { categoryType } from "@/type/categoryType";
import { DatePicker } from "@/components/common/DatePicker";
import { DropdownMenuCheckbox } from "@/components/common/DropdownMenuCheckBox";

const CreateTodo = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [categoryList, setCategoryList] = useState<Array<categoryType>>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const memoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios
      .get("api/category")
      .then((res) => {
        if (res.status === 200) {
          setCategoryList(res.data.category);
        } else {
          console.error(res.status, res);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    axios.post("api/todo", {});
  }

  return (
    <div className="w-full h-full">
      <form onSubmit={onSubmit}>
        <label>날짜</label>
        <DatePicker />

        <label> 할 일</label>
        <input type="text" ref={titleRef} />

        <label> 메모 </label>
        <input type="textarea" ref={memoRef} />

        <label> 카테고리 선택 </label>
        <DropdownMenuCheckbox categoryList={categoryList} />

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default CreateTodo;
