import React, { useState, useEffect } from "react";
const blogs = [
  {
    id: 1,
    title: "The Universe is all of time and space and its contents.",
    author: "Mark Freeman",
    date: "MAY 23 2025",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 2,
    title: "The work is top-notch and I consistently all my...",
    author: "Gairik Pal",
    date: "JUN 08 2025",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
  {
    id: 3,
    title: "Grow my business through organic search and marketing...",
    author: "Sam Altman",
    date: "JUL 12 2025",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    id: 4,
    title: "Tailored to your audience to enhance brand awareness...",
    author: "Harry Cook",
    date: "AUG 10 2025",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
  },
  {
    id: 5,
    title: "Undercover valuable insights for strategic business decisions...",
    author: "Adolf Williamson",
    date: "OCT 02 2025",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    id: 6,
    title: "Drive growth and achieve your business objectives effectively...",
    author: "Arther John",
    date: "DEC 01 2025",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    id: 7,
    title: "Free access to your global partner network and marketplace...",
    author: "Jos Taylor",
    date: "JAN 12 2026",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 8,
    title: "Define each stage of work to see whats important for you...",
    author: "Zayn Brook",
    date: "FEB 20 2026",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
  },
];
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {children}
    </div>
  );
};
function BlogList() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 370 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen bg-[#061a14]">
      {/* Page Title */}
      <div className="bg-cover bg-center py-18 mb-24" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643')",}}>
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-5xl font-mono font-bold text-white mb-3">Blog</h1>
            <p className="text-gray-300">Latest articles and updates</p>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <RevealOnScroll key={blog.id}> {/* Wrap the card here */}
            <div className="group bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500">
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6"> {/* I increased padding to p-6 for better spacing */}
                <p className="text-gray-400 text-sm mb-2">
                  {blog.author} • {blog.date}
                </p>

                <h2 className="text-white text-2xl font-semibold group-hover:text-emerald-400 transition">
                  {blog.title}
                </h2>

                <button className="mt-4 text-emerald-400 font-medium flex items-center gap-1 group/btn transition-all duration-300 hover:text-emerald-300">
                  Read More 
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        ))}
        <div className="h-10"></div>
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-green-500 text-white shadow-2xl 
          transition-all duration-50 ease-in-out transform animate-bounce
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
          hover:bg-blue-600 hover:scale-110 active:scale-95`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
export default BlogList;