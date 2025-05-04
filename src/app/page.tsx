"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import axios from "axios";

const Page = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // useEffect(() => {
  //   if (localStorage.getItem("userId")) {
  //     router.push("/todo");
  //     return;
  //   }
  // });

  async function onStart(e: React.FormEvent) {
    e.preventDefault();
    const name = nameRef.current?.value;
    if (!name) return;

    axios
      .post("api/user", { name: name })
      .then((res) => {
        console.error(res);
        switch (res.status) {
          case 200:
          case 201:
            localStorage.setItem("userId", res.data.userId);
            console.error(res.status, res.data.userId);
            router.push("/todo");
            break;
          case 500:
            console.error("500 Server Error", res);
            break;
          default:
            console.error("No status:", res);
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
