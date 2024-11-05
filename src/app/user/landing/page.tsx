'use client'

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="flex items-center my-7 mx-5">
      <div className="flex flex-col w-full">
        <p className="flex justify-end">
        <span className="material-symbols-outlined text-4xl" >
account_circle
</span>
        </p>
        <div className="flex flex-col flex-wrap content-center">
      <h2 className="text-2xl font-semibold">안녕하세요, {}님!</h2>
      <Button size="medium">
      나만의 빙고 만들기
        </Button>
        <Button size="medium" onClick={ () => router.push('/bingo/list/progress')}>
          진행중인 빙고 확인
        </Button>
        </div>
        </div>

    </div>

  );

}