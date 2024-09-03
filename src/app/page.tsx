'use client';

export default function Home() {
 const kakaologin = () => {
  
 }
 const appleLogin = () => {
  }


  const goJoinPage = () => {
    console.log('회원가입 페이지로 이동합니다.')
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full">
      <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">SNS 계정으로 로그인</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="space-y-4 mx-8">
          <button className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
            카카오
          </button>
          <button className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
            네이버
          </button>
          <button className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
            구글
          </button>
        </div>
      </div>
    </div>
    
// <div className="flex flex-col">

//   <button className="bg-main-active" onClick={kakaologin}>
// 카카오 로그인
//   </button>
//   <button className="bg-main-active" onClick={appleLogin}>
// 애플 로그인
//   </button>
//   <button className="outline" onClick={goJoinPage}>
// 회원가입
//   </button>
//   <button >비회원으로 시작하기</button>
// </div>
  );
}

