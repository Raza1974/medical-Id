// pages/index.js or pages/home.js
import Image from "next/image";
import Link from 'next/link';
import React from "react";

export default function Home() {
  return (
    <main className="mb-4 text-center childContainerInformation bounce-in-right">
      <div className="imageContainerInformation">
        <Image
          src="/image/medical.jpg"
          alt="Heart Health"
          width={600} // Specify the width
          height={400} // Specify the height
          className="object-cover w-full h-52"
        />
        <p>Office Superintendent</p>
        <h1>Town Municipal Corporation Gadap, District Malir Karachi</h1>
        
        <Link href="/blogs/health-1">
          <button className="px-1 py-1 text-white transition bg-blue-500 rounded readMore hover:bg-blue-600">
            Read More
          </button>
        </Link>
      </div>
    </main>
  );
}
