import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons' 

function Navbar() {
  return (
    <>
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white">
       <Link href='/home'>
       <div className="flex items-center">
          <Image
            src="/logo.png"  
            alt="CrisisCompass Logo"
            width={50}
            height={50}
            className="rounded-2xl "
          />
          <h1 className="text-[#003366] text-xl font-bold">CrisisCompass</h1>
        </div>
        
       </Link>
        {/* Navigation Links */}
        <div className="flex gap-4">
          <Link href="/dashboard">
            <button 
              className="px-4 py-2 text-[#003366] hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Dashboard"
            >
              Dashboard
            </button>
          </Link>
          
          <Link href="/incident-report">
            <button 
              className="px-4 py-2 text-[#003366] hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Incident Reporting"
            >
              Incident Reporting
            </button>
          </Link>
          
          <Link href="/resource-management">
            <button 
              className="px-4 py-2 text-[#003366] hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Resource Management"
            >
              Resource Management
            </button>
          </Link>
          
          <Link href="/communication-center">
            <button 
              className="px-4 py-2 text-[#003366] hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Communication Center"
            >
              Communication Center
            </button>
          </Link>

          {/* Icon Button */}
          <button 
            className="flex items-center justify-center p-3 bg-[#003366] text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="User Profile"
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
