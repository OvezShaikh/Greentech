import React from 'react'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'

const Policy = () => {
    return (
       
        <div>
             <Navigation/>
            <p className='py-2 m-3' >
            Our parent company, IMA S.p.A. is a world leader in the design and manufacture of automatic machines for the processing and packaging of pharmaceuticals, cosmetics, tea and coffee. It has made significant investment in R&D and has filed over 1,000 patents worldwide. Its product range caters to tea bagging and coffee pod machines, solid dose manufacturing, sterile processing equipment, liquid filling, freeze-drying, labeling, blistering, counting, tube filling, cartoning and end-of-line machines.
            <br/>
            To know more, kindly visit <span text-color='red-700'><a href='#'>  Website Link </a>   </span>
            </p> 
            <Footer/>
        </div>
    )
}

export default Policy
