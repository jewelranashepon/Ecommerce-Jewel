import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import { GlobalStyle } from './GlobalStyle'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeatureProducts from './components/FeatureProducts'

const Home = () => {

  const data = {
    name: "Jewel Rana"
  }

  return (
    <>
     <HeroSection myData={data}/>
     <FeatureProducts/>
     <Services/>
     <Trusted/>
    </>
   
  )
}



export default Home