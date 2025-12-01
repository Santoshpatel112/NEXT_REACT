import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link href={"/profile"}>Go to profile</Link>
    </div>
  )
}

export default DashboardPage