"use client"

import React, { useState } from 'react';
import { Map, AlertCircle, Phone, FileText, Users, Activity, Shield, Calendar } from 'lucide-react';


function page() {
    const [selectedEmergency, setSelectedEmergency] = useState(null);

    const emergencies = [
      {
        id: 1,
        title: "Flood Warning",
        location: "River Valley District",
        severity: "High",
        time: "10:30 AM",
        status: "Active",
        affected: "2,000+ residents",
      },
      {
        id: 2,
        title: "Fire Outbreak",
        location: "Industrial Zone B",
        severity: "Critical",
        time: "11:45 AM",
        status: "Active",
        affected: "Industrial complex",
      },
    ];
  
    const contacts = [
      { name: "Emergency Response Team A", number: "555-0123" },
      { name: "Medical Unit Central", number: "555-0124" },
      { name: "Fire Department HQ", number: "555-0125" },
    ];
  return (
<>
<div className="h-[100vh] bg-white">
      {/* Top Stats Bar */}
      <div className="bg-[#003366] text-white p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2 bg-white/10 p-3 rounded">
            <AlertCircle className="w-5 h-5" />
            <div>
              <div className="text-sm">Active Incidents</div>
              <div className="text-xl font-bold">5</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 p-3 rounded">
            <Users className="w-5 h-5" />
            <div>
              <div className="text-sm">Responders</div>
              <div className="text-xl font-bold">24</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 p-3 rounded">
            <Activity className="w-5 h-5" />
            <div>
              <div className="text-sm">Resources Active</div>
              <div className="text-xl font-bold">18</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 p-3 rounded">
            <Shield className="w-5 h-5" />
            <div>
              <div className="text-sm">Response Time</div>
              <div className="text-xl font-bold">8 min</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mt-10 h-[100vh] mx-auto p-6 grid grid-cols-12 gap-6">
        {/* Left Column - Live Updates */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#003366]">Live Updates</h2>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Live</span>
            </div>
            <div className="space-y-4">
              {emergencies.map((emergency) => (
                <div
                  key={emergency.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    selectedEmergency === emergency.id
                      ? 'bg-[#e1effd] border-l-4 border-[#003366]'
                      : 'bg-gray-50 hover:bg-[#e1effd]'
                  }`}
                  onClick={() => setSelectedEmergency(emergency.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-[#003366]">{emergency.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      emergency.severity === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {emergency.severity}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    <p>{emergency.location}</p>
                    <p className="text-xs mt-1">{emergency.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contacts */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-[#003366] mb-4">Emergency Contacts</h2>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-[#e1effd] rounded">
                  <div>
                    <p className="font-medium text-[#003366]">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.number}</p>
                  </div>
                  <Phone className="w-5 h-5 text-[#003366]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column - Map */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white p-4 rounded-lg shadow h-[600px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#003366]">Crisis Map</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-[#e1effd] text-[#003366] rounded">
                  Resources
                </button>
                <button className="px-3 py-1 text-sm bg-[#e1effd] text-[#003366] rounded">
                  Incidents
                </button>
              </div>
            </div>
            <div className="bg-gray-100 h-[calc(100%-2rem)] rounded flex items-center justify-center">
              <Map className="w-16 h-16 text-gray-400" />
              {/* Map would be integrated here */}
            </div>
          </div>
        </div>

        {/* Right Column - Reports & Resources */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-[#003366] mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-[#e1effd] text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
                <FileText className="w-5 h-5 mx-auto mb-2" />
                New Report
              </button>
              <button className="p-3 bg-[#e1effd] text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
                <AlertCircle className="w-5 h-5 mx-auto mb-2" />
                Alert Team
              </button>
              <button className="p-3 bg-[#e1effd] text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
                <Users className="w-5 h-5 mx-auto mb-2" />
                Deploy Unit
              </button>
              <button className="p-3 bg-[#e1effd] text-[#003366] rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
                <Calendar className="w-5 h-5 mx-auto mb-2" />
                Schedule
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-[#003366] mb-4">Recent Reports</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((report) => (
                <div key={report} className="p-3 bg-gray-50 rounded-lg hover:bg-[#e1effd] cursor-pointer">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-[#003366]">Situation Report #{report}</p>
                    <FileText className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Updated 30m ago</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default page
