import React from 'react'
import Navigation from '@/components/navigation'
const AboutLayout = ({children}) => {
  return (
    <div>
         <Navigation/>
        {children}
    </div>
  )
}

export default AboutLayout