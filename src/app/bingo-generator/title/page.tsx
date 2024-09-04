'use client'

import getFormattedDate from "@/app/utils/date";
import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

export default function BingoGenerator() {
  const [title, setTitle] = React.useState('');
  const [isTitleError, setIsTitleError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title)

    if (e.target.value.length > 50) {
      setIsTitleError(true);
      setErrorText('50자 이내로 입력해주세요');
    } else {
      setIsTitleError(false);
      setErrorText('');

    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(title)

    if(!title){
      console.log(getFormattedDate())
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">빙고 타이틀을 만들어주세요</h2>
        <div className="itmes-center">
          <Input placeholder="2025 버킷리스트" fullwidth error={isTitleError} errorText={errorText} onChange={handleInput}/>
          <Button className="mt-10" type="submit" disabled={isTitleError} onClick={handleSubmit}>다음</Button>
          </div>
      </div>
  )

}