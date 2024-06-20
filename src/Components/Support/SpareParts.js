import React from 'react'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'

const SpareParts = () => {
  return (
    <>
    <Navigation/>
    <div className='p-4'>
        <p>Spares play a vital role in smooth functioning of machine and each machine is supplied with essential spare parts that can be purchased at package price. IMA-PG maintains a healthy inventory of standard spare parts to ensure quick delivery. To cater break down requirements of our customer and to ensure on time delivery, company stocks essential spare parts at various branch offices.</p>
        <br/>
        <p> IMA-PG maintains a healthy inventory of standard spare parts to ensure delivery within 48 hours for all regular models. Every machine can be supplied with a list of recommended spare parts that are vital and can be purchased at a package price. The company stocks essential spare parts at various branch offices in order to provide focused attention on break down requirements. IMA-PG also provides evaluation and refurbishment of old machines besides offering retrofits for improved performance. Customers can also send online enquiries for the spares by logging into our website.</p>
        <br/>
        <p> <span className='text-red-600'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg> Click here</span> for all your Spare parts requirements.</p>    
        </div>
    <Footer/>
    </>
  )
}

export default SpareParts