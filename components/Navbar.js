import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faTimes,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="md:flex hidden justify-between items-center px-6 py-4 bg-white">
        <Link href="/home">
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
              className="px-4 py-2 text-[#003366] hover:text-blue-700 "
              aria-label="Dashboard"
            >
              Dashboard
            </button>
          </Link>

          <Link href="/incident-report">
            <button
              className="px-4 py-2 text-[#003366] hover:text-blue-700 "
              aria-label="Incident Reporting"
            >
              Incident Reporting
            </button>
          </Link>

          <Link href="/resource-management">
            <button
              className="px-4 py-2 text-[#003366] hover:text-blue-700 "
              aria-label="Resource Management"
            >
              Resource Management
            </button>
          </Link>

          <Link href="/communication-center">
            <button
              className="px-4 py-2 text-[#003366] hover:text-blue-700 "
              aria-label="Communication Center"
            >
              Communication Center
            </button>
          </Link>

          <div className="relative">
            <button
              className="flex items-center justify-center p-3 bg-[#003366] text-white rounded-full hover:bg-blue-700"
              aria-label="User Profile"
              onClick={() => setShowOverlay(!showOverlay)}
            >
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
            {showOverlay && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md p-2">
                <Link href="/profile">
                  <button className="w-full px-4 py-2 text-[#003366] hover:bg-gray-100 text-left">
                    View Profile
                  </button>
                </Link>
                <button
                  className="w-full px-4 py-2 text-[#003366] hover:bg-gray-100 text-left"
                  onClick={() => (window.location.href = "/")}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
