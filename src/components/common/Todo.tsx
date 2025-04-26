"use client";

import { Checkbox } from "@/components/ui/checkbox";
// import { Badge } from "../ui/badge";
import { PencilLine } from "lucide-react";

type TodoProps = {
  id: number;
  title: string;
  memo?: string;
  // isDone: boolean;
  // label: string;
};

const Todo = ({ id, title, memo }: TodoProps) => {
  return (
    <div className="items-top flex space-x-2 w-full">
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
      <div className="flex gap-[10px]">
        <PencilLine className="text-[var(--color-gray)]" />
      </div>
    </div>
  );
};

export default Todo;
