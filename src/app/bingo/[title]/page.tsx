/**
 * 실시간으로 갱신되어야할 이유는 없지만 초기 로딩속도와 서버 부하 덜 받기위해
 * 클라이언트에서 api 호출
 * 해당 부분은 seo 필요없음 
 */
'use client'
import CommonLayout from '@/app/layouts/commonLayout';
import { apiFetch, useSWRFetch } from '@/utils/fetch';
import Button from '@/components/button';
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BingoByTitle() {
  
  const params = useParams<{ title: string }>()

  const title = params.title


  useEffect(()=> {
    console.log('FETCH START')
    const fetch = async() => {
      const result = await apiFetch(`/api/bingos/${title}`, 'GET')
  
      console.log('FETCH END')
    }
    fetch()
  
  }, [])
  
5
  return (
    
    <CommonLayout>
    <div>
      <h2 className='flex justify-center text-2xl'>{title}</h2>
      
      <div className='mb-8'>
        <p className="font-bold mb-3">보상</p>
        
        <p className="font-bold">현재 등록된 보상이 없습니다.</p>
        <p className='flex'><Button size='auto' variant="underline">보상 등록하기</Button></p>
      </div>

      <Button>공유하기</Button>
    </div>
    </CommonLayout>
  );
}