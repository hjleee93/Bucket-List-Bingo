'use client'
import BackLayout from "@/app/layouts/backLayout";
import ListItem from "@/components/list/Item";
import { useRouter } from "next/navigation";

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