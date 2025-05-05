"use client";
import { useEffect, useState } from "react";
import AddTodoBtn from "@/components/common/AddTodoBtn";
import Calendar from "@/components/common/Calendar";
import DetailDay from "@/components/common/DetailDay";
import Header from "@/components/common/Header";
import Todo from "@/components/common/Todo";
import AddCategoryBtn from "@/components/common/AddCategoryBtn";
import axios from "axios";
import { categoryType } from "@/type/categoryType";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [categoryList, setCategoryList] = useState<Array<categoryType> | null>(
    null
  );

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

  const b = "blue";

  return (
    <>
      <Header />
      <div className="w-full flex px-[48px]">
        <div className="w-1/2">
          <Calendar selected={selectedDate} onSelect={setSelectedDate} />
          <ul>
            {categoryList?.map((category) => (
              <li key={category.categoryId}>
                <Badge
                  style={{
                    backgroundColor: `var(--color-${category.color.toLocaleLowerCase()})`,
                  }}
                >
                  {category.name}
                </Badge>
              </li>
            ))}
          </ul>
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
