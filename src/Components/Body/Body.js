import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'
import Slider from '../Slider'
import Card2 from '../Products/Card2';
import { useAuth } from '../../context/auth';



const Body = () => {
  const [auth,setAuth] = useAuth();
  return (
    <>
    {/* <Navbar/> */}
    
    <Navigation/>
    {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
    <Slider/>
    <Card2/>
    <Footer/>
      
    </>
  )
}

export default Body
