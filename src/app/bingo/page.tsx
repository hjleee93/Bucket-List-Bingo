'use client'
import { useEffect, useRef, useState } from "react";
import BingoBoard from "../bingo-generator/components/BingoBoard";
import Button from "@/components/button";
import BackLayout from "../layouts/backLayout";
import { selectBingoSize, selectBingoTitle, selectIsAllFilled } from "@/lib/features/bingos/infoSlice";
import { useAppSelector } from "@/lib/hooks";

  export default function BingoPage() {
    const [gridSize, setGridSize] = useState<number>(0);
    const [isClickedOutside, setIsClickedOutside] = useState(false); // 보드 밖을 클릭했는지 여부
    const boardRef = useRef(null);
    
    const bingoTitle = useAppSelector(selectBingoTitle)
    const bingoSize = useAppSelector(selectBingoSize)
    const isAllFilled = useAppSelector(selectIsAllFilled)
  

  
  useEffect(() => {
    if (bingoSize) {
      setGridSize(Number(bingoSize));
    }
  }, []);

  

  const handleSave = async () => {
    
    console.log('save')

    const result = await fetch('/api/hello', {method: 'post'} )

    console.log(result)
    
  }

  return(
    <BackLayout title={bingoTitle}>
    <div className="flex flex-col items-center">
      <div  ref={boardRef} className="board">
    <BingoBoard gridCount={Number(gridSize)} gridSize={320/Number(gridSize)}/>
    </div>
    <Button className="absolute bottom-3" size='large' disabled={isAllFilled ? false : true }
    onClick={() => handleSave()}
     >{isAllFilled ? '완성!' :'빙고를 채워주세요!'}</Button>
    </div>
    </BackLayout>
  )
}