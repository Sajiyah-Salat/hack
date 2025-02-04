"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Settings,
  Shield,
  LogOut,
  Users,
  Key,
  Menu,
} from "lucide-react";

function ProfilePage() {
  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-[#003366] text-white p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Menu</h2>
        </div>
        <nav className="space-y-4">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition">
            <User /> Profile
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition">
            <Settings /> Account Settings
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition">
            <Users /> Manage Roles
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition">
            <Key /> Customize Profile
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-700 transition">
            <LogOut /> Logout
          </button>
        </nav>
      </div>

      {/* Profile Content */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div className="flex flex-col items-center mb-4">
            <div className="relative mb-2">
              <Image
                src="https://www.wallofcelebrities.com/celebrity/john-doe/pictures/xxlarge/john-doe_862783.jpg"
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full border-4 border-[#003366]"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <h2 className="text-xl font-semibold text-[#003366]">John Doe</h2>
            <p className="text-gray-600">Emergency Response Coordinator</p>
            <p className="text-gray-700 mt-2">john.doe@example.com</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
              <Mail className="text-[#003366]" />
              <p className="text-gray-700">john.doe@example.com</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
              <Phone className="text-[#003366]" />
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
              <MapPin className="text-[#003366]" />
              <p className="text-gray-700">New York, USA</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center gap-3 p-3 bg-blue-100 text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition">
              <Settings /> Account Settings
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition">
              <Users /> Manage Roles
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-600 hover:text-white transition">
              <Key /> Customize Profile
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-600 hover:text-white transition">
              <LogOut /> Logout
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-4">
            Manage your account, set roles, and customize your profile for
            personalized access.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
