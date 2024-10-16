import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 sm:p-6 text-white bg-blue-300 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-5">
          <div className="border-2 border-white rounded-full sm:w-20">
            <Image
              src="/image/profile2.jpg"
              alt="Profile Pic"
              width={70}
              height={70} // Added height property
              className="rounded-full"
            />
          </div>
          <h1 className="text-lg sm:text-2xl font-bold">Medical Branch</h1>
        </div>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex flex-col sm:flex-row items-center sm:gap-8 gap-4">
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
              <Link href="/contact-us" className="transition duration-300 hover:text-yellow-300" aria-label="Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/medical" className="transition duration-300 hover:text-yellow-300" aria-label="Medical Reimbursement">
                Reimbursement
              </Link>
            </li>
            <li>
              <Link href="/medical-info" className="transition duration-300 hover:text-yellow-300" aria-label="Medical Info">
                Info
              </Link>
            </li>
            <li>
              <Link href="/health-blogs" className="transition duration-300 hover:text-yellow-300" aria-label="Health Blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition duration-300 hover:text-yellow-300" aria-label="FAQ">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="transition duration-300 hover:text-yellow-300" aria-label="Jobs">
                JOBS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
