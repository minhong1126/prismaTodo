"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categoryType } from "@/type/categoryType";

type DropDownProps = {
  categoryList: Array<categoryType>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export function CategoryDropDown({ categoryList, setCategory }: DropDownProps) {
  const [dropDownLabel, setDropDownLabel] = useState<string>("카테고리 선택");

  function setCategoryLabel(name: string) {
    setDropDownLabel(name);
    setCategory(name);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{dropDownLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {categoryList.map((category) => (
          <DropdownMenuCheckboxItem
            key={category.categoryId}
            onClick={() => setCategoryLabel(category.name)}
          >
            {category.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
