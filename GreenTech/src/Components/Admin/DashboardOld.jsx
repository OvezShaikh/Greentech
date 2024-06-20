import React, { useState, useRef } from 'react';
import axios from 'axios';
import Navigation from '../Navbar/Navigation';
import Footer from '../Footer/Footer';
import { FaCloudUploadAlt } from "react-icons/fa";


const Dashboard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Read the file and set a preview image
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        // Create a FormData object to append the file to the request
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            // Make a POST request to your server endpoint
            const response = await axios.post('http://192.168.1.47:8001/landing_page/image', formData);

            // Handle the server response (success or error)
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Upload failed:', error.message);
        }
    };

    const handleClickPreview = () => {
        // Trigger the file input when clicking on the preview
        fileInputRef.current.click();
    };

    return (
        <>
            <Navigation />
            <div className='flex justify-evenly'>
                <div className=" mx-auto m-8">
                    <h1 className="text-3xl font-bold mb-4">Admin Page</h1>

                    <div className="flex items-center mb-4">
                        {/* <label htmlFor="imageInput" className="mr-2 font-bold cursor" >
                            Carausel Images:
                        </label> */}
                        <label htmlFor="imageInput" className="cursor-pointer text-black font-bold py-2 px-4">
                            {previewImage ? 'Change Image' : 'Select Image'}
                        </label>
                        {previewImage ? (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="w-28 h-12 mb-2"
                                onClick={handleClickPreview}
                            />
                        ) : (<p>Please upload image</p>)
                        }

                        {/* <label htmlFor="imageInput" className="cursor-pointer bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        {previewImage ? 'Change Image' : 'Select Image'}
                    </label> */}
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            ref={fileInputRef}
                        />
                    </div>

                    <div className=''>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex"
                            onClick={handleUpload}
                            disabled={!selectedFile}
                        >
                            <FaCloudUploadAlt className='m-1' />Upload Image
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard