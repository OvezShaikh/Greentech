import React from 'react'



const Footer = () => {
  return (
    <>
      <footer className='bg-green-500 py-8 '>
        <div className='container mx-auto flex flex-wrap xs:px-2'>
          {/* Logo */}
          {/* <div className='w-full md:w-1/5'>
            <div className='Logo'>
              <img src='../Logos/Logo.png' alt='Logo' className='mx-auto' />
            </div>
          </div> */}

          {/* About */}
          <div className='w-full md:w-1/5 mt-4 md:mt-0 '>
            <div className='About'>
              <span className='text-white font-bold text-3xl'>About us</span>
              <ul className='mt-2'>
                <li>
                  <a href='/ourCorporate' className='text-white '>
                    Our Corporate
                  </a>
                </li>
                <li>
                  <a href='/Policy' className='text-white'>
                    CRS Policy
                  </a>
                </li>
                <li>
                  <a href='/History' className='text-white'>
                    Our History
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Parent Company
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Products */}
          <div className='w-full md:w-1/5 mt-4 md:mt-0'>
            <div className='About'>
              <span className='text-white font-bold text-3xl'>Products</span>
              <ul className='mt-2'>
                <li>
                  <a href='#' className='text-white'>
                    Blister
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Tube Filling
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Counting
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Cartonning
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    End Of Line
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Pre Filled Syringes
                  </a>
                </li>
              </ul>
            </div>
          </div>


          {/* Solutions */}
          <div className='w-full md:w-1/5 mt-4 md:mt-0'>
            <div className='About'>
              <span className='text-white font-bold text-3xl'>Solutions</span>
              <ul className='mt-2'>
                <li>
                  <a href='#' className='text-white'>
                    Solid Dosage
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Injectibles
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Ointment
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white'>
                    Liquid
                  </a>
                </li>
              </ul>
            </div>
          </div>


          {/* Support */}
          <div className='w-full md:w-1/5 mt-4 md:mt-0'>
            <div className='About'>
              <span className='text-white font-bold text-3xl'>Support</span>
              <ul className='mt-2'>
                <li>
                  <a href='AfterSalesService' className='text-white'>
                    After Sale Service
                  </a>
                </li>
                <li>
                  <a href='Training' className='text-white'>
                    Training
                  </a>
                </li>
                <li>
                  <a href='ChangeParts' className='text-white'>
                    Change Parts
                  </a>
                </li>
                <li>
                  <a href='SpareParts' className='text-white'>
                    Spare Parts
                  </a>
                </li>
                <li>
                  <a href='Amc' className='text-white'>
                    AMC
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Links */}
          <div className='w-full md:w-1/5 mt-4 space-y-2 md:mt-0'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 48 48" id="facebook"><path fill="#1877F2" d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.9813 8.775 45.9094 20.25 47.7094V30.9375H14.1562V24H20.25V18.7125C20.25 12.6984 23.8313 9.375 29.3156 9.375C31.9406 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6594C28.6781 15.75 27.75 17.6016 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7094C39.225 45.9094 48 35.9813 48 24Z"></path><path fill="#fff" d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.6016 28.6781 15.75 31.6594 15.75H34.6875V9.84375C34.6875 9.84375 31.9406 9.375 29.3156 9.375C23.8313 9.375 20.25 12.6984 20.25 18.7125V24H14.1562V30.9375H20.25V47.7094C21.4734 47.9016 22.725 48 24 48C25.275 48 26.5266 47.9016 27.75 47.7094V30.9375H33.3422Z"></path></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 102 102"   id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865 101.639A34.341 34.341 0 0 1 14.312 99.5a19.329 19.329 0 0 1-7.154-4.653A19.181 19.181 0 0 1 2.5 87.694 34.341 34.341 0 0 1 .364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 0 1 2.5 14.312a19.4 19.4 0 0 1 4.654-7.158A19.206 19.206 0 0 1 14.309 2.5 34.341 34.341 0 0 1 25.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0 1 87.691 2.5a19.254 19.254 0 0 1 7.154 4.653 19.267 19.267 0 0 1 4.655 7.156 34.341 34.341 0 0 1 2.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 0 1-2.14 11.552A20.6 20.6 0 0 1 87.691 99.5a34.342 34.342 0 0 1-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865 101.639A34.341 34.341 0 0 1 14.312 99.5a19.329 19.329 0 0 1-7.154-4.653A19.181 19.181 0 0 1 2.5 87.694 34.341 34.341 0 0 1 .364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 0 1 2.5 14.312a19.4 19.4 0 0 1 4.654-7.158A19.206 19.206 0 0 1 14.309 2.5 34.341 34.341 0 0 1 25.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0 1 87.691 2.5a19.254 19.254 0 0 1 7.154 4.653 19.267 19.267 0 0 1 4.655 7.156 34.341 34.341 0 0 1 2.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 0 1-2.14 11.552A20.6 20.6 0 0 1 87.691 99.5a34.342 34.342 0 0 1-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M38.477 51.217a12.631 12.631 0 1 1 12.629 12.632 12.631 12.631 0 0 1-12.629-12.632m-6.829 0a19.458 19.458 0 1 0 19.458-19.458 19.457 19.457 0 0 0-19.458 19.458m35.139-20.229a4.547 4.547 0 1 0 4.549-4.545 4.549 4.549 0 0 0-4.547 4.545m-30.99 51.074a20.943 20.943 0 0 1-7.037-1.3 12.547 12.547 0 0 1-7.193-7.19 20.923 20.923 0 0 1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082 21.082 0 0 1 1.3-7.037 12.54 12.54 0 0 1 7.193-7.193 20.924 20.924 0 0 1 7.037-1.3c3.994-.184 5.194-.22 15.309-.22s11.316.039 15.314.221a21.082 21.082 0 0 1 7.037 1.3 12.541 12.541 0 0 1 7.193 7.193 20.926 20.926 0 0 1 1.3 7.037c.184 4 .22 5.194.22 15.314s-.037 11.316-.22 15.314a21.023 21.023 0 0 1-1.3 7.037 12.547 12.547 0 0 1-7.193 7.19 20.925 20.925 0 0 1-7.037 1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786 27.786 0 0 0-9.2 1.76 19.373 19.373 0 0 0-11.083 11.083 27.794 27.794 0 0 0-1.76 9.2c-.187 4.04-.229 5.332-.229 15.623s.043 11.582.229 15.623a27.793 27.793 0 0 0 1.76 9.2 19.374 19.374 0 0 0 11.083 11.083 27.813 27.813 0 0 0 9.2 1.76c4.042.184 5.332.229 15.623.229s11.582-.043 15.623-.229a27.8 27.8 0 0 0 9.2-1.76 19.374 19.374 0 0 0 11.083-11.083 27.716 27.716 0 0 0 1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786 27.786 0 0 0-1.76-9.2 19.379 19.379 0 0 0-11.08-11.083 27.748 27.748 0 0 0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18"></path></svg>

          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 28.87 28.87" id="linkedin"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg>



          </div>

          {/* Map */}
          <div className='w-full mt-4 '>
            <div className='Map'>
              <iframe
                title='Location Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27313.91640241993!2d73.90375886959743!3d18.471876327881052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea76f4fd68e3%3A0xcac9c2a9349894f8!2sRuby%20Hall%20Clinic%2C%20Wanowrie!5e0!3m2!1sen!2sin!4v1702019243337!5m2!1sen!2sin'
                className='w-full h-64'
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
