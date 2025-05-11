"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "../ui/badge";
import { PencilLine } from "lucide-react";
import { todoType } from "@/type/todoType";

const Todo = ({ todoId, title, memo, isDone, category }: todoType) => {
  const [done, setDone] = useState<boolean>(isDone);

  const handleCheckboxChange = () => {
    setDone(!done);
  };

  return (
    <div className="items-top flex space-x-2 w-full">
      <Checkbox
        id={`todo${todoId}`}
        checked={done}
        onCheckedChange={handleCheckboxChange}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={`todo${todoId}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        {memo && <div>{memo}</div>}
      </div>
      <div className="flex gap-[10px]">
        <Badge>{category.name}</Badge>
        <PencilLine className="text-[var(--color-gray)]" />
      </div>
    </div>
  );
};

export default Todo;
