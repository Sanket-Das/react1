import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CauseCard from "../components/CauseCard"

const causes = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Education for Everyone",
    description: "Helping children get access to proper education."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    title: "Cancer Treatment Fund",
    description: "Supporting children fighting cancer."
  },
  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Samantha_Ruth_Prabhu_2022.jpg",
    title: "Women Empowerment",
    description: "Supporting women through education programs."
  }
]

const CauseList = () => {
  return (
   <> 
    {/* <Header /> */}
    <div className="bg-green-400 min-h-screen text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Cause List
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {causes.map((cause) => (
          <CauseCard
            key={cause.id}
            image={cause.image}
            title={cause.title}
            description={cause.description}
          />
        ))}

      </div>

    </div>
    {/* <Footer /> */}
    </>
  )
}

export default CauseList