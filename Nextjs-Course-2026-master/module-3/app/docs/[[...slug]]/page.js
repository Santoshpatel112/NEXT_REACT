import React from 'react'

const Page = ({params}) => {
  return (
    <div>
      <h1>Welcome to docs</h1>
        {params.slug?.join('/')}
    </div>
  )
}

export default Page