import React from 'react'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'

const Training = () => {
  return (
    <>
    <Navigation/>
    <div className='p-4'> 
       <p> To support our customers achieve a high operational equipment efficiency (OEE) and maximum safety, we recommend technical training courses for our esteemed customers. Training courses can be organized at IMA-PG site or at the customer's location. Our training courses are tailor-made and modular, in order to fulfill specific customer needs. Special attention is given to the customized units fitted to the machine. The focus is on building hands-on capability to effective deal with any situations, which may arise during machine operation.</p> 
            <br/>
            
            <p> Contact <span className='text-red-600'> service@imapg.com  </span> for your training need.</p>
    
    </div>
    <Footer/>
    </>
  )
}

export default Training