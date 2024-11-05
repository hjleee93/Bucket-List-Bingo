'use client'
import { useSWRFetch } from '@/app/utils/fetch';
import { useEffect } from 'react';

export default function BingoByTitle() {
  
  const { data, error, isLoading } = useSWRFetch('/api/hello')


  return (
    <div>
      <h1>BingoId{data.message}</h1>
    </div>
  );
}