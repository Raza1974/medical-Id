
import Link from "next/link"

      
export default function header() {
    return (
      
        
    <header className="p-6 text-white bg-blue-600">
    <div className="container flex items-center justify-between mx-auto">
      <div className="flex items-center space-x-4">
      <img
      
      src="/image/profile2.jpg"
      alt="Profile Pic"
      width={82}
      className="border-2 border-white rounded-full"
    /> 


        <h1 className="text-2xl font-bold">Medical Branch</h1>
      </div>
      <nav>
        <ul className="flex justify-end gap-6 pr-10">
          <li>
            <Link href="/" className="transition duration-300 hover:text-yellow-300" aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="transition duration-300 hover:text-yellow-300" aria-label="About">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="transition duration-300 hover:text-yellow-300" aria-label="Blogs">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/medical" className="transition duration-300 hover:text-yellow-300" aria-label="Medical Reimbursement">
              Medical Reimbursement
            </Link>
          </li>
          <li>
            <Link href="/medical-info" className="transition duration-300 hover:text-yellow-300" aria-label="Medical Info">
              Medical Info
            </Link>
          </li>
          <li>
            <Link href="/health-blogs" className="transition duration-300 hover:text-yellow-300" aria-label="Health Blogs">
              Health Blogs
            </Link>
          </li>
          <li>
            <Link href="/faq" className="transition duration-300 hover:text-yellow-300" aria-label="FAQ">
              FAQ
            </Link>
          </li>
         
          
          
        </ul>
      </nav>
    </div>
  </header>
        
  
    
    )
    }
