"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { categoryType } from "@/type/categoryType";
import { DatePicker } from "@/components/common/DatePicker";
import { CategoryDropDown } from "@/components/common/CategoryDropDown";
import { useRouter } from "next/navigation";

const CreateTodo = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [category, setCategory] = useState<string>("");
  const [categoryList, setCategoryList] = useState<Array<categoryType>>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const memoRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("api/category")
      .then((res) => {
        if (res.status === 200) {
          setCategoryList(res.data.category);
          router.back();
        } else {
          console.error(res.status, res);
        }
      })
      .catch((err) => console.error(err));
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const title = titleRef.current?.value;
    const memo = memoRef.current?.value;

    axios.post("api/todo", {
      title: title,
      memo: memo,
      isDone: false,
      date: date,
      category: category,
    });
  }

  return (
    <div className="w-full h-full">
      <form onSubmit={onSubmit}>
        <label>날짜</label>
        <DatePicker setDate={setDate} />

        <label> 할 일</label>
        <input type="text" ref={titleRef} />

        <label> 메모 </label>
        <input type="textarea" ref={memoRef} />

        <label> 카테고리 선택 </label>
        <CategoryDropDown
          categoryList={categoryList}
          setCategory={setCategory}
        />

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default CreateTodo;
