export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      
        <img
          src="/image/about us.jpg"
          alt="About"
          className="w-1/6 h-auto mx-auto"  // Reduced width to 50% and auto height, centered
    
        />
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
          This is a simple Next.js application with Tailwind CSS for styling and Geist UI for components.
        </p>
      

      {/* Social Icons placed before the footer */}
      <div className="social-icons  space-x-7 py-3 bg-white">
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

     
    </div>
  );
}
