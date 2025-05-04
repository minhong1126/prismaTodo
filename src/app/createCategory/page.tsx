"use client";
import React, { useRef, useState } from "react";
import { categoryType } from "@/type/categoryType";
import { CategoryColor } from "@/type/colorEnum";
import axios from "axios";

const CreateTodo = () => {
  const [color, setColor] = useState<categoryType["color"]>(
    CategoryColor.WHITE
  );
  const CategoryColorList = Object.values(
    CategoryColor
  ) as categoryType["color"][];
  const categoryRef = useRef<HTMLInputElement>(null);

  const handleColorChange = (selectedColor: categoryType["color"]) => {
    setColor(selectedColor);
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const name = categoryRef.current?.value;
    const userId = localStorage.getItem("userId");
    axios
      .post("api/category", {
        userId: Number(userId),
        name: name,
        color: color,
      })
      .then((res) => {
        console.error(res);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>카테고리 이름</label>
        <input type="text" ref={categoryRef} />

        <label>색 설정</label>
        <div className="flex gap-2 flex-wrap mt-2">
          {CategoryColorList.map((colorOption) => (
            <button
              key={colorOption}
              type="button"
              style={{
                backgroundColor: `var(--color-${colorOption.toLowerCase()})`,
              }}
              onClick={() => handleColorChange(colorOption)}
              className={`w-8 h-8 rounded-full ${
                color === colorOption ? "ring-2 ring-black" : ""
              }`}
              aria-label={colorOption}
            />
          ))}
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
