import AddTodoBtn from "@/components/common/AddTodoBtn";
import DetailDay from "@/components/common/DetailDay";
import Header from "@/components/common/Header";
import Todo from "@/components/common/Todo";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <div className="pl-[48px]">
            <Calendar />
          </div>
          <div>
            <DetailDay />
            <Todo title="hi" id={1} />
            <AddTodoBtn />
          </div>
        </div>
      </div>
    </>
  );
}
