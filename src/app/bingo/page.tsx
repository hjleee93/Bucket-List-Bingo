'use client'
import { useEffect, useState } from "react";
import BingoBoard from "../bingo-generator/components/BingoBoard";


  export default function BingoPage() {
    const [gridSize, setGridSize] = useState<number>(0);
  
  useEffect(() => {
    const number = sessionStorage.getItem('bingo-size');
    if (number) {
      setGridSize(Number(number));
    }
  }, []);

  return(
    <div className="flex justify-center">

  <BingoBoard gridCount={Number(gridSize)} gridSize={320/Number(gridSize)}/>
  </div>
  )
}