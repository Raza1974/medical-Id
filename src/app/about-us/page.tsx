

export default function Home() {
  return (
  
  <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">

      <div>
        <img
          src="/image/about us.jpg"
          alt="About"
          className="w-1/6 h-auto mx-auto"  // Reduced width to 50% and auto height, centered
        />
        <h1 className="text-2xl font-bold ">About Us</h1>
        <p className="text-lg mt- ">
          This is a simple Next.js application with Tailwind CSS for styling and Geist UI for components.
        </p>
        </div>
        <div className="flex flex-col space-y-4">
       
     
      
     
      </div>

    </div>
  );
}
