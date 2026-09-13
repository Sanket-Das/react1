import React, { useState, useEffect } from "react";
const blogs = [
  {
    id: 1,
    title: "Bringing Clean Water to Rural Villages in Rajasthan",
    author: "Priya Sharma",
    date: "APR 15 2026",
    img: "https://pixabay.com/images/download/judam-boy-1006213_1920.jpg",
  },
  {
    id: 2,
    title: "Education for Underprivileged Children in Mumbai Slums",
    author: "Rahul Verma",
    date: "MAR 28 2026",
    img: "https://images.unsplash.com/photo-1628277612964-556f99127102?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Healthcare Camp Success in Backward Districts of Bihar",
    author: "Dr. Anjali Gupta",
    date: "MAR 10 2026",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Empowering Women Through Self-Help Groups in Tamil Nadu",
    author: "Lakshmi Narayanan",
    date: "FEB 22 2026",
    img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Tree Plantation Drive: Greening the Forests of Madhya Pradesh",
    author: "Vikram Singh",
    date: "FEB 05 2026",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Feeding the Hungry: Our Mid-Day Meal Initiative in UP",
    author: "Mohammad Ali",
    date: "JAN 18 2026",
    img: "https://images.unsplash.com/photo-1605433246452-82d9dc1a7a0b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    title: "Digital Literacy Program for Rural Schools in Karnataka",
    author: "Sunita Rao",
    date: "JAN 05 2026",
    img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    title: "Disaster Relief Efforts During Monsoon in Assam",
    author: "Rohit Das",
    date: "DEC 20 2025",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 9,
    title: "Building Homes for the Homeless in Delhi's JJ Colonies",
    author: "Arvind Kumar",
    date: "DEC 08 2025",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
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
      className={`transition-all duration-500 ease-out transform ${
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
            <div className="group bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 ease-out">
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300 ease-out"
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

                <button className="mt-4 text-emerald-400 font-medium flex items-center gap-1 group/btn transition-all duration-200 ease-out hover:text-emerald-300">
                  Read More 
                  <span className="transition-transform duration-200 ease-out group-hover/btn:translate-x-1">→</span>
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