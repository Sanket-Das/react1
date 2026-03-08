import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EventDetails() {
  return (
    <>
      <Header />

      <div className="bg-[#062c2c] min-h-screen text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Back Button */}
          <button className="mb-6 bg-teal-600 px-4 py-2 rounded-md text-sm hover:bg-teal-700">
            ← Go Back
          </button>

          {/* Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src="/event.jpg"
              alt="Fundraising Event"
              className="w-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">
            A Fundraising Gala for Education Equality and Access
          </h1>

          <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
            <span className="bg-gray-700 px-3 py-1 rounded">Education</span>
            <span>Jan 10, 2025</span>
          </div>

          {/* Raised / Goal */}
          <div className="flex gap-6 mb-10">
            <div className="border border-gray-600 rounded-lg p-4 w-40">
              <p className="text-gray-400 text-sm">Raised</p>
              <p className="text-xl font-semibold">$40,000</p>
            </div>

            <div className="border border-gray-600 rounded-lg p-4 w-40">
              <p className="text-gray-400 text-sm">Goal</p>
              <p className="text-xl font-semibold">$65,200</p>
            </div>
          </div>

          {/* Sections */}

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Donec hendrerit, dui quis ultricies eleifend, ipsum sapien
              auctor ligula, vitae interdum augue metus nec enim.
              Pellentesque mollis orci vitae augue dignissim nibh fermentum in.
              Cras eu ipsum eget ante ullamcorper ultrices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Impact of the cause
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Mauris eu sapien urna. Fusce ac lectus augue, non vestibulum
              felis. Fusce sollicitudin porta augue non porta. Vivamus
              ullamcorper tristique nisl, in mattis elit porta vitae.
              Curabitur auctor lectus non rhoncus dictum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              How your donations work
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Phasellus vitae tortor vitae neque auctor ornare a vitae dui.
              Donec facilisis ut odio a elementum. Sed tincidunt turpis
              convallis, egestas metus non, efficitur elit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Transparency and accountability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Nam malesuada ac mauris sed eleifend. Maecenas semper vulputate
              ligula. Nulla gravida ex in magna tristique, in mollis orci
              luctus.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2">Thank you</h2>
            <p className="text-gray-300 leading-relaxed">
              In efficitur facilisis porttitor. In turpis eros, ultrices ut
              nulla quis, finibus convallis ex.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}