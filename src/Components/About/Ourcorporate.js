import React from 'react'
import Test_files from '../../Test_files'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'
const Details = [
  {
    Heading: "INTEGRITY ",
    Description: "We practice the highest ethical standards by doing the right thing & demonstrating sincerity and honesty in our behaviours & actions"
  },
  {
    Heading: "COMMITMENT ",
    Description: "We accept personal accountability for our actions & results and work smartly to consistently deliver on all agreed objectives."
  },
  {
    Heading: "TRANSPARENCY ",
    Description: "We communicate openly & honestly to establish clear accountability for identifying issues & solutions, making decisions & maximizing business opportunities."
  },
  {
    Heading: "PASSION FOR EXCELLENCE ",
    Description: "We realize the our best might not be good enough. We will thus do what is required to be the ‘best-in-class’.."
  },
  {
    Heading: "INNOVATION ",
    Description: "We anticipate market trends and proactively explore newer approaches & applications in the development of new ideas, products & services. We are committed to creating value for all our customers."
  },
  {
    Heading: "Collaborative ",
    Description: "Our approach is to engage & co-operatively work together to be a solution provider."
  },
  {
    Heading: "Reliability ",
    Description: "We ensure measurement of Sustainability for our products, process and services."
  },
  {
    Heading: "Empowerment ",
    Description: "We give freedom & power to our subordinates to enhance their efficiencies and effectiveness."
  },
  {
    Heading: "Respect ",
    Description: "We accept all, for who they are, even when they are different, to inculcate trust, safety & well being."
  }
]

const Ourcorporate = () => {
  return (
    <>
    <Navigation/>
      <div className='p-8 md:p-16 text-center bg-blue-gray-900'>
        <p className='text-white text-xl md:text-2xl lg:text-3xl'>
          <span className='text-green-500 tracking-normal'>IMA-PG India Private Limited </span> has been able to carve a niche in the Indian Pharma Machinery industry by focusing on engineering excellence and being customer-centric in its approach. Collaboration of PG with IMA SpA, was very strategic and brought about a new wave of diverse activities in its product offerings to the pharma machinery and packaging industry. This paved the path for the new era of machines with emphasis on automation complementing the existing range. Our core competencies include Blister packing machines, automatic cartoning machines, Tube filling machines, Tablet counting lines, case packers, end-of-line solutions, etc., with a capability of providing complete turnkey solutions by leveraging its wide offerings from India as well as IMA spa, Italy With a population in excess of 2300 machines all around the world, a global presence in over 70 countries, a workforce of 400+ highly skilled people, 3 manufacturing locations in India, IMA PG India Private Limited, is surely poised to spread its wings strong and high in the Packaging world.
        </p>
        <br />
        <p className='text-2xl md:text-3xl lg:text-4xl text-green-500 mt-6'>VISION</p>
        <p className='text-xl md:text-2xl text-green-500'>"To remain the most preferred end-to-end solution provider of automated and continuously innovative packaging solutions."</p>
        <br />
        <p className='text-2xl md:text-3xl lg:text-4xl text-green-500 mt-6'>MISSION</p>
        <p className='text-xl md:text-2xl text-green-500'>"We stand committed to developing and delivering innovative, cost-effective products & solutions with the help of a professional team that proactively and consistently meets our customer needs and creates a mutually beneficial engagement. Operational excellence, customer delight & building a great place to work are our goals."</p>
        <br />
        <p className='text-2xl md:text-3xl lg:text-4xl text-green-500 mt-6'>VALUES</p>
        <div className="flex flex-wrap justify-center -mx-2 text-center">
          {Details.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/3 lg:mx-2 mb-8">
              <div className="bg-blue-gray-900 border-gray-200 rounded-lg p-4">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 16.5h3M2 1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                </div>
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.Heading}
                </h5>
                <p className="mb-3 text-md md:text-lg text-green-500 dark:text-gray-400">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className='text-2xl md:text-3xl lg:text-4xl text-green-500 mt-6'>QUALITY POLICY</p>
        <p className='text-md md:text-lg text-green-500'>
          "IMA-PG endeavors to lead and deliver innovative, sustainable and value-added products and technical services by partnering with interested parties and serve its customers as the most preferred end-to-end solution provider of packaging machines. We will strive to continually improve our systems and processes to exceed in compliance with applicable requirements on time through Employee Empowerment."
        </p>
      </div>
      <Footer/>
      </>
  )
}

export default Ourcorporate
