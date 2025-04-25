"use client";

import { Checkbox } from "@/components/ui/checkbox";

type TodoProps = {
  id: number;
  title: string;
  memo?: string;
  isDone: boolean;
};

const Todo = ({ id, title, memo, isDone }: TodoProps) => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id={`todo${id}`} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={`todo${id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        {memo && <div>{memo}</div>}
      </div>
    </div>
  );
};

export default Todo;
