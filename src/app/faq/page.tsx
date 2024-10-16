import Link from 'next/link'; // Ensure you're importing the Link component
import Image from "next/image";
import React from "react";

export default function Faq() {
  return (
    <section className="flex items-center justify-center min-h-screen p-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h1>

        {/* FAQ Item */}
        <div className="mb-8 bounce-in-right">
          <div className="relative">
            <Image
              src="/image/health tips.jpg"      
              alt="Heart Health"
              width={600} // Set your desired width
              height={400} // Set your desired height
              className="object-cover w-full h-40 rounded-md shadow-md"
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold">Eat Healthy</h2>
          <p className="mb-4 text-gray-700">
            You can help prevent diseases by following a healthy lifestyle.
          </p>
          <Link href="/blogs/health-1">
            <button className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600" aria-label="Read more about healthy eating">
              Read More
            </button>
          </Link>
        </div>

        {/* Additional FAQ Item */}
        <div className="mb-8 bounce-in-right">
          <h2 className="mt-2 text-xl font-semibold">Stay Active</h2>
          <p className="mb-4 text-gray-700">
            Regular physical activity can improve your overall health and well-being.
          </p>
          <Link href="/blogs/health-2">
            <button className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600" aria-label="Read more about staying active">
              Read More
            </button>
          </Link>
        </div>

        {/* More FAQ items can be added here */}
      </div>
    </section>
  );
}
