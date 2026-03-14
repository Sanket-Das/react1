import React from "react";

function ContactPage() {
  return (
    <div>

      {/* CONTACT HERO */}
      <section className="relative h-[250px] w-full">

        <img
          src="/images/contact-bg.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex items-center h-full max-w-7xl mx-auto px-6 lg:px-20">
          <h1 className="text-white text-5xl font-semibold">
            Contact
          </h1>
        </div>

      </section>



      {/* CONSULTATION FORM */}
      <section className="bg-[#022c22] py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 lg:px-20 items-center">

          {/* LEFT FORM */}
          <div className="text-white">

            <h2 className="text-4xl font-bold mb-10 leading-tight">
              Get online <br /> consultation
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 text-sm">First Name*</label>
                <input
                  type="text"
                  className="w-full border border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Last Name*</label>
                <input
                  type="text"
                  className="w-full border border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Email address*</label>
                <input
                  type="email"
                  className="w-full border border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Specialist*</label>
                <select className="w-full border border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400">
                  <option>Choose a specialist</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm">Date*</label>
                <input
                  type="date"
                  className="w-full border border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Time*</label>
                <input
                  type="time"
                  className="w-full border border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400"
                />
              </div>

            </form>

            <button className="mt-10 bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-lg font-semibold transition">
              Make an appointment
            </button>

          </div>


          {/* RIGHT IMAGE */}
          <div className="hidden lg:block h-full">
            <img
              src="/images/office.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt="office"
            />
          </div>

        </div>

      </section>



      {/* OFFICE ADDRESS SECTION */}
      <section className="bg-teal-500 py-20 px-6 lg:px-24">

        <div className="max-w-7xl mx-auto text-white">

          {/* Pune Office */}
          <div className="grid md:grid-cols-3 gap-10 items-start">

            <h2 className="text-4xl font-semibold">
              Pune head office
            </h2>

            <p className="text-lg leading-relaxed">
              3502 Marcus Street Geraldine <br />
              Zip code 35974
            </p>

            <p className="text-lg leading-relaxed">
              headoffice@endeavor.com <br />
              Call: <span className="font-semibold">731-621-5503</span>
            </p>

          </div>

          <div className="border-t border-white/40 my-12"></div>

          {/* Bengaluru Office */}
          <div className="grid md:grid-cols-3 gap-10 items-start">

            <h2 className="text-4xl font-semibold">
              Bengaluru office
            </h2>

            <p className="text-lg leading-relaxed">
              4292 Mapleview Drive Greenfield <br />
              Zip code 38230
            </p>

            <p className="text-lg leading-relaxed">
              office@endeavor.com <br />
              Call <span className="font-semibold">731-235-7993</span>
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ContactPage;