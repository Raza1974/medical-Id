import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* Image Section */}
      <Image
        src="/image/contact.jpg"
        alt="Contact Us"
        width={150}  // You may want to add width/height for optimization
        height={150}
        className="w-1/6 h-auto mx-auto"
      />
      
      {/* Contact Us Heading */}
      <h1 className="text-2xl font-bold mb-1">
        Contact Us <hr />
      </h1>
      
      {/* Office Details */}
      <p className="text-lg text-center mb-1">
        OFFICE OF THE TOWN MUNICIPAL CORPORATION (GADAP)
        <br />
        Main Super Highway, Damba Goth, Gadap Karachi
      </p>
      
      {/* WhatsApp & Email Links */}
      <div className="flex flex-col space-y-4">
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition"
        >
          Message us on WhatsApp
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Contact Me</h2>
        <form
          action="mailto:your-email@example.com"
          method="post"
          encType="multipart/form-data"
          className="flex flex-col space-y-4"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="p-2 border border-gray-300 rounded"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="p-2 border border-gray-300 rounded"
          />

          <label htmlFor="service">Service Needed:</label>
          <select id="service" name="service" required className="p-2 border border-gray-300 rounded">
            <option value="" disabled selected>Select a service</option>
            <option value="suggestion">Suggestion</option>
            <option value="complain-of-staff">Complain of Staff</option>
            <option value="reimbursement-update">Reimbursement Update</option>
            <option value="medicines-required">Medicines Required</option>
            <option value="emergency-camp">Emergency Camp</option>
            <option value="incharge-detail">Incharge Detail</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className="p-2 border border-gray-300 rounded"
          />

          <label htmlFor="resume">Attach Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx"
            className="p-2 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p><strong>Email:</strong> your-email@example.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> Your City, Your Country</p>
        <p>
          <strong>Google Map:</strong> <a href="https://www.google.com/maps/place/Gadap+Town+Office/@24.977919,67.2591313,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb349e012801351:0x3dcd4418c1a60c8d!8m2!3d24.977919!4d67.2617062!16s%2Fg%2F11cjj7k477?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Map</a>
        </p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </p>
      </div>

      {/* Social Icons Section */}
      <div className="social-icons flex justify-center space-x-7 py-3 bg-white mt-6">
        <a href="https://www.linkedin.com/in/rizviraza74/" title="LinkedIn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in text-blue-700 text-3xl"></i>
        </a>
        <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter text-blue-500 text-3xl"></i>
        </a>
        <a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram text-pink-600 text-3xl"></i>
        </a>
        <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f text-blue-800 text-3xl"></i>
        </a>
        <a href="https://www.youtube.com" title="YouTube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <i className="fab fa-youtube text-red-600 text-3xl"></i>
        </a>
      </div>
    </div>
  );
}
