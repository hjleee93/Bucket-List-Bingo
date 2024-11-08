'use client'
import BackLayout from "@/app/layouts/backLayout";
import ListItem from "@/components/list/Item";
import { useRouter } from "next/navigation";


//TODO: 같은 컴포넌트인데 라우터 이름만 다르게 하고 그에 해당하는 라우터 이름만 변경하고 싶으면??
export default function BingoListProgressPage() {
  const router = useRouter();

  return ( 
    <BackLayout title="현재 진행중인 빙고">
<div className="border-t">
  <ListItem label="dd" onClick={() => router.push('/')} icon='group'/>
  
</div>
</BackLayout>
  );
}