import Link from 'next/link'; // Ensure you're importing the Link component


export default function Medical() {
  return (
    <div className="flex flex-col min-h-screen  ">
     
    Medical Brach  Gadap Town Municipal Corporatior
    
    <div className="mb-4 text-center childContainer bounce-in-right">
          <div className="imageContainerinformation">
            <img
              src="/image/medical branch.jpg"      
              alt="Heart Health"
              className="object-cover w-full h-40"
            />
          </div>
          <h2 className="text-xl font-semibold title">Seerve Pepoles</h2>
          <p className="description">
           We are Serving Pepole of live in the vicinity of  Gadap Town Municipal Corporation Distrist Mal;ir Karachi
          </p>
          <Link href="/blogs/health-1">
            <button className="px-4 py-2 text-white transition bg-blue-500 rounded readMore hover:bg-blue-600">
              Read More
            </button>
          </Link>
        </div>
      
    </div>
  );
}
