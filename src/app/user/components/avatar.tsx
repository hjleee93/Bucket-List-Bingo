'use client'

//TODO: 이벤트를 넘기는게 나을 지, 부모 컴포넌트에서 자체적으로 처리하는게 나을 지
export default function UserAvatar({onClick}: {onClick ?:(event : React.MouseEvent<HTMLButtonElement>) => void}) {
  return(
    <span className="material-symbols-outlined text-4xl" onClick={onClick} >
    account_circle
  </span>
  )
}