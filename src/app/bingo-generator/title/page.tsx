'use client'

import getFormattedDate from "@/app/utils/date";
import Button from "@/components/button";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import React from "react";
import { selectBingoTitle, setBingoTitle } from "@/lib/features/bingos/infoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function GenerateTitle() {
  const router = useRouter();
  const dispatch = useAppDispatch()
  
  const [title, setTitle] = React.useState('');
  const [isTitleError, setIsTitleError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; 
    setTitle(value);
    if (value.length > 20) {
      setIsTitleError(true);
      setErrorText('20자 이내로 입력해주세요');
    } else {
      setIsTitleError(false);
      setErrorText('');
    }
  }

  const handleSubmit = () => {
    console.log('SUBMIT', title)

    if(!title){
      setTitle(`_${getFormattedDate()}`)
      console.log(title)
    }
    dispatch(setBingoTitle(title))

    router.push('/bingo-generator/size');

  }

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!e.currentTarget.value.length) return;

    if(e.key === 'Enter'){
      e.preventDefault();
      console.log('ENTER')
      setTitle(e.currentTarget.value)
    }
    handleSubmit();
  
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">빙고 타이틀을 만들어주세요</h2>
        <div className="items-center">
          <Input placeholder="2025 버킷리스트" fullwidth error={isTitleError} errorText={errorText} onChange={handleInput} 
          onKeyDown={handleKeydown}/>
          <Button className="mt-10" type="submit" disabled={isTitleError} onClick={handleSubmit}>다음</Button>
          </div>
      </div>
  )

}