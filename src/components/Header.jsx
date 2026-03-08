export default function Header() {
  return (
    <>
      <div className="bg-[#1AB7BA] dark:bg-primary text-white px-6 py-3 flex justify-between items-center text-sm font-medium">

        <nav className="flex gap-8 items-center">
          <a href="/" className="hover:opacity-80">Home</a>

          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 hover:opacity-80">
              Causes ▼
            </span>
          </div>

          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 hover:opacity-80">
              Events ▼
            </span>
          </div>

          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 hover:opacity-80">
              Blog ▼
            </span>
          </div>

          <a href="/contact" className="hover:opacity-80">Contact</a>
          <a href="/docs" className="hover:opacity-80">Documentation</a>
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
            src="https://endeavor-nextjs-pro.vercel.app/images/logo.svg"
            className="h-12"
            alt="logo"
          />

          <div>
            <h2 className="text-lg font-bold">ENDEAVOR</h2>
            <p className="text-xs text-gray-400">
              CHARITY FOUNDATION
            </p>
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
    </>
  );
}