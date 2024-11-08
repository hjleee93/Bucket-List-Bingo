'use client'

import getFormattedDate from "@/app/utils/date";
import Button from "@/components/button";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { selectBingoTitle, setBingoTitle } from "@/libs/features/bingos/infoSlice";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";

export default function GenerateTitle() {
  const router = useRouter();
  const dispatch = useAppDispatch()
  
  const [title, setTitle] = useState<string>();
  const [isTitleError, setIsTitleError] = useState(false);
  const [errorText, setErrorText] = useState('');
  
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
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

    if(!title){
      const newTitle = `_${getFormattedDate()}`
      setTitle(newTitle)
      dispatch(setBingoTitle(newTitle))

    }else{
      dispatch(setBingoTitle(title))
    }

    router.push('/bingo-generator/size');

  }

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!e.currentTarget.value.length) return;

    if(e.key === 'Enter'){
      e.preventDefault();
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