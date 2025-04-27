"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  function onStart() {
    // 대충 계정 생성 요철 코드 & 로컬 스토리지에 id 넣기
    // 그다음에 todo로 이동
    router.push("/todo");
  }
  return (
    <div>
      <Button onClick={onStart}>시작하기</Button>
    </div>
  );
};

export default Page;
