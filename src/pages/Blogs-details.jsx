import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const blogs = [
  {
    title: "Impact of Community Service",
    author: "Admin",
    date: "15 April 2026",
    category: "Community",
    description: "Discover how community service transforms lives and builds stronger neighborhoods.",
    content: "Community service has always been at the heart of social change. When we come together to help those in need, we create ripples of positive change that extend far beyond the immediate assistance provided. This article explores the profound impact of community service on both recipients and volunteers alike. Through our various initiatives, we have witnessed firsthand how a single act of kindness can inspire dozens more, creating a cascade of generosity that strengthens entire communities.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Education for All: Our Mission",
    author: "Sarah Johnson",
    date: "10 April 2026",
    category: "Education",
    description: "Learn about our mission to provide quality education to every child.",
    content: "Education is the most powerful tool for breaking the cycle of poverty. We believe that every child deserves access to quality education, regardless of their socioeconomic background. Our mission is to bridge the gap between privileged and underprivileged children by providing educational resources, mentorship programs, and digital learning tools to those who need them most.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Healthcare Access in Rural Areas",
    author: "Dr. Amit Kumar",
    date: "5 April 2026",
    category: "Healthcare",
    description: "Understanding the challenges and solutions for rural healthcare.",
    content: "Rural healthcare remains one of the biggest challenges in our country. Lack of infrastructure, trained medical professionals, and awareness about health issues creates significant barriers for rural populations. Our organization is committed to organizing health camps, providing mobile medical units, and creating awareness about preventive healthcare in remote villages.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Environmental Initiatives 2026",
    author: "Green Team",
    date: "1 April 2026",
    category: "Environment",
    description: "Our commitment to a greener and sustainable future.",
    content: "As we face the pressing challenges of climate change, environmental conservation has become more important than ever. This year, we have launched several initiatives focused on tree plantation, waste management, and promoting sustainable practices. Join us in our mission to create a greener, cleaner, and more sustainable future for generations to come.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=60",
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {blog.category}
        </span>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{blog.title}</h2>
        <p className="text-sm text-gray-500">✍️ {blog.author} | 📅 {blog.date}</p>
        <p className="text-gray-600 text-sm mt-2">{blog.description}</p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default function BlogsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="mt-3">Stay updated with our latest stories and impact</p>
      </section>

      {/* Blogs Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </section>

      <Footer />
    </div>
  );
}