
export default function Card(props) {
    const { image, title, raised, goal, onDonate } = props;
    // const { cards } = props;

  return (

      <div className="bg-[#112424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <img
          src={image}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-4">
            {title}
          </h3>

          <div className="grid grid-cols-2 gap-4 border border-gray-600 rounded-lg p-3 mb-4">

            <div>
              <p className="text-gray-400 text-sm">Raised</p>
              <p className="text-teal-400 font-bold">{raised}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Goal</p>
              <p className="font-bold">{goal}</p>
            </div>

          </div>

          <button 
            onClick={onDonate}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
          >
            Donate now
          </button>

        </div>

      </div>
  );
}