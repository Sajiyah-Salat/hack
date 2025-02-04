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
    <div className="h-screen flex p-6 gap-6">
      {/* Left Section: Profile Info */}
      <div className="w-1/3 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <div className="relative mb-2">
            <Image
              src="/john_doe.jpg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full"
            />

            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h2 className="text-xl font-semibold text-[#003366]">John Doe</h2>
          <p className="text-[#003366]">Emergency Response Coordinator</p>
          <p className="text-[#003366] mt-2">john.doe@example.com</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
            <Mail className="text-[#003366]" />
            <p className="text-[#003366]">john.doe@example.com</p>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
            <Phone className="text-[#003366]" />
            <p className="text-[#003366]">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
            <MapPin className="text-[#003366]" />
            <p className="text-[#003366]">New York, USA</p>
          </div>
        </div>
      </div>

      {/* Right Section: Settings */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-[#003366] mb-4">
            Notifications Settings
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" /> Email Notifications
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" /> SMS Alerts
            </label>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-[#003366] mb-4">
            Security Settings
          </h3>
          <button className="px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-blue-700 transition">
            Change Password
          </button>
        </div>

        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-[#003366] mb-4">
            User Roles
          </h3>
          <p className="text-[#003366] mb-3">Current Role: Responder</p>
          <button className="px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-purple-700 transition">
            Request Role Change
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
