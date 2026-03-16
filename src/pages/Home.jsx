/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import slide1 from "../assets/african1.jpg";
import slide2 from "../assets/african2.jpg";
import women from "../assets/women.jpg";
import images from "../assets/images.jpg";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import cause1 from "../assets/cause1.jpg";
import cause2 from "../assets/cause2.jpg";
import cause3 from "../assets/cause3.jpg";
// import { useState, useEffect } from "react";
import donateBg from "../assets/donate.jpg";


import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";

export default function Home() {

  const slides = [
    {
      image: slide1,
      title: "Helping African Mothers",
      raised: "$70000",
      goal: "$95000"
    },
    {
      image: slide2,
      title: "Lending a Hand to African Moms",
      raised: "$65360",
      goal: "$90000"
    }
  ];

  const [current, setCurrent] = useState(0);

  /* Auto slide every 3 seconds */
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);
  
  const [show, setShow] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShow(true);
  }, 300);

  return () => clearTimeout(timer);
}, []);

function TestimonialSlider(){

const testimonials = [

{
name:"Michelle Anderson",
role:"CEO, Theme Designer",
image:person1,
text:"His generous donation supports cancer research and patient care, making a meaningful impact in the fight against cancer."
},

{
name:"Nilmark Smith",
role:"Manager, Theme Designer",
image:person2,
text:"I'm honored to support child welfare and contribute to a better future for children. Every child deserves the chance to thrive."
},

{
name:"Sharan Shah",
role:"Manager, Theme Designer",
image:person3,
text:"Supporting this initiative has been one of the most fulfilling experiences."
},

{
name:"Michelle Anderson",
role:"CEO, Theme Designer",
image:person4,
text:"Every donation creates hope and opportunity for children."
}

]

const [index,setIndex] = useState(0)

return(

<div>

<div className="grid md:grid-cols-2 gap-10">

{testimonials.slice(index,index+2).map((item,i)=>(

<div
key={i}
className="bg-[#112424] p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300"
>

<div className="flex items-center gap-4 mb-4">

<img
src={item.image}
className="w-12 h-12 rounded-full"
/>

<span className="bg-teal-400 text-black px-4 py-1 rounded">
{item.name}
</span>

</div>

<p className="text-gray-300 mb-6">
{item.text}
</p>

<p className="text-gray-400 text-sm">
{item.role}
</p>

</div>

))}

</div>

<div className="flex justify-center gap-3 mt-10">

{[0,1,2].map((i)=>(

<button
key={i}
onClick={()=>setIndex(i)}
className={`w-3 h-3 rounded-full ${
index===i ? "bg-teal-400 scale-125" : "bg-gray-500"
}`}
></button>

))}

</div>

</div>

)

}

  return (

    

    <>
      {/* HERO SECTION */}

      <section className="relative w-full h-[85vh] overflow-hidden">

        <div
          className="w-full h-full bg-cover bg-center flex items-center pl-20 transition-all duration-700"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >

          <div className="bg-black/70 text-white p-8 rounded-xl w-[350px] shadow-lg">

            <span className="bg-teal-400 text-black text-xs px-3 py-1 rounded-full">
              Featured
            </span>

            <h1 className="text-3xl font-bold mt-3">
              {slides[current].title}
            </h1>

            <p className="text-gray-300 text-sm mt-2">
              You can support us by donating, volunteering your time.
              Every effort makes a difference!
            </p>

            <div className="flex justify-between mt-6">

              <div>
                <p className="text-xs text-gray-400">Raised</p>
                <h3 className="text-teal-400 text-xl font-bold">
                  {slides[current].raised}
                </h3>
              </div>

              <div>
                <p className="text-xs text-gray-400">Goal</p>
                <h3 className="text-white text-xl font-bold">
                  {slides[current].goal}
                </h3>
              </div>

            </div>

            <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 p-3 rounded-lg font-semibold">
              Donate now
            </button>

          </div>

        </div>

        {/* Slider Dots */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">

          {slides.map((_, index) => (

            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index
                  ? "bg-teal-400 scale-125"
                  : "bg-gray-500"
              }`}
            />

          ))}

        </div>

      </section>


      {/* HOW CAN YOU HELP US */}

      <section className="bg-[#0b1c1c] text-white py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How can you help us?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-16">
            You can support us by donating, volunteering your time, or
            providing food supplies. Every effort makes a difference!
          </p>

          <div className="grid md:grid-cols-3 gap-12">

            {/* Donation */}

            <div className="flex flex-col items-center">

              <div className="text-5xl mb-4">💰</div>

              <h3 className="text-xl font-semibold mb-3">
                Give donation
              </h3>

              <p className="text-gray-400 text-sm max-w-xs">
                Your donation supports essential programs and helps
                communities in need. Every contribution makes a difference!
              </p>

            </div>


            {/* Volunteer */}

            <div className="flex flex-col items-center">

              <div className="text-5xl mb-4">🤝</div>

              <h3 className="text-xl font-semibold mb-3">
                Become volunteer
              </h3>

              <p className="text-gray-400 text-sm max-w-xs">
                Join us in making a difference! Volunteer and be a part
                of our community projects—every effort matters!
              </p>

            </div>


            {/* Food */}

            <div className="flex flex-col items-center">

              <div className="text-5xl mb-4">🌱</div>

              <h3 className="text-xl font-semibold mb-3">
                Provide food supply
              </h3>

              <p className="text-gray-400 text-sm max-w-xs">
                Donate food supplies to help us combat hunger and
                support families in need. Every contribution counts!
              </p>

            </div>

          </div>

        </div>

      </section>
      
      {/* CAUSES SECTION */}

{/* CAUSES SECTION */}

<section className="bg-[#0b1c1c] text-white py-20 px-6">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Causes where need your help
    </h2>

    <p className="text-gray-300 max-w-2xl mx-auto mb-16">
      Support essential causes like healthcare, education, hunger relief,
      and empowering vulnerable communities. Together, we can create lasting change!
    </p>


    {/* CARDS */}

    <div className="grid md:grid-cols-3 gap-10 text-left">


      {/* CARD 1 */}

      <div className="bg-[#112424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <img
          src={cause1}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-4">
            A Fundraising Gala for Education Equality and Access
          </h3>

          <div className="grid grid-cols-2 gap-4 border border-gray-600 rounded-lg p-3">

            <div>
              <p className="text-gray-400 text-sm">Raised</p>
              <p className="text-teal-400 font-bold">$40,000</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Goal</p>
              <p className="font-bold">$65,200</p>
            </div>

          </div>

        </div>

      </div>



      {/* CARD 2 */}

      <div className="bg-[#112424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <img
          src={cause2}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-4">
            Cancer Crowdfunding for little champ
          </h3>

          <div className="grid grid-cols-2 gap-4 border border-gray-600 rounded-lg p-3">

            <div>
              <p className="text-gray-400 text-sm">Raised</p>
              <p className="text-teal-400 font-bold">$62,000</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Goal</p>
              <p className="font-bold">$65,200</p>
            </div>

          </div>

        </div>

      </div>



      {/* CARD 3 */}

      <div className="bg-[#112424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <img
          src={cause3}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-4">
            Empowering Women and Girls Through Education Initiatives
          </h3>

          <div className="grid grid-cols-2 gap-4 border border-gray-600 rounded-lg p-3">

            <div>
              <p className="text-gray-400 text-sm">Raised</p>
              <p className="text-teal-400 font-bold">$80,000</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Goal</p>
              <p className="font-bold">$85,000</p>
            </div>

          </div>

        </div>

      </div>

    </div>



    {/* BUTTON */}

    <div className="mt-14">

      <button className="mx-auto block bg-gradient-to-r from-teal-400 to-cyan-400 px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition duration-300">

        View All Causes

      </button>

    </div>

  </div>

</section>

{/* TOP NEWS SECTION */}

<section className="bg-[#0b1c1c] text-white py-20 px-6">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Top news summarized briefly
    </h2>

    <p className="text-gray-300 max-w-2xl mx-auto mb-14">
      Join us at local events to make a difference! Connect, volunteer,
      and support our mission in your community.
    </p>


    {/* NEWS CARDS */}

    <div className="grid md:grid-cols-3 gap-8 text-left">


      {/* CARD 1 */}

      <div className="bg-[#112424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <div className="relative">

          <img
            src={news1}
            className="w-full h-52 object-cover"
          />

          <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs px-3 py-1 rounded">
            May 10, 2025
          </span>

        </div>

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-2">
            Define each stage of work to see whats important for you
          </h3>

          <p className="text-gray-400 text-sm">
            Outline each stage of work to identify what matters most to you.
          </p>

        </div>

      </div>



      {/* CARD 2 */}

      <div className="bg-[#112424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <div className="relative">

          <img
            src={news2}
            className="w-full h-52 object-cover"
          />

          <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs px-3 py-1 rounded">
            May 10, 2025
          </span>

        </div>

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-2">
            Drive growth and achieve your business objectives effectively
          </h3>

          <p className="text-gray-400 text-sm">
            Accelerate growth and successfully achieve your business goals.
          </p>

        </div>

      </div>



      {/* CARD 3 */}

      <div className="bg-[#112424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <div className="relative">

          <img
            src={news3}
            className="w-full h-52 object-cover"
          />

          <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs px-3 py-1 rounded">
            May 10, 2025
          </span>

        </div>

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-2">
            The work is top-notch and I consistently outrank all my competitors
          </h3>

          <p className="text-gray-400 text-sm">
            The work is exceptional and I consistently outperform competitors.
          </p>

        </div>

      </div>

    </div>



    {/* BUTTON */}

    <div className="w-full mt-12">

      <button className="block mx-auto bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300">

        View All News

      </button>

    </div>

  </div>

</section>
{/* DONATION BANNER */}

<section
  className="relative h-[420px] flex items-center justify-center bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: `url(${donateBg})` }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Animated Card */}
  <div
    className={`relative bg-[#112424] text-white max-w-xl p-10 rounded-xl shadow-xl
    transform transition-all duration-700 ease-out
    hover:scale-105
    ${show ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`}
  >

    <h2 className="text-3xl font-bold text-center mb-4">
      Child needs to go immediate medical surgery, Help.
    </h2>

    <p className="text-gray-300 text-sm text-center mb-6">
      A child needs immediate surgery. Your help can save a life.
      Please contribute to their urgent medical care.
    </p>

    <div className="flex justify-center">

      <button className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition duration-300 hover:scale-110 hover:shadow-teal-400/50">

        Urgent donate

      </button>

    </div>

  </div>

</section>

{/* NEWSLETTER + LATEST NEWS */}

<section className="bg-[#0b1c1c] text-white py-20 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE - NEWSLETTER */}

    <div>

      <p className="text-teal-400 mb-2 font-semibold">
        Newsletter
      </p>

      <h2 className="text-3xl font-bold mb-6">
        Stay informed about new and upcoming causes
      </h2>

      <p className="text-gray-300 mb-8">
        Subscribe to our updates and stay connected with the latest
        causes and initiatives. Be among the first to learn how you
        can make a difference in urgent and upcoming projects!
      </p>


      {/* FORM */}

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Your name"
          className="w-full p-4 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-teal-400 transition"
        />

        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-4 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-teal-400 transition"
        />

        <button className="w-full bg-gradient-to-r from-pink-500 to-red-400 py-4 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Subscribe
        </button>

      </div>

    </div>


    {/* RIGHT SIDE - LATEST NEWS */}

    <div>

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Latest news at endeavor
        </h2>

        <span className="text-pink-400 cursor-pointer hover:underline">
          View all
        </span>

      </div>


      {/* NEWS ITEMS */}

      <div className="space-y-6">


        {/* ITEM 1 */}

        <div className="flex gap-4 items-center hover:bg-[#112424] p-3 rounded-lg transition">

          <img
            src={news1}
            className="w-20 h-16 object-cover rounded"
          />

          <div>

            <h3 className="font-semibold">
              The Universe is all of time and space and its contents.
            </h3>

            <p className="text-gray-400 text-sm">
              Mark Freeman - May 1, 2025
            </p>

          </div>

        </div>


        {/* ITEM 2 */}

        <div className="flex gap-4 items-center hover:bg-[#112424] p-3 rounded-lg transition">

          <img
            src={news2}
            className="w-20 h-16 object-cover rounded"
          />

          <div>

            <h3 className="font-semibold">
              The work is top-notch and I consistently outrank all my...
            </h3>

            <p className="text-gray-400 text-sm">
              Mark Freeman - May 1, 2025
            </p>

          </div>

        </div>


        {/* ITEM 3 */}

        <div className="flex gap-4 items-center hover:bg-[#112424] p-3 rounded-lg transition">

          <img
            src={news3}
            className="w-20 h-16 object-cover rounded"
          />

          <div>

            <h3 className="font-semibold">
              Grow my business through organic search and marketing...
            </h3>

            <p className="text-gray-400 text-sm">
              Mark Freeman - May 1, 2025
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* TESTIMONIAL SECTION */}

<section className="bg-[#0b1c1c] text-white py-20 px-6">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Check what our donators are saying
    </h2>

    <p className="text-gray-300 max-w-2xl mx-auto mb-16">
      Discover heartfelt stories from our supporters who are helping us make a difference.
    </p>

    <TestimonialSlider />

  </div>

</section>


    </>
  );
}
