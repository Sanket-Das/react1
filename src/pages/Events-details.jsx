// src/pages/Events-details.jsx

import React from 'react';

export default function EventsDetails() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Hero / Banner */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Summer Music Festival 2025
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            August 15–17 • Open Air Arena, Bangalore
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left + center column – main info */}
          <div className="lg:col-span-2 space-y-12">

            {/* Main image / hero visual */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2340"
                alt="Festival crowd"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* About section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                About the Event
              </h2>
              <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  Three days of non-stop music, good vibes, street food, and unforgettable memories under the stars.
                </p>
                <p>
                  30+ artists across 4 stages • Indie, EDM, Hip-Hop, Folk & Fusion • Art installations • Food trucks • Silent disco zone after midnight.
                </p>
              </div>
            </section>

            {/* Lineup teaser */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                Featured Artists
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {['AnnenMayKantereit', 'Prateek Kuhad', 'Ritviz', 'When Chai Met Toast', 'Kavya', ' Divine'].map((name) => (
                  <div
                    key={name}
                    className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                      Artist photo
                    </div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right sidebar */}
          <div className="space-y-8 lg:sticky lg:top-8 lg:h-fit">

            {/* Ticket / Info card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>

              <dl className="space-y-5 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between">
                  <dt className="font-medium">Dates</dt>
                  <dd>15–17 August 2025</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Venue</dt>
                  <dd>Open Air Arena, Bangalore</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Gates open</dt>
                  <dd>3:00 PM</dd>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t dark:border-gray-700">
                  <dt>Early Bird</dt>
                  <dd className="text-green-600 dark:text-green-400">₹1,499</dd>
                </div>
              </dl>

              <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg">
                Get Tickets →
              </button>

              <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">
                Only ~420 early bird tickets remaining
              </p>
            </div>

            {/* Quick facts */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">30+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Artists</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">4</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stages</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">15k+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expected attendees</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">72h</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Non-stop music</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}