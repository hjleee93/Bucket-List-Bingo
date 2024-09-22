'use client'
import { useEffect, useRef, useState } from "react";
import BingoBoard from "../bingo-generator/components/BingoBoard";
import Button from "@/components/button";
import BackLayout from "../layouts/backLayout";
import { selectBingoBoard, selectBingoSize, selectBingoTitle, selectIsAllFilled } from "@/lib/features/bingos/infoSlice";
import { useAppSelector } from "@/lib/hooks";

import { title } from "process";
import { apiFetch } from "../utils/fetch";
import { useRouter } from "next/navigation";
import CustomDialog from "@/components/Dialog";
import CustomAlert from "@/components/Alert";


  export default function BingoPage() {
    const router = useRouter();
    
    const [gridSize, setGridSize] = useState<number>(0);
    const [isClickedOutside, setIsClickedOutside] = useState(false); // 보드 밖을 클릭했는지 여부
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    
    const boardRef = useRef(null);
    
    const bingoTitle = useAppSelector(selectBingoTitle)
    const bingoSize = useAppSelector(selectBingoSize)
    const isAllFilled = useAppSelector(selectIsAllFilled)
    const boardContents = useAppSelector(selectBingoBoard)
  

  
  useEffect(() => {
    if (bingoSize) {
      setGridSize(Number(bingoSize));
    }
  }, []);

  

  const handleSave = async () => {
  try{

    // if(!bingoTitle || !gridSize) return

    if(!isAllFilled) return setIsAlertOpen(true)

    const body = {
      title: bingoTitle,
      size: gridSize,
      board: boardContents
    }

    console.log(body)



    const result = await apiFetch('/api/hello','POST', body)

    router.push(`/bingo/${bingoTitle}`)

  }catch(e){
    console.error(e)
  }
    
    
  }

  return(
    <BackLayout title={bingoTitle}>
    <div className="flex flex-col items-center">
      <div  ref={boardRef} className="board">
    <BingoBoard gridCount={Number(gridSize)} gridSize={320/Number(gridSize)}/>
    </div>
    <Button className="absolute bottom-3" size='large'
    //  disabled={isAllFilled ? false : true }
    onClick={() => handleSave()}
     >
    완성!
      {/* {isAllFilled ? '완성!' :'빙고를 채워주세요!'} */}
      </Button>


      <CustomAlert isOpen={isAlertOpen}
      sendIsOpen={() => setIsAlertOpen(false)}
      >
       <h6> 빙고를 먼저 완성해주세요!</h6>
      </CustomAlert>

    </div>
   
    </BackLayout>
  )
}