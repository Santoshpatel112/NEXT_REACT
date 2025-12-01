import React from 'react'

const Page = ({params}) => {
    const {id , reviewId} = params
  return (
    <div>Page {id} {reviewId}</div>
  )
}

export default Page