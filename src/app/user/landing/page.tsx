'use client'

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import UserAvatar from "../components/avatar";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="flex items-center my-7 mx-5">
      <div className="flex flex-col w-full">
        <p className="flex justify-end" onClick={() => router.push('/my-page')}>
            <UserAvatar />
        </p>
        <div className="flex flex-col flex-wrap content-center">
          <div className="flex flex-col space-y-12">
            <h2 className="text-2xl font-semibold">안녕하세요, { }님!</h2>
            <Button size="medium" onClick={() =>router.push('/bingo-generator/title')}>
              나만의 빙고 만들기
            </Button>
            <Button size="medium" onClick={() => router.push('/bingo/list/progress')}>
              진행중인 빙고 확인
            </Button>
          </div>
        </div>
      </div>

    </div>

  );

}