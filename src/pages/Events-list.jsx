import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const events = [
  {
    title: "Free Health Camp",
    date: "12 May 2026",
    location: "Kolkata",
    description: "Providing free checkups and medicines to underprivileged communities.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Tree Plantation Drive",
    date: "5 June 2026",
    location: "Mumbai",
    description: "Join us in planting trees to create a greener future.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Food Distribution",
    date: "20 May 2026",
    location: "Delhi",
    description: "Distributing meals to homeless and needy families.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Education Workshop",
    date: "18 June 2026",
    location: "Bangalore",
    description: "Workshops for children focusing on digital education.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          {event.date}
        </span>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="text-sm text-gray-500">📍 {event.location}</p>
        <p className="text-gray-600 text-sm mt-2">{event.description}</p>

        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
          Join Event
        </button>
      </div>
    </div>
  );
};

export default function EventsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-green-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Our Events</h1>
        <p className="mt-3">Participate and make a difference across India</p>
      </section>

      {/* Events Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </section>

      <Footer />
    </div>
  );
}