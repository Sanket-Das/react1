const CauseCard = ({ image, title, description }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
      
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600">
          Donate Now
        </button>
      </div>

    </div>
  )
}

export default CauseCard