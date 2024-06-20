import React, { useEffect, useState } from 'react';
import Navigation from '../Navbar/Navigation';
import Footer from '../Footer/Footer';
import UploadImage from './UploadImage';
import axios from 'axios';
import { FaCloudUploadAlt } from "react-icons/fa";
// import { Select,Option } from '@material-tailwind/react';
import BASE_URL from '../../Constant';
// import { useParams } from 'react-router-dom';

const AdminDashboard = () => {
    // const {productId} = useParams();
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [previewImage1, setPreviewImage1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [previewImage3, setPreviewImage3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);
    const [previewImage4, setPreviewImage4] = useState(null);
    const [productTitle, setProductTitle] = useState('');
    const [cardTitle, setCardTitle] = useState('');
    const [productItemTitle, setProductItemTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] =useState('');
    const [productOptions, setProductOptions] = useState([]);
    const [broucher, setBroucher] = useState();
    const [productItemId, setProductItemId]= useState(null);
    // const [productID, setProductID] = useState(productId);
    // console.log(productOptions, "productsList")

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

    const handleFileChange3 = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage3(reader.result);
            };
            reader.readAsDataURL(file);

            setSelectedFile3(file);
        }
    };

    const handleFileChange4 = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage4(reader.result);
            };
            reader.readAsDataURL(file);

            setSelectedFile4(file);
        }
    };

    const handleUpload1 = async () => {
        // Implement your upload logic for the first image
        if (selectedFile1) {
            const formData = new FormData();
            formData.append('image', selectedFile1);

            try {
                const response = await axios.post(`${BASE_URL}/landing_page/image`, formData);
                console.log('Upload successful for Carousel:', response.data);
                // Custom logic after uploading the first image
                setSelectedFile1(null);
                setPreviewImage1(null);
            } catch (error) {
                console.error('Upload failed for Carousel:', error.message);
            }
        }
    };


    const handleAddCard = async () => {
        try {
            await handleUpload2();
        } catch (error) {
            console.error('Error adding cards images:', error);
        }
    };

    const handleUpload2 = async () => {
        // Implement your upload logic for the second image
        if (selectedFile2 && cardTitle) {
            const formData = new FormData();
            formData.append('image', selectedFile2);
            formData.append('title', cardTitle);

            try {
                const response = await axios.post(`${BASE_URL}/landing_page/category`, formData);
                console.log('Upload successful for cards images', response.data);
                // Custom logic after uploading the second image
                setSelectedFile2(null);
                setPreviewImage2(null);
                setCardTitle('');
            } catch (error) {
                console.error('Upload failed for Card:', error.message);
                // setSelectedFile2(null);
                // setCardTitle('');
            }
        } else {
            console.error('Missing required fields: image or title');
        }
    };


    const handleAddProduct = async () => {
        try {
            // Upload the second image
            await handleUpload3();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleUpload3 = async () => {
        // Implement your upload logic for the second image
        if (selectedFile3 && productTitle) {
            const formData = new FormData();
            formData.append('image', selectedFile3);
            formData.append('title', productTitle);

            try {
                const response = await axios.post(`${BASE_URL}/products/product`, formData);
                console.log('Product dataUploaded successfully :', response.data);
                // Custom logic after uploading the second image
                setSelectedFile3(null);
                setPreviewImage3(null);
                setProductTitle('');
            } catch (error) {
                console.error('Upload failed for Products:', error.message);
                // setSelectedFile3(null);
                // console.log(setSelectedFile3(null))
                // setProductTitle('');
            }
        } else {
            console.error('Missing required fields: image or title');
        }
    };

    // const handleAddProductItem = async () => {
    //     try {
    //         // Upload the second image
    //         await handleUpload4(productId);
    //         console.log(productId, "productId")
    //     } catch (error) {
    //         console.error('Error adding product:', error);
    //     }
    // };

    const handleUpload4 = async () => {
        console.log('image:', selectedFile4);
        console.log('title:', productItemTitle);
        console.log('description:', description);
        console.log('product:', selectedOption);
        // Implement your upload logic for the second image
        if (selectedFile4 && productItemTitle && description && selectedOption) {
            const formData = new FormData();
            formData.append('image', selectedFile4);
            formData.append('title', productItemTitle);
            formData.append('description', description);
            formData.append('product', selectedOption);
            console.log('Form Data:', formData);
            try {
                const response = await axios.post(`${BASE_URL}/products/productitem`, formData);
                console.log("Product Uploaded successfully",response.data)
                setProductItemId(response.data.id)
                setSelectedFile4(null);
                setPreviewImage4(null)
                setProductItemTitle('');
                setDescription('');
                setSelectedOption('');
            } catch (error) {
                console.error('Upload failed for Products:', error.message);
                // setSelectedFile4(null);
                // console.log(setSelectedFile4(null))
                // setProductItemTitle('');
            }
        } else {
            console.error('Missing required fields: image, title, description, or product');
        }
    };
   
    // useEffect(() => {
    //     // Update productID state when productId prop changes
    //     setProductID(productId);
    // }, [productId]);


    useEffect(()=>{
        fetchProductOptions();
    }, []);

    const fetchProductOptions =() =>{
        axios.get(`${BASE_URL}/products/productlist`).then(response=>{
            // console.log('API Response:', response.data);
            setProductOptions(response.data);
        })
        .catch(error=>{
            console.error('Error fetching product options:',error);
        });
    };

    // const handleChange = (value) => {
    //     console.log('Value1:',typeof value);
    //     setSelectedOption(value);
    //     console.log('Value2:',selectedOption);
    // };

    const handleChange = (event) => {
            const selectedValue = event.target.value;
            // console.log(event.target.value);
            // console.log(selectedValue, "selected Id") 
            // productOptions.filter()
            setSelectedOption(selectedValue); 
    };

    const handleAddProductItem = async () => {
        try {
            
            // Upload the second image
            await handleUpload4();
            // console.log(productId, "productId")
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleUpload5 = async () => {
        const formData = new FormData()
        formData.append('brochure',broucher) 
        console.log('Form Data:', formData);
        if (productItemId){
            formData.append('product_item', productItemId)
        }
        try {
            const response = await axios.post(`${BASE_URL}/products/productitembrochure`, formData);
            console.log("Broucher Uploaded successfully",response.data)
            setBroucher('');
        } catch (error) {
            console.error('Upload failed for Broucher:', error.message);
        }
    }

    // const handleAddBroucher = async () => {
    //     try {
            
    //         // Upload the second image
    //         await handleUpload5();
    //         // console.log(productId, "productId")
    //     } catch (error) {
    //         console.error('Error adding broucher:', error);
    //     }
    // };
    // function handleFile(event){
    //     setFile(event.target.files[0])
    //     console.log(event.target.files[0])
    // }
    // useEffect(() => {
    //     console.log('Value2:', selectedOption);
    // }, [selectedOption]);
    // const options = ['Blister','Tube Filling','Counting','Cartoning','End of Line','Pre Filled Syringes'];
    
    return (
        <>
            <Navigation />
            <div className=''>
                <div className="flex" >
                    {/* Sidebar */}
                    <div className="bg-green-500 text-white w-64 py-6 px-8">
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                        <ul className="mt-6">
                            <li className="py-2">Products</li>
                            <li className="py-2">Users</li>
                            <li className="py-2">Analytics</li>
                            <li className="py-2">Profile</li>
                            <li className="py-2">Settings</li>

                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-gray-100 p-10 pb-48">
                        <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard!</h2>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            {/* Cards */}
                            <div className="bg-white p-6 shadow-md rounded-lg">
                                <h1 className="text-3xl font-bold mx-auto m-8">Add Carousel Image </h1>
                                <div className=" mx-auto m-5">
                                    <UploadImage
                                        onFileChange={handleFileChange1}
                                        previewImage={previewImage1}
                                        selectedFile={selectedFile1}
                                        onUpload={handleUpload1}
                                        // onClickPreview={handleClickPreview1}
                                        // ref={fileInputRef1}
                                        label="Carousel" />
                                </div>
                                <div className=''>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded inline-flex cursor-pointer"
                                        onClick={handleUpload1}
                                        disabled={!selectedFile1}
                                    >
                                        <FaCloudUploadAlt className='m-1' />Add Carousel
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 shadow-md rounded-lg">
                                <h1 className="text-3xl font-bold mx-auto m-8">Add Card </h1>
                                <div className=" mx-auto m-4">
                                    <UploadImage
                                        onFileChange={handleFileChange2}
                                        previewImage={previewImage2}
                                        selectedFile={selectedFile2}
                                        onUpload={handleUpload2}
                                        // onClickPreview={handleClickPreview2}
                                        // ref={fileInputRef2}
                                        label="Cards" />
                                </div>
                                <div className=" flex items-center mb-4">
                                    <label htmlFor='title' className="text-black font-bold py-2 px-4">
                                        Add Title :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={cardTitle}
                                        onChange={(e) => setCardTitle(e.target.value)}
                                        className="border border-gray-400 px-2 py-1 rounded mt-2 block mx-4"
                                    />
                                </div>
                                <div className=''>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded inline-flex cursor-pointer"
                                        onClick={handleAddCard}
                                        disabled={!selectedFile2 || !cardTitle}
                                    >
                                        <FaCloudUploadAlt className='m-1' />Add Card
                                    </button>
                                </div>
                            </div>
                            <div className='bg-white p-6 shadow-md rounded-lg'>
                                <h1 className="text-3xl font-bold m-8 mx-auto">Add Product </h1>
                                <div className=" mx-auto m-4">
                                    <UploadImage
                                        onFileChange={handleFileChange3}
                                        previewImage={previewImage3}
                                        selectedFile={selectedFile3}
                                        onUpload={handleUpload3}
                                        label="Products" />
                                </div>
                                <div className=" flex items-center mb-4">
                                    <label htmlFor='title' className="text-black font-bold py-2 px-4">
                                        Add Title :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={productTitle}
                                        onChange={(e) => setProductTitle(e.target.value)}
                                        className="border border-gray-400 px-2 py-1 rounded mt-2 block mx-4"
                                    />
                                </div>
                                <div className=''>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded inline-flex mb-8 cursor-pointer"
                                        onClick={handleAddProduct}
                                        disabled={!selectedFile3 || !productTitle}
                                    >
                                        <FaCloudUploadAlt className='m-1' />Add Product
                                    </button>
                                </div>
                            </div>
                            <div className='bg-white p-6 shadow-md rounded-lg'>
                                <h1 className="text-3xl font-bold m-8 mx-auto">Add Product Item</h1>
                                <div className=" mx-auto m-4">
                                    <UploadImage
                                        onFileChange={handleFileChange4}
                                        previewImage={previewImage4}
                                        selectedFile={selectedFile4}
                                        onUpload={handleUpload4}
                                        label="ProductItem" />
                                </div>
                                <div className=" flex items-center mb-4">
                                    <label htmlFor='title' className="text-black font-bold py-2 px-4">
                                        Add Title :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={productItemTitle}
                                        onChange={(e) => setProductItemTitle(e.target.value)}
                                        className="border border-gray-400 px-2 py-1 rounded mt-2 block mx-4"
                                    />
                                </div>
                                <div className=" flex items-center mb-4">
                                    <label htmlFor='Description' className="text-black font-bold py-2 px-4">
                                        Add Description :
                                    </label>
                                    <textarea
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="border border-gray-400 px-2 py-1 rounded mt-2 block mx-4"
                                    />
                                </div>
                                <div className=" flex items-center mb-4">
                                    <label htmlFor='productItem' 
                                    className="text-black font-bold py-2 px-4">
                                        Add Item :
                                    </label>
                                    <div className="hs-dropdown relative inline-flex cursor-pointer mx-4">
                                        <select className='p-1 border-black' value={selectedOption} onChange={handleChange}>
                                         <option>Select Item</option>
                                         {productOptions.map((option, index)=>(
                                         <option key={option?.id} value={option?.id} >
                                            {option?.title}
                                            {/* {console.log(option?.id , "option")} */}
                                         </option>
                                         ))}
                                        </select>
                                    </div>
                                </div>
                                <div className=''>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded inline-flex mb-3 cursor-pointer"
                                        onClick={handleAddProductItem}
                                        disabled={!selectedFile4 || !productItemTitle || !description}
                                    >
                                        <FaCloudUploadAlt className='m-1' />Add Product Item
                                    </button>
                                </div>
                                
                                <div className=" flex items-center mb-4">
                                    <label htmlFor='broucher' className="text-black font-bold py-2 px-4">
                                        Add Broucher :
                                    </label>
                                    <input
                                        type="file"
                                        className='cursor-pointer'
                                        placeholder="Broucher"
                                        // value={file}
                                        onChange={(e) => setBroucher(e.target.files[0])}
                                        // className="border border-gray-400 px-2 py-1 rounded mt-2 block mx-4"
                                    />
                                </div>

                                <div className=''>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded inline-flex mb-8 cursor-pointer"
                                        onClick={handleUpload5}
                                        // disabled={!selectedFile4 || !productItemTitle || !description}
                                    >
                                        <FaCloudUploadAlt className='m-1' />Add Broucher
                                    </button>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminDashboard;

//option className="py-4 px-8 hover:bg-gray-200 hover:text-gray-900 text-lg"
//SelectclassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"