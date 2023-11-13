import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontex'

const About = () => {
  const {myName} = useProductContext();
  const data = {
    name: "About Jewel Rana"
  }

  return (
    <div>
        <HeroSection myData={data}/>
        <h3>{myName}</h3>
    </div>
  )
}

export default About