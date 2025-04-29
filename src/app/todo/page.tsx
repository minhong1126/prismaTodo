import AddTodoBtn from "@/components/common/AddTodoBtn";
import Calendar from "@/components/common/Calendar";
import DetailDay from "@/components/common/DetailDay";
import Header from "@/components/common/Header";
import Todo from "@/components/common/Todo";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="w-full flex">
          <div className="w-1/2 pl-[48px]">
            <Calendar />
          </div>
          <div className="w-1/2">
            <DetailDay />
            <Todo title="hi" id={1} />
            <AddTodoBtn />
          </div>
        </div>
      </div>
    </>
  );
}
