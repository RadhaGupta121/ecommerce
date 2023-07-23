import React, { useState, useEffect } from 'react';
import i1 from './img/img1.jpg';
import i2 from './img/img2.jpg';
import i3 from './img/img3.jpg';
import i4 from './img/img4.jpg';
import i5 from './img/img5.jpg';
import i6 from './img/img6.jpeg';
import i7 from './img/img7.jpeg';
import i8 from './img/img8.jpeg';
import All_nav from './All_nav';


const Home=()=>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [leftimage, setleftimage] = useState(0);
  const images = [i1, i2, i3,i4,i5];
  const leftimages = [i6, i5, i7,i1,i8];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setleftimage((prevIndex)=>
        prevIndex===leftimages.length-1?0:prevIndex+1
      );
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
    return(
        <>
       
        <div className="home" style={{height:"400px",marginTop:"0px",backgroundColor:"rgb(248, 189, 248)"}}>
        {/* <img  className="home_image" src={images[currentImageIndex]} alt="Slideshow" 
        style={{height:"300px",marginTop:"0px", width:"500px"}}/> */}
        <img src={images[currentImageIndex]} alt="Left Image" className="left-image" />
      <img src={leftimages[leftimage]} alt="Right Image" className="right-image" />
    
      
        </div>
       
        </>
    )
}
export default Home;