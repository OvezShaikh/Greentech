import React from 'react'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'

const ChangeParts = () => {
  return (
    <>
    <Navigation/>
    <div className='p-4'> 
       <p> <span className='text-red-600'> IMA-PG India Private Limited </span> has a team of engineers working on high end software’s dedicated to change parts designs. Special alloys are processed in captive state of art facility at three different locations. An In house quality control laboratory and a stringent protocol to try and test each change part we make ,on a battery of trial machines, ensures that the parts dispatched are fitted properly and give enhanced life.</p>
        <br/>
        <p>IMA-PG provides reliable feeding solution for all types products which are rigorously tested on test modules to ensure smooth and consistent feeding at recommended speeds.</p>
        <br/>
        <p>We have expertise in handling complex packaging materials and can handle difficult products.</p>
        <br/>
        <p>Go ahead and try our web enquiry facility.</p>
        <br/>
         <p> <span className='text-red-600'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg> Click here</span> for all your change parts requirements.</p>
         </div>
    <Footer/>
    </>
  )
}

export default ChangeParts