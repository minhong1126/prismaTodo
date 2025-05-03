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
        switch (res.status) {
          case 200:
          case 201:
            localStorage.setItem("userId", res.data.id);
            console.error(res.status, res.data.id);
            break;
          default:
            console.error("No status:", res);
        }
        if (res.status == 200) {
          // router.push("/todo");
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
