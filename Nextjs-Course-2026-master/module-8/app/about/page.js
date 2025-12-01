import React from 'react'


export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and mission.',
  openGraph: {
    title: 'About Us - My Company',
    description: 'Learn more about our company and mission.',
    images: ['/globe.svg'],
    url: 'http://localhost:3000/about',
  },
}

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Our company story...</p>
    </div>
  )
}

