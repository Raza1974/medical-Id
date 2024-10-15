
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <img
        src="/image/contact.jpg"
        alt="Contact Us"
        className="w-1/6 h-auto mx-auto"  // Reduced width to 50% and auto height, centered
        
    
      />

      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-lg text-center mb-4">
        This is a simple Next.js application with Tailwind CSS for styling and Geist UI for components.
      </p>
      <div className="flex flex-col space-y-4">
        {/* WhatsApp Contact Option */}
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition"
        >
          Message us on WhatsApp
        </a>
        {/* Email Contact Option */}
        <a
          href="mailto:your-email@example.com?subject=Contact Us&body=Hello, I would like to get in touch."
          className="bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition"
        >
          Email us
        </a>
      </div>
      {/* Social Icons placed before the footer */}
      <div className="social-icons  space-x-7 py-3 bg-white">
        
          <a href="https://www.linkedin.com/feed/"
           title="LinkedIn" 
           target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-blue-700 text-3xl"></i>
          </a>
        
        
          <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-blue-500 text-3xl"></i>
          </a>
    
        
          <a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-pink-600 text-3xl"></i>
          </a>
  
      
          <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-blue-800 text-3xl"></i>
          </a>
    
          <a href="https://www.youtube.com" title="YouTube" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube text-red-600 text-3xl"></i>
          </a>
      </div>
    </div>
  );
}
