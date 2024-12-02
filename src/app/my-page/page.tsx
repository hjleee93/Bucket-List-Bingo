'use client'

import ListItem from "@/components/list/Item"
import BackLayout from "../layouts/backLayout"
import UserAvatar from "../user/components/avatar"
import { useRouter } from "next/navigation";
import BottomDialog from "@/components/BottomDialog";
import { useState } from "react";

export default function MyPage() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);


  function logout() {
    console.log('logout')
  }

  function changeAvatar() {

    setIsOpen(true);
    console.log('change avatar')

  }

  return (
    <BackLayout title='마이페이지'>

      <li className="h-[80px] border-b flex items-center">
        <p className="mx-5 flex items-center">
          {/* TODO: avatar보다 더 좋은 단어가 있나?? */}
          <UserAvatar onClick={changeAvatar} />
          <span className="ml-4" onClick={() => router.push('/user/set-nickname')}>{'닉네임'}</span>
        </p>
      </li>

      <ListItem label="현재 진행중인 빙고 확인" onClick={() => router.push('/bingo/list/progress')} />
      <ListItem label="완료된 빙고" onClick={() => router.push('/bingo/list/completed')} />
      <ListItem label="알람 수신 설정" onClick={() => router.push('/alarm/settings')} />
      {/* TODO: footer 말고 뭐가 있을까? */}
      <footer className="h-[80px] flex items-center border-t w-full fixed bottom-0" onClick={logout}>
        <div className="flex flex-row mx-5">
          <p>로그아웃 아이콘 </p>
          로그아웃
        </div>
      </footer>
      <BottomDialog isOpen={isOpen} sendIsOpen={() => setIsOpen(false)} >
        <ul className="space-y-4">
          <li className="flex flex-row">

            <span className="material-symbols-outlined mr-4">
              image
            </span>
            <span>앨범에서 선택</span>
          </li>
          <li className="flex flex-row">
            <span className="material-symbols-outlined mr-4">
              image
            </span>
            <span>사진 찍기</span>

          </li>
          <li className="flex flex-row">
            <span className="material-symbols-outlined mr-4">
              image
            </span>
            <span>앨범에서 선택</span>

          </li>

        </ul>
      </BottomDialog>


    </BackLayout>

  )
}