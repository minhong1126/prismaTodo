"use client";
import React, { useRef, useState } from "react";
import { categoryColor } from "@/type/categoryColor";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateTodo = () => {
  const [selectedColor, setSelectedColor] = useState<categoryColor>(
    categoryColor.BLACK
  );
  const categoryRef = useRef<HTMLInputElement>(null);
  const colorlist = Object.values(categoryColor);
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const name = categoryRef.current?.value;
    const userId = localStorage.getItem("userId");
    axios
      .post("api/category", {
        userId: Number(userId),
        name: name,
        color: selectedColor,
      })
      .then((res) => {
        console.log(res);
        router.back();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>카테고리 이름</label>
        <input type="text" ref={categoryRef} />

        <label>색 설정</label>
        <div className="flex gap-4">
          {colorlist.map((color) => (
            <button
              type="button"
              key={color}
              className="w-10 h-10 rounded-full"
              style={{
                backgroundColor: color,
                border: color === selectedColor ? "4px solid black" : "none",
              }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-gray text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
