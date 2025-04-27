import React from "react";
import { DropdownMenuCheckbox } from "@/components/common/DropdownMenuCheckBox";

type CreateTodoProps = {
  // open: boolean;
  onClose: () => void;
};

const CreateTodo = ({ onClose }: CreateTodoProps) => {
  // if (!open) return null;
  return (
    <div className="">
      <form>
        <label> 할 일</label>
        <input type="text" />

        <label> 메모 </label>
        <input type="textarea" />

        <label>카테고리</label>
        <DropdownMenuCheckbox />
      </form>
      <p onClick={onClose}>뒤로 가기</p>
    </div>
  );
};

export default CreateTodo;
