"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const AddTodoBtn = () => {
  const router = useRouter();
  function addTodo() {
    router.push("/createTodo");
    // todo 더하기
  }
  return <Button onClick={addTodo}>Add</Button>;
};

export default AddTodoBtn;
