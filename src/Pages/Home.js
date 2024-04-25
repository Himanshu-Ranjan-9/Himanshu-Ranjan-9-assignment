import React from 'react'
import Navigationbar from '../Components/Navigationbar'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Carousel from '../Components/Carousel'
import BodyContainer from '../Components/BodyContainer'

function Home() {
  return (
    <>
   
    <Navigationbar/>
    <Carousel/>
    {/* <SignIn/> */}
    <BodyContainer/>
      
    </>
  )
}

export default Home
