import React from "react";
import { Link } from "react-router-dom";
import Navigation from '../Components/Navbar/Navigation';
import Footer from '../Components/Footer/Footer'



const PageNotFound = () => {
    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <h1 className="text-8xl font-bold">404</h1>
                <h2 className="font-normal">Oops ! Page Not Found</h2>
                <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Link to='/' className=""> Go Back
                </Link>
                </button>
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound