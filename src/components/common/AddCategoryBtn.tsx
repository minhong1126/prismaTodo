"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const AddCategoryBtn = () => {
  const router = useRouter();
  function addCategory() {
    router.push("/createCategory");
  }
  return <Button onClick={addCategory}>Add Category</Button>;
};

export default AddCategoryBtn;
