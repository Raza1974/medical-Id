import Link from 'next/link'; // Ensure you're importing the Link component

export default function Faq() {
  return (
    <section className="flex items-center justify-center min-h-screen p-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
    <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 "></h1>
        
        <div className="mb-4 text-center childContainer bounce-in-right">
          <div className="imageContainer">
            <img
              src="/image/health tips.jpg"      
              alt="Heart Health"
              className="object-cover w-full h-40"
            
            />
          </div>
          <h2 className="text-xl font-semibold title">Eat Healthy</h2>
          <p className="description">
            You can help prevent  disease by following a Eat-healthy lifestyle.art.
          </p>
          <Link href="/blogs/health-1">
            <button className="px-4 py-2 text-white transition bg-blue-500 rounded readMore hover:bg-blue-600">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
