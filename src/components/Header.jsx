import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-[#1AB7BA] text-white px-12 flex justify-between items-center text-sm font-medium">
          <nav className="flex gap-14 h-16 items-center">
            <Link to="/" className="ml-20 bg-black px-5 h-full flex items-center hover:opacity-80">
              Home
            </Link>

            <div className="group relative">
              <div className="flex items-center gap-1 hover:opacity-80 cursor-pointer">
                Causes ▼
              </div>

              <div className="absolute left-0 top-full pt-2 hidden group-hover:block transition-all duration-700">
                <div className="bg-black text-white rounded shadow-lg w-44">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        to="/causes-list"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Cause list
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/causes-details"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Cause details
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="flex items-center gap-1 hover:opacity-80 cursor-pointer">
                Events ▼
              </div>

              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="bg-black text-white rounded shadow-lg w-44">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        to="/events-list"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Event list
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/events-details"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Event details
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="flex items-center gap-1 hover:opacity-80 cursor-pointer">
                Blog ▼
              </div>

              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="bg-black text-white rounded shadow-lg w-44">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        to="/blogs-list"
                        className="block px-4 py-2 hover:bg-gray-700 transition"
                      >
                        Blog list
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/blogs-details"
                        className="block px-4 py-2 hover:bg-gray-700 transition"
                      >
                        Blog details
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link to="/contact" className="hover:opacity-80">
              Contact
            </Link>
            {/* <Link to="/docs" className="hover:opacity-80">
              Documentation
            </Link> */}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-1">☀️</button>

            <button className="bg-[#FF6D61] px-4 py-1.5 rounded-md text-xs uppercase tracking-wider hover:opacity-80">
              Sign In
            </button>

            <button className="bg-black px-4 py-1.5 rounded-md text-xs uppercase tracking-wider hover:opacity-80">
              Sign Up
            </button>
          </div>
        </div>

        <div className="bg-black text-white px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo/logo.svg"
              alt="logo"
              className="h-12"
            img/>

            <div>
              <h2 className="text-lg font-bold">ENDEAVOR</h2>
              <p className="text-xs text-gray-400">CHARITY FOUNDATION</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <p className="text-gray-400 text-xs">Email us at</p>
              <p className="font-semibold hover:text-[#2e5ab8]">
                info@endeavor.com
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-xs">Call us now</p>
              <p className="font-semibold hover:text-[#2e5ab8]">
                703 (123) 4567
              </p>
            </div>

            <button className="border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-500 hover:text-white transition">
              Donate now
            </button>
          </div>
        </div>
      </div>

      <div className="h-[120px]"></div>
    </>
  );
}
