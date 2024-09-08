'use client'
import BackLayout from "@/app/layouts/backLayout";
import Dropdown from "@/components/Dropdown";
import { useRouter } from "next/navigation";

export default function GenerateSize() {
  const router = useRouter();
  const btnClasses = "h-[150px] w-[150px] bg-gray-300 text-black rounded";


  const handleClick = (size: number) => {
    console.log('3x3 빙고 생성',size)
    sessionStorage.setItem('bingo-size', size.toString());
    router.push('/bingo');
  }

  return (
    <BackLayout title="빙고 사이즈">
    <div className="flex flex-col items-center justify-center mx-5 my-4">
      <div className="flex flex-col items-center space-y-7">
      <button className={btnClasses} onClick={() => handleClick(3)}>3x3</button>
      <button className={btnClasses}  onClick={() => handleClick(5)}>5x5</button>
      <button className={btnClasses}>custom
      
      </button>
      <Dropdown/>
      </div>
    </div>
    </BackLayout>
  );

}