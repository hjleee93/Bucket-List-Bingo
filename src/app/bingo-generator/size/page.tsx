'use client'
import BackLayout from "@/app/layouts/backLayout";
import CustomDialog from "@/components/Dialog";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GenerateSize() {
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState(4)

  const btnClasses = "h-[150px] w-[150px] bg-gray-300 text-black rounded";
  const sizeOptions = [
    { value: 4, label: '4x4' },
    { value: 5, label: '5x5' },
    { value: 6, label: '6x6' },
    { value: 7, label: '7x7' },
    { value: 8, label: '8x8' },
    { value: 9, label: '9x9' },
    { value: 10, label: '10x10' },
    
  ]

  const createBingo = (size: number) => {
    sessionStorage.setItem('bingo-size', size.toString());
    router.push('/bingo');
  }

  const handleClick = (size: number) => {
    createBingo(size)
  }
  

  const setCustomSize = (_size: number) => {
    console.log('size selected',_size)
    setSize(_size)
  }

  const onConfirm = () => {
    createBingo(size)
  
  }

  return (
    <BackLayout title="빙고 사이즈">
    <div className="flex flex-col items-center justify-center mx-5 my-4">
      <div className="flex flex-col items-center space-y-7">
      <button className={btnClasses} onClick={() => handleClick(3)}>3x3</button>
      <button className={btnClasses} onClick={() => handleClick(5)}>5x5</button>
      <button className={btnClasses} onClick={() => setIsOpen(true)}>custom {isOpen}</button>
      <CustomDialog isOpen={isOpen} 
      sendIsOpen={() => setIsOpen(false)}
      onConfirm={ onConfirm}
       >
          <h6 className="text-2xl font-semibold mb-4 text-black">빙고 사이즈를 선택해주세요</h6>
          <Dropdown 
          defaultOption={sizeOptions[0]}
           options={sizeOptions}
           onValueSelected={(value) => setCustomSize(Number(value))}
           />
        </CustomDialog>

      </div>
    </div>
    </BackLayout>
  );

}