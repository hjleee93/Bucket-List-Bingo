'use client'

import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import Switch from "@/components/switchButton";
import React from "react";


export default function NicknameForm() {


  const handleSubmit = (e:any) => {
    e.preventDefault();
   
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">닉네임을 작성해 주세요</h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
          <Input placeholder="닉네임" fullwidth/>
          <Input placeholder="닉네임" variant="underline" fullwidth />
          <Checkbox checked={checked} onChange={handleChange} />
          <Switch checked={checked} onChange={handleChange}/>
          <Button>닉네임을 입력해 주세요</Button>
        </form>
      </div>
  );
}
