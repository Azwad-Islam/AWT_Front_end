"use client"
import Navigation from '@/app/utils/navigation'
import { useParams } from 'next/navigation'
 
export default function Page() {
  const router = useParams()

 
  return (
      <>
          <Navigation/>
    You have clicked box no: {router.id}
    </>
  )
}