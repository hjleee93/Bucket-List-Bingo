'use client'
import { useEffect, useState } from "react";
import BingoBoard from "../bingo-generator/components/BingoBoard";
import Button from "@/components/button";
import BackLayout from "../layouts/backLayout";
import { selectBingoSize, selectBingoTitle } from "@/lib/features/bingos/infoSlice";
import { useAppSelector } from "@/lib/hooks";

  export default function BingoPage() {
    const [gridSize, setGridSize] = useState<number>(0);

  const bingoTitle = useAppSelector(selectBingoTitle)
  const bingoSize = useAppSelector(selectBingoSize)

  
  useEffect(() => {
    if (bingoSize) {
      setGridSize(Number(bingoSize));
    }
  }, []);

  return(
    <BackLayout title={bingoTitle}>
    <div className="flex flex-col items-center">
    <BingoBoard gridCount={Number(gridSize)} gridSize={320/Number(gridSize)}/>
    <Button className="absolute bottom-3" size='large'  >{'빙고를 채워주세요!'}</Button>
    </div>
    </BackLayout>
  )
}