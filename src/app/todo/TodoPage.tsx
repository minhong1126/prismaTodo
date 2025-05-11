import React from "react";

import Todo from "@/components/todo/Todo";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import DetailDay from "@/components/todo/DetailDay";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { todoType } from "@/type/todoType";

const TodoPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!(selectedDate instanceof Date)) {
      return;
    } else {
      axios
        .get("api/todo", {
          params: { date: selectedDate.toISOString().split("T")[0] },
        })
        .then((res) => {
          console.error(res);
          setTodoList(res.data.todos);
        })
        .catch((err) => {
          if (err.status == 500) {
            console.error("500 Error", err);
          }
        });
    }
  }, [selectedDate]);

  return (
    <div className="w-full flex px-[48px]">
      <div className="w-1/2">
        <Calendar selected={selectedDate} onDayClick={setSelectedDate} />
        <Button onClick={() => router.push("/createCategory")}>
          Add Category
        </Button>
      </div>
      <div className="w-1/2">
        <DetailDay selectedDate={selectedDate} onSelect={setSelectedDate} />
        {todoList.map((todo) => (
          <Todo
            key={todo.todoId}
            title={todo.title}
            memo={todo.memo}
            isDone={todo.isDone}
            category={todo.category}
            date={todo.date}
          />
        ))}
        <Button onClick={() => router.push("/createTodo")}>Add Todo</Button>
      </div>
    </div>
  );
};

export default TodoPage;
