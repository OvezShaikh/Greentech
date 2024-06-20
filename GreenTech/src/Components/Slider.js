import React, { useEffect, useState } from 'react'
import { Carousel } from '@material-tailwind/react'
import axios from 'axios';
import BASE_URL from '../Constant';

const Slider = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/landing_page/image`)
      .then(response => {
        console.log('Response:', response.data);
        if (Array.isArray(response.data) && response.data.length > 0) {
         const newImages= response.data.map((item)=>{
            console.log('&&&&&&&&&&&&&&&&&',item.image)
            return `${BASE_URL}${item.image}`;
            // const newArray = images
            // newArray.push(imageUrl)
            // console.log('-----------',newArray)
            // setImages(newArray);
          })
          setImages(newImages);
        }
        else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <>
      {/* <Carousel>
      {media.map((item, index) => (
        <div key={index}>
          {item.type === 'image' && (
            <img
              src={item.url}
              alt={`image ${index + 1}`}
              className="h-screen w-full object-cover"
              style={{ maxHeight: "75vh" }}
            />
          )}
          {item.type === 'video' && (
            <video
              controls
              className="h-screen w-full object-cover"
              style={{ maxHeight: "75vh" }}
            >
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </Carousel> */}

      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >

        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`image ${index + 1}`}
            className="h-screen w-full object-cover"
            style={{ maxHeight: "75vh" }}
          />
        ))}
        {/* <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-screen w-full object-cover"
        style={{ maxHeight: "75vh" }}
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-screen w-full object-cover"
        style={{maxHeight:"75vh"}}
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-screen w-full object-cover"
        style={{maxHeight: "75vh"}}
      /> */}
      </Carousel>

    </>
  )
}
export default Slider