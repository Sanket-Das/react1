// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom'; // optional — remove if no routing

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">


      <main className="flex-1 py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Fast</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Powered by Vite + React for instant reloads and top performance.
            </p>
          </div>

          <div className="bg-[#083c38] p-8 rounded-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Become volunteer</h3>
            <p className="text-gray-400">
              Join us in making a difference in our community projects.
            </p>
          </div>

          <div className="bg-[#083c38] p-8 rounded-xl hover:scale-105 transition">
            <div className="text-5xl mb-4">🍲</div>
            <h3 className="text-xl font-semibold mb-2">Provide food supply</h3>
            <p className="text-gray-400">
              Donate food supplies to help families in need.
            </p>
          </div>

        </div>
      </main>

      {/* CAUSES SECTION */}

      <section className="py-20 bg-[#052522]">

  {/* Title */}
  <div className="text-center mb-14">
    <h2 className="text-3xl font-bold mb-3">
      Causes where need your help
    </h2>

    <p className="text-gray-400">
      Support healthcare, education, and hunger relief.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-10 px-10">

    {/* Card 1 */}
    <div className="bg-[#083c38] rounded-xl overflow-hidden
    transform transition-all duration-500
    hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/30">

      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
          className="h-56 w-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 transition-colors duration-300 hover:bg-[#0a4f4a]">
        <h3 className="font-semibold text-lg hover:text-teal-300 transition">
          Education equality and access
        </h3>
      </div>

    </div>


    {/* Card 2 */}
    <div className="bg-[#083c38] rounded-xl overflow-hidden
    transform transition-all duration-500
    hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/30">

      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581595219315-a187dd40c322"
          className="h-56 w-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 transition-colors duration-300 hover:bg-[#0a4f4a]">
        <h3 className="font-semibold text-lg hover:text-teal-300 transition">
          Cancer crowdfunding for child
        </h3>
      </div>

    </div>


    {/* Card 3 */}
    <div className="bg-[#083c38] rounded-xl overflow-hidden
    transform transition-all duration-500
    hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/30">

      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          className="h-56 w-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 transition-colors duration-300 hover:bg-[#0a4f4a]">
        <h3 className="font-semibold text-lg hover:text-teal-300 transition">
          Women education initiative
        </h3>
      </div>

    </div>

  </div>


  {/* Button */}
  <div className="text-center mt-12">

    <button
      className="bg-teal-500 px-8 py-3 rounded-lg font-semibold
      transition-all duration-300 transform
      hover:bg-teal-400 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/50"
    >
      View All Causes
    </button>

  </div>

</section>

      {/* NEWS SECTION */}

      <section className="py-20 text-center bg-gradient-to-b from-[#062f2c] to-[#021c1a]">

  {/* Title */}
  <h2 className="text-3xl font-bold mb-3 text-white">
    Top news summarized briefly
  </h2>

  <p className="text-gray-400 mb-14">
    Join us at local events to make a difference.
  </p>


  <div className="grid md:grid-cols-3 gap-10 px-10">

    {/* Card 1 */}
    <div className="group bg-[#083c38] rounded-xl overflow-hidden 
    transform transition-all duration-500 
    hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/40">

      <div className="overflow-hidden relative">

        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>

      </div>

      <div className="p-6 text-left transition-colors duration-300 group-hover:bg-[#0a4f4a]">

        <h3 className="font-semibold text-lg text-white group-hover:text-teal-300 transition">
          Define each stage of work
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Learn how structured planning improves project success.
        </p>

        <span className="text-teal-400 text-sm mt-3 inline-block 
        transition transform group-hover:translate-x-2">
          Read more →
        </span>

      </div>

    </div>


    {/* Card 2 */}
    <div className="group bg-[#083c38] rounded-xl overflow-hidden 
    transform transition-all duration-500 
    hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/40">

      <div className="overflow-hidden relative">

        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>

      </div>

      <div className="p-6 text-left transition-colors duration-300 group-hover:bg-[#0a4f4a]">

        <h3 className="font-semibold text-lg text-white group-hover:text-teal-300 transition">
          Drive growth and achieve goals
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Strategies that help organizations grow effectively.
        </p>

        <span className="text-teal-400 text-sm mt-3 inline-block 
        transition transform group-hover:translate-x-2">
          Read more →
        </span>

      </div>

    </div>


    {/* Card 3 */}
    <div className="group bg-[#083c38] rounded-xl overflow-hidden 
    transform transition-all duration-500 
    hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/40">

      <div className="overflow-hidden relative">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>

      </div>

      <div className="p-6 text-left transition-colors duration-300 group-hover:bg-[#0a4f4a]">

        <h3 className="font-semibold text-lg text-white group-hover:text-teal-300 transition">
          The work is top notch
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Discover the impact of high quality teamwork.
        </p>

        <span className="text-teal-400 text-sm mt-3 inline-block 
        transition transform group-hover:translate-x-2">
          Read more →
        </span>

      </div>

    </div>

  </div>

</section>
      {/* NEWSLETTER + LATEST NEWS */}

      <section className="py-20 bg-[#052522]">

        <div className="grid md:grid-cols-2 gap-10 px-10">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Stay informed about new causes
            </h2>

            <p className="text-gray-400 mb-6">
              Subscribe to updates and stay connected.
            </p>

            <input
              placeholder="Your name"
              className="w-full p-3 mb-4 rounded bg-[#083c38]"
            />

            <input
              placeholder="Your email"
              className="w-full p-3 mb-4 rounded bg-[#083c38]"
            />

            <button className="bg-pink-500 w-full py-3 rounded">
              Subscribe
            </button>

          </div>

          <div>

            <h2 className="text-2xl font-semibold mb-6">
              Latest news at endeavor
            </h2>

            <div className="space-y-4">

              <div className="flex gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
                  className="w-20 h-20 object-cover rounded"
                />
                <p>The universe is all of time and space.</p>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  className="w-20 h-20 object-cover rounded"
                />
                <p>The work is top notch.</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Check what our donators are saying
        </h2>

        <div className="grid md:grid-cols-2 gap-10 px-10">

          <div className="bg-[#083c38] p-8 rounded-xl">

            <p className="text-gray-300">
              I'm honored to support child welfare and contribute
              to a better future for children.
            </p>

            <h4 className="mt-4 font-semibold">
              Michelle Anderson
            </h4>

          </div>

          <div className="bg-[#083c38] p-8 rounded-xl">

            <p className="text-gray-300">
              His donation supports cancer research and patient care.
            </p>

            <h4 className="mt-4 font-semibold">
              Michelle Anderson
            </h4>

          </div>

        </div>

      </section>


    </div>
  );
};

export default Home;