import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <nav>
        <Image 
          src="/image/about us.jpg"
          alt="About"
          width={150}   // Added width for next/image
          height={150}  // Added height for next/image
          className="w-1/6 h-auto mx-auto"  // Keeps responsive size
        />
        
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="text-lg mt-2 text-center">
          This is a simple Next.js application with Tailwind CSS for styling and Geist UI for components.
        </p>

        {/* Social Icons placed before the footer */}
        <div className="flex justify-center space-x-7 py-3 bg-white">
          <span>
            <a href="https://www.linkedin.com/feed/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-blue-700 text-3xl"></i>
            </a>
          </span>
          <span>
            <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-blue-500 text-3xl"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-pink-600 text-3xl"></i>
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-blue-800 text-3xl"></i>
            </a>
          </span>
          <span>
            <a href="https://www.youtube.com" title="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-red-600 text-3xl"></i>
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}
