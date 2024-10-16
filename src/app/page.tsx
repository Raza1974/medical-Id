import React from 'react';
import Link from 'next/link'; // Ensure you're importing the Link component


export default function Home() {
  return (
     
    <div className="mb-4 text-center childContainerInformation bounce-in-right ">
   
   
      <div className="imageContainerInformation">
            <img
              src="/image/medical.jpg"      
              alt="Heart Health"
              className="object-cover w-full h-52"
            />
            <p> Office Superintendent </p>
      <h1> Town Municipal Corporation Gadap  District Malir Karachi  </h1>
      
          
   

          <Link href="/blogs/health-1">
            <button className="px-1 py-1 text-white transition bg-blue-500 rounded readMore hover:bg-blue-600">
              Read More
            </button>
          </Link>
        
        </div>
      
    </div>
  );
       
              
  }
  

