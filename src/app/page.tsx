"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import axios from "axios";

const Page = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function onStart(e: React.FormEvent) {
    e.preventDefault();
    const name = nameRef.current?.value;

    axios
      .post("api/user", {
        name: name,
      })
      .then((res) => {
        console.error(res);
        if (res.status == 200) {
          localStorage.setItem("userId", res.data.id);
          router.push("/todo");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <input type="text" placeholder="이름을 입력해주세요" ref={nameRef} />
      <Button onClick={onStart}>시작하기</Button>
    </div>
  );
};

export default Page;
