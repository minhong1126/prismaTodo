import Header from "@/components/common/Header";
import { Calendar } from "@/components/ui/calendar";
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="pl-[48px]">
          <Calendar />
        </div>
      </div>
    </>
  );
}
