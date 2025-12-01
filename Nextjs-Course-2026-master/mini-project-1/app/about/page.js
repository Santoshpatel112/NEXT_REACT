import React from 'react'


const AboutPage = () => {
  return (
   <div className='max-w-4xl mx-auto px-4 py-12'>
    <div className='text-center mb-12'>
    <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Us</h1>
    <p className='text-4xl text-gray-600'>Learn more about our story and what drives us forward</p>

    <div className='prose prose-lg mx-auto mt-5'>
      <div className='bg-white rounded-lg shadow-sm border p-8 mb-8 border-gray-200'>
      <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Our Story</h2>

      <p className='text-gray-600 mb-4'>
          Founded in 2026, MyWebsite started as a simple idea to create beautiful, functional websites that anyone can
            understand and maintain. We believe that great web development should be accessible to everyone.
      </p>
      <p className='text-gray-600'>
           Our team is passionate about clean code, modern design, and creating experiences that users love. We use the
            latest technologies like Next.js and Tailwind CSS to build fast, responsive websites.
      </p>
      </div>
    </div>

     <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To make web development simple, accessible, and enjoyable for developers of all skill levels while
              creating amazing user experiences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A world where anyone can create beautiful, functional websites without getting overwhelmed by complex
              tools and frameworks.
            </p>
          </div>
        </div>
    </div>
   </div>
  )
}

export default AboutPage