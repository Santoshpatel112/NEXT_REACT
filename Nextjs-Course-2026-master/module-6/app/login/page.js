"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter()
 
    const handleClick = ()=>{
        router.push("/products")
    }
    const handleGoBack = ()=>{
        router.back()
    }
 
    return (
    <div>
        <button onClick={handleClick}>Go to Products</button>
        <button onClick={handleGoBack}>Back</button>
    </div>
  )
}

export default Login