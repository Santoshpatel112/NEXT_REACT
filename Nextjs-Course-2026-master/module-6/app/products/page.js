"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const ProductPage = () => {
    const router = useRouter()
     const handleGoBack = ()=>{
        router.back()
    }

    const handleForward = ()=>{
        router.forward()
    }
  return (
    <div>
        <button onClick={handleGoBack}>Back</button>
        <button onClick={handleForward}>Forward</button>
    </div>
  )
 
}

export default ProductPage