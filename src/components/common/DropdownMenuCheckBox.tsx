// components/common/DropdownMenuCheckBox.tsx

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categoryType } from "@/type/categoryType";

type DropDownProps = {
  categoryList: Array<categoryType>;
};

export function DropdownMenuCheckbox({ categoryList }: DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">카테고리 선택</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>카테고리</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categoryList.map((category) => (
          <DropdownMenuCheckboxItem key={category.categoryId}>
            {category.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
