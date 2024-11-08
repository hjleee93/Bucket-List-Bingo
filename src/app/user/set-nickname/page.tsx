'use client'

import BackLayout from "@/app/layouts/backLayout"
import Input from "@/components/input"

export default function SetNickname() {

  return (
    <BackLayout title="닉네임">
    
      <div className="mx-5">
        <Input/>
      </div>
      </BackLayout>
  )
}