import React, { useState, useRef } from 'react';
import Navigation from '../Navbar/Navigation';
import Footer from '../Footer/Footer';
import UploadImage from './UploadImage';
import axios from 'axios';

const Dashboard = () => {

    const [selectedFile1, setSelectedFile1] = useState(null);
    const [previewImage1, setPreviewImage1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);
    const fileInputRef1 = useRef(null);
    const fileInputRef2 = useRef(null);

    const handleFileChange1 = (file) => {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage1(reader.result);
          };
          reader.readAsDataURL(file);
    
          setSelectedFile1(file);
        }
      };

      const handleFileChange2 = (file) => {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage2(reader.result);
          };
          reader.readAsDataURL(file);
    
          setSelectedFile2(file);
        }
      };

      const handleUpload1 = async () => {
        // Implement your upload logic for the first image
        if (selectedFile1) {
          const formData = new FormData();
          formData.append('image', selectedFile1);
    
          try {
            const response = await axios.post('YOUR_UPLOAD_ENDPOINT_1', formData);
            console.log('Upload successful for Image 1:', response.data);
            // Custom logic after uploading the first image
          } catch (error) {
            console.error('Upload failed for Image 1:', error.message);
          }
        }
      };
    

      const handleUpload2 = async () => {
        // Implement your upload logic for the second image
        if (selectedFile2) {
          const formData = new FormData();
          formData.append('image', selectedFile2);
    
          try {
            const response = await axios.post('YOUR_UPLOAD_ENDPOINT_2', formData);
            console.log('Upload successful for Image 2:', response.data);
            // Custom logic after uploading the second image
          } catch (error) {
            console.error('Upload failed for Image 2:', error.message);
          }
        }
      };

      const handleClickPreview1 = () => {
        // Trigger the file input when clicking on the preview
        fileInputRef1.current.click();
      };

      const handleClickPreview2 = () => {
        // Trigger the file input when clicking on the preview
        fileInputRef2.current.click();
      };

    return (
        <>
            <Navigation />
            <div className='flex justify-evenly flex-col'>
                <div className=" mx-auto m-8">
                    <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
                    <UploadImage
                    onFileChange={handleFileChange1}
                    previewImage={previewImage1}
                    selectedFile={selectedFile1}
                    onUpload={handleUpload1}
                    onClickPreview={handleClickPreview1}
                    ref={fileInputRef1}
                    label="Carousel" />
                </div>
                <div className=" mx-auto m-8">
                    <UploadImage 
                    onFileChange={handleFileChange2}
                    previewImage={previewImage2}
                    selectedFile={selectedFile2}
                    onUpload={handleUpload2}
                    onClickPreview={handleClickPreview2}
                    ref={fileInputRef2}
                    label="Cards"/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard