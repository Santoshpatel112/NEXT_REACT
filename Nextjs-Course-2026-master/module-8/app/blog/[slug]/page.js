import React from 'react'

export async function generateMetadata({params}) {
    const {slug} = await params;

    const ogImageUrl = `http://localhost:3000/api/og?title=${encodeURIComponent(`Blog ${slug}`)}&description=${encodeURIComponent('This is a blog page')}`
  return {
    title: `Blog ${slug}`,
    description: 'This is a blog page',
    openGraph:{
      title: `Blog ${slug}`,
      description: 'This is a blog page',
      images: [
        {
          url: ogImageUrl,
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
        {
          url: ogImageUrl,
          width: 1800,
          height: 1600,
          alt: 'Og Image Alt',
        },
      ],
    }
  }
}

const Blog = async({params}) => {
    const {slug} = await params;
  return (
    <div>Blog {slug}</div>
  )
}

export default Blog