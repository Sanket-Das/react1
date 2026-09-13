import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const causes = [
  {
    title: "Education for Every Child",
    location: "Rural West Bengal",
    description:
      "Providing free education, books, and digital access to underprivileged children.",
    goal: 500000,
    raised: 275000,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Clean Drinking Water",
    location: "Assam & North-East",
    description:
      "Installing water purification systems in villages lacking safe water.",
    goal: 300000,
    raised: 120000,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Women Skill Development",
    location: "Bihar",
    description:
      "Empowering women through training and self-employment opportunities.",
    goal: 400000,
    raised: 210000,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Healthcare for All",
    location: "Uttar Pradesh",
    description:
      "Organizing free medical camps and basic healthcare services.",
    goal: 350000,
    raised: 180000,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Food Distribution Drive",
    location: "Delhi Slums",
    description:
      "Providing daily meals to homeless and low-income families.",
    goal: 200000,
    raised: 95000,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Tree Plantation Campaign",
    location: "Maharashtra",
    description:
      "Planting trees to promote a greener and cleaner environment.",
    goal: 150000,
    raised: 60000,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
  },
];

const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className="bg-green-600 h-2 rounded-full transition-all duration-500"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const CauseCard = ({ cause }) => {
  const percent = Math.round((cause.raised / cause.goal) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={cause.image}
        alt={cause.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{cause.title}</h2>
        <p className="text-sm text-gray-500 mb-2">📍 {cause.location}</p>
        <p className="text-gray-600 text-sm mb-4">{cause.description}</p>

        <ProgressBar value={percent} />

        <div className="flex justify-between text-sm mt-2">
          <span className="font-medium">₹{cause.raised.toLocaleString()}</span>
          <span className="text-gray-500">Goal ₹{cause.goal.toLocaleString()}</span>
        </div>

        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default function CausePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative bg-green-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Support a Cause Across India
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Every contribution helps us create better education, health, and
          livelihood opportunities.
        </p>
      </section>

      {/* Causes */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {causes.map((cause, index) => (
          <CauseCard key={index} cause={cause} />
        ))}
      </section>

      {/* Impact Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-green-700">10K+</h3>
            <p className="text-gray-600 mt-2">Lives Impacted</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-700">50+</h3>
            <p className="text-gray-600 mt-2">Active Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-700">20+</h3>
            <p className="text-gray-600 mt-2">States Reached</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-2xl font-semibold">Be a Part of the Change</h2>
        <p className="text-gray-600 mt-2">
          Join hands with us to build a better India.
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700">
          Start Donating
        </button>
      </section>

      <Footer />
    </div>
  );
}
