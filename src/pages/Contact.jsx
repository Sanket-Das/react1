import React from "react";

function ContactPage() {
  return (
    <div>

      {/* CONTACT SECTION WITH IMAGE */}
      <section className="bg-[#0b1c1c] text-white py-20 px-6 lg:px-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - CONTACT HEADER */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg">
              Get in touch with us and let's make a difference together. We're here to help and answer any questions you might have.
            </p>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1648572182183-17dc80760033?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

        </div>

      </section>



      {/* OFFICE ADDRESS SECTION */}
      <section className="bg-[#0b1c1c] py-20 px-6 lg:px-24">

        <div className="max-w-7xl mx-auto">

          {/* Pune Office */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 p-8 rounded-xl border border-teal-500/40">

            <h2 className="text-3xl lg:text-4xl font-bold text-teal-400">
              Agartala head office
            </h2>

            <p className="text-white text-lg leading-relaxed font-semibold">
              Joynagar,A.K Road <br />
              <span className="text-gray-300 text-base font-normal">pin code 799001</span>
            </p>

            <p className="text-white text-lg leading-relaxed font-semibold">
              headoffice@endeavor.com <br />
              <span className="text-teal-400 font-bold">9366467344</span>
            </p>

          </div>

          {/* Bengaluru Office */}
          <div className="grid md:grid-cols-3 gap-8 items-start bg-gradient-to-r from-cyan-500/20 to-teal-500/20 p-8 rounded-xl border border-cyan-500/40">

            <h2 className="text-3xl lg:text-4xl font-bold text-cyan-400">
              Kolkata office
            </h2>

            <p className="text-white text-lg leading-relaxed font-semibold">
              Near Salt Lake Stadium <br />
              <span className="text-gray-300 text-base font-normal">pin code 700064</span>
            </p>

            <p className="text-white text-lg leading-relaxed font-semibold">
              office@endeavor.com <br />
              <span className="text-cyan-400 font-bold">9366467344</span>
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ContactPage;