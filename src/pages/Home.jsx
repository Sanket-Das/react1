// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom'; // optional — remove if no routing

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header/>

      <main className="flex-1 py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Fast</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Powered by Vite + React for instant reloads and top performance.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Beautiful</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Responsive, modern design with smooth animations — zero effort.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              Ready to Grow
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Add routing, auth, APIs, dark mode — scales effortlessly.
            </p>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};