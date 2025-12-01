import Link from 'next/link'
import React from 'react'

const SectionPage = () => {
  return (
    <div>
        <h1>Section</h1>
        <Link href={"/admin"}>Go to Admin</Link>
    </div>
  )
}

export default SectionPage