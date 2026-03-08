import React from "react";
import Footer from "../components/Footer";

const EventsList = () => {
  return (
    <>
      {/* HERO BACKGROUND SECTION */}

      <section
        className="h-[320px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593113630400-ea4288922497')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-5xl font-bold">
            Event List
          </h1>
        </div>
      </section>


      {/* EVENTS GRID SECTION */}

      <section className="bg-[#022c22] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-[#0b3d32] rounded-lg overflow-hidden hover:scale-105 transition duration-300">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded">
                  May 10, 2025
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-white text-lg font-semibold">
                  Literacy Escapade: Book Reading and Discussion
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  Business Park, Opp. Corn San Restaurant, New York
                </p>

              </div>

            </div>


            {/* CARD 2 */}
            <div className="bg-[#0b3d32] rounded-lg overflow-hidden hover:scale-105 transition duration-300">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497"
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded">
                  May 10, 2025
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-white text-lg font-semibold">
                  A Journey Through Time Historical Reenactment Fair
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  Business Park, Opp. Corn San Restaurant, New York
                </p>

              </div>

            </div>


            {/* CARD 3 */}
            <div className="bg-[#0b3d32] rounded-lg overflow-hidden hover:scale-105 transition duration-300">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded">
                  May 10, 2025
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-white text-lg font-semibold">
                  Charity Fundraising Festival
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  Business Park, Opp. Corn San Restaurant, New York
                </p>

              </div>

            </div>

            {/* CARD 4 */}
            <div className="bg-[#0b3d32] rounded-lg overflow-hidden hover:scale-105 transition duration-300">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded">
                  May 10, 2025
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-white text-lg font-semibold">
                  Charity Fundraising Festival
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  Business Park, Opp. Corn San Restaurant, New York
                </p>

              </div>

            </div>

            {/* CARD 5 */}
            <div className="bg-[#0b3d32] rounded-lg overflow-hidden hover:scale-105 transition duration-300">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded">
                  May 10, 2025
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-white text-lg font-semibold">
                  Charity Fundraising Festival
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  Business Park, Opp. Corn San Restaurant, New York
                </p>

              </div>

            </div>

            {/* CARD 6 */}
            <div className="bg-[#0b3d32] rounded-lg overflow-hidden hover:scale-105 transition duration-300">

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded">
                  May 10, 2025
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-white text-lg font-semibold">
                  Charity Fundraising Festival
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  Business Park, Opp. Corn San Restaurant, New York
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>
      {/* VOLUNTEER SECTION */}

      <section
        className="relative py-32 flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593113630400-ea4288922497')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-2xl text-white px-6">

          <h2 className="text-4xl font-bold mb-6">
            Become a volunteer
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Join our mission to make a positive impact! As a volunteer,
            you'll work directly with communities, bring hope, and help
            create lasting change.
          </p>

          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-lg font-semibold">
            Donate now
          </button>

        </div>

      </section>

<Footer />
    </>
  );
};

export default EventsList;