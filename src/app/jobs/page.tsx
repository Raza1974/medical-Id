import Image from "next/image";
import React from "react";

export default function Jobs() {
  return (
<main>    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
      <Image
        src="https://th.bing.com/th?id=OIP.ofzs2v8Oeo-I8wVfvlWWqQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
        alt="A representation of job opportunities" // Improved alt text
        width={288} // Set a width for the image
        height={216} // Set a height for the image
        className="rounded-lg" // Optional styling
        priority // Optimize loading for the initial render
      />
      <h1 className="mt-4 text-3xl font-bold text-white text-center">Local Government Department</h1> {/* Responsive text size */}
      <p className="mt-2 text-lg text-white text-center">
        This is a simple Next.js application with Tailwind CSS for styling and Geist UI for components.
      </p>
    </div>
    </main>
  );
}
