// src/pages/Events-details.jsx
import React from 'react';

export default function EventsDetails() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">


      {/* Hero Banner Section - Big image with overlay text */}
      <div className="relative h-[500px] md:h-[600px] bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-1c2a5f8b8f6f?auto=format&fit=crop&q=80')" }}>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Become a volunteer
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Join our mission to make a positive impact! As a volunteer, you'll work directly with communities, bring hope, and help create lasting change.
            </p>

            <button className="mt-10 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg px-10 py-4 rounded-lg transition">
              Donate now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left - Main Description */}
          <div className="md:col-span-8">
            <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
            <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300">
              <p>
                At Endeavor Charity Foundation, every volunteer plays a vital role in transforming lives. 
                Whether you're helping with medical crowdfunding, community events, or supporting causes close to your heart — your time and effort create real impact.
              </p>
              <p>
                This event brings together passionate individuals who want to contribute their skills, time, and energy to meaningful projects.
              </p>
            </div>
          </div>

          {/* Right - Event Info Card */}
          <div className="md:col-span-4">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg sticky top-8">
              <h3 className="text-2xl font-bold mb-6">Event Information</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                  <p className="font-semibold">March 28, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-semibold">New York, USA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Organized by</p>
                  <p className="font-semibold">Endeavor Charity Foundation</p>
                </div>
              </div>

              <button className="mt-10 w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-lg transition">
                Register as Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center text-white font-bold">E</div>
              <div className="font-bold text-xl">ENDEAVOR</div>
            </div>
            <p className="text-sm text-gray-400">Charity Foundation</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Endeavor Head Office</p>
            <p className="text-sm text-gray-400">134, Cornish Building, Some<br />Near by area, New York</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Causes</p>
            <p className="text-sm text-gray-400">Medical crowdfunding<br />Cancer Crowdfunding</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Other Links</p>
            <p className="text-sm text-gray-400">Get Involved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}