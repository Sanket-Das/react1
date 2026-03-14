/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
// import Blogs from './pages/Blogs';
import BlogsList from './pages/Blogs-list';
// import BlogsDetails from './pages/Blogs-details';
// import Causes from './pages/Causes';
import CausesList from './pages/Causes-list';
import CausesDetails from './pages/Causes-details';
// import Contact from './pages/Contact';
// import Events from './pages/Events';
import EventsList from './pages/Events-list';
import EventsDetails from './pages/Events-details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/blogs-list" element={<BlogsList />} />
        {/* <Route path="/blogs-details" element={<BlogsDetails />} /> */}
        {/* <Route path="/causes" element={<Causes />} /> */}
        <Route path="/causes-list" element={<CausesList />} />
        <Route path="/causes-details" element={<CausesDetails />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/events-list" element={<EventsList />} />
        <Route path="/events-details" element={<EventsDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App 