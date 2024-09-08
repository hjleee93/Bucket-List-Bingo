'use client'
import { useEffect, useState } from "react";
import BingoBoard from "../bingo-generator/components/BingoBoard";
import Button from "@/components/button";
import BackLayout from "../layouts/backLayout";

  export default function BingoPage() {
    const [gridSize, setGridSize] = useState<number>(0);
  
  useEffect(() => {
    const number = sessionStorage.getItem('bingo-size');
    if (number) {
      setGridSize(Number(number));
    }
  }, []);

  return(
    <BackLayout title="빙고 타이틀">
    <div className="flex flex-col items-center">
    <BingoBoard gridCount={Number(gridSize)} gridSize={320/Number(gridSize)}/>
    <Button className="absolute bottom-3" size='large'  >{'빙고를 채워주세요!'}</Button>
    </div>
    </BackLayout>
  )
}