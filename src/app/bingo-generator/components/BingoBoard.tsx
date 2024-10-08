'use client'
import { useState } from "react";
import BingoCell from "./BingoCell";
import { send } from "process";
import { useAppSelector } from "@/lib/hooks";
import { selectBingoBoard } from "@/lib/features/bingos/infoSlice";
import React from "react";

interface BingoBoardProps {
  gridCount: number;
  gridSize: number;
}

export default function BingoBoard({ gridCount, gridSize }: BingoBoardProps) {
  //배열 생성
  const bingoValues = Array.from({ length: gridCount }, (_, row) =>
    Array.from({ length: gridCount }, (_, col) => row * gridCount + col + 1)
  );

  // 클릭된 셀을 관리하는 상태
  const [clickedCell, setClickedCell] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedCell(index);
  };

  const handleBlurCell = () => {

    setClickedCell(null);
  };

  return (
    <div
      className='grid border border-black mt-10'
      style={{
        gridTemplateColumns: `repeat(${gridCount}, 1fr)`, // 동적 grid size 설정
        width: `${gridSize * gridCount}px`, // 동적으로 전체 크기 설정
      }}
    >
      {bingoValues.flat().map((value, index) => {
        const row = Math.floor(index / gridCount);
        const col = index % gridCount;
        const isLastRow = row === gridCount - 1;
        const isLastCol = col === gridCount - 1;

        return (
          <BingoCell
            key={index}
            size={gridSize}
            isLastRow={isLastRow}
            isLastCol={isLastCol}
            position={row + ',' + col}
            isClicked={clickedCell === index}
            onClick={() => handleClick(index)}
            onBlurCell={handleBlurCell}
          />
        );
      })}
    </div>
  );
}
