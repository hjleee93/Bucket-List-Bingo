'use client'

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <span className="material-symbols-outlined" onClick={router.back}>
      arrow_back_ios
    </span>
  );
}