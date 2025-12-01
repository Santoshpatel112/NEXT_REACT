import React from 'react'
import Image from 'next/image'

const ExampleImage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image 
            src={"https://media.daily.dev/image/upload/s--mAplB3Xr--/f_auto/v1755881710/posts/NBiwRP07x?_a=BAMClqZW0"}
            alt={"Vercel Logo"}
            width={100}
            height={100}
        />
    </div>
  )
}

export default ExampleImage