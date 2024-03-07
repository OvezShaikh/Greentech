import React from 'react'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'

const AMC = () => {
    return (
        <>
        <Navigation/>
        <div className='p-4'> 
            <p>Systematic diagnostics and timely maintenance helps machines deliver a higher Operational equipment effectiveness. IMA-PG machines are known for reliable high quality output. We offer Annual Maintenance Contracts (AMCs) to obtain best throughput from the machines.</p>
            <br/>
            <p> Call our toll free<span className='text-red-600'> 1800-270-1187 (Domestic customer) </span>  or mail us at <span className='text-red-600'> service@imapg.com </span> for any query on AMC’s.</p>
            </div>
    <Footer/>
    </>
    )
}

export default AMC