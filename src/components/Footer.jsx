import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Volunteer Section */}
      <section
        className="relative w-full h-[420px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/volunteer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become a volunteer
          </h2>

          <p className="text-gray-200 mb-8 leading-relaxed">
            Join our mission to make a positive impact! As a volunteer,
            you’ll work directly with communities, bring hope, and help
            create lasting change.
          </p>

          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-md font-semibold transition">
            Donate now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#052f2f] text-gray-300 pt-16">
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-500 flex items-center justify-center rounded-md text-white font-bold text-lg">
                E
              </div>

              <div>
                <h2 className="text-white font-semibold tracking-wide">
                  ENDEAVOR
                </h2>
                <p className="text-xs text-gray-400">CHARITY FOUNDATION</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              You can relay on our amazing features list and also our customer
              services will be great experience.
            </p>
          </div>

          {/* Head Office */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Endeavor Head Office
            </h3>

            <div className="flex gap-3 mb-4">
              <FaMapMarkerAlt className="mt-1 text-teal-400" />
              <p className="text-sm text-gray-400">
                134, Cornish Building, Some Near by area,
                New York, USA - 34556
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-teal-400" />
              <p className="text-sm">359 (0) 456 316</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400" />
              <p className="text-sm">info@endeavor.com</p>
            </div>
          </div>

          {/* Causes */}
          <div>
            <h3 className="text-white font-semibold mb-6">Causes</h3>

            <ul className="space-y-3">
              {[
                "Medical crowdfunding",
                "Cancer Crowdfunding",
                "Transplant Crowdfunding",
                "Education Crowdfunding",
                "Child Welfare",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:text-teal-400 cursor-pointer transition"
                >
                  <FaChevronRight className="text-xs" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Other Links</h3>

            <ul className="space-y-3">
              {["Causes", "Events", "Blogs", "Contact", "Error 404"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm hover:text-teal-400 cursor-pointer transition"
                  >
                    <FaChevronRight className="text-xs" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 text-center py-6 text-sm text-gray-400">
          © All Rights Reserved by GetNextjs Templates.
        </div>

      </footer>
    </>
  );
}