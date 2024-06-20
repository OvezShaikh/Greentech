import React, { useState,useRef } from 'react';
import axios from 'axios';

import { FaCloudUploadAlt } from "react-icons/fa";


const UploadImage = ({onFileChange, label, previewImage, selectedFile, onUpload,onClickPreview,ref }) => {
    // const [selectedFile, setSelectedFile] = useState(null);
    // const [previewImage, setPreviewImage] = useState(null);
    // const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        onFileChange(file);
      };
    

    // const handleClickPreview = () => {
    //     // Trigger the file input when clicking on the preview
    //     fileInputRef.current.click();
    //   };

    return (
        <>  
                    <div className="flex items-center " id={label}>
                        {/* <label htmlFor="imageInput" className="mr-2 font-bold cursor" >
                            Carausel Images:
                        </label> */}
                        <label htmlFor={`${label}-${previewImage}`} className="cursor-pointer text-black font-bold py-2 px-4">
                        {previewImage ? `Change ${label}` : `Select ${label}`} :
                    </label>
                        {previewImage ? (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="w-28 h-12 "
                                // onClick={onClickPreview}
                            />)
                        :(<p>Please upload image</p>)
                        }

                        {/* <label htmlFor="imageInput" className="cursor-pointer bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        {previewImage ? 'Change Image' : 'Select Image'}
                    </label> */}
                        <input
                            type="file"
                            id={`${label}-${previewImage}`}
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            ref={ref}
                        />
                    </div>



                    {/* <div className=''>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex"
                            onClick={onUpload}
                            disabled={!selectedFile}
                        >
                            <FaCloudUploadAlt className='m-1' />Upload {label}
                        </button>
                    </div> */}
        </>
    )
}

export default UploadImage