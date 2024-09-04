'use client'

import Button from "@/components/button";
import Input from "@/components/input";
import React, { useEffect } from "react";


export default function NicknameForm() {
  const [nickname, setNickname] = React.useState('');
  const [isNickname, setIsNickname] = React.useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (e.target.value.length >= 2) {
      setIsNickname(true);
    } else {
      setIsNickname(false);
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(nickname)
   
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">닉네임을 작성해 주세요</h2>
        <div className="itmes-center">
          <Input placeholder="닉네임" fullwidth onChange={handleInput}/>
          <Button className="mt-10" type="submit" disabled={!isNickname} onClick={handleSubmit} >
            { isNickname ? '완료' : '닉네임을 입력해 주세요'}</Button>
          </div>
      </div>
  );
}
