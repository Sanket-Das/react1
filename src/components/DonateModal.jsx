import { useState } from "react";

export default function DonateModal({ isOpen, onClose }) {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate donation submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setDonationAmount("");
      setDonorName("");
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#112424] text-white w-full max-w-md mx-4 p-6 rounded-2xl shadow-2xl transform transition-all scale-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Thank You!</h3>
            <p className="text-gray-300">Your donation has been received. God bless you!</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-2">Make a Donation</h2>
            <p className="text-gray-400 text-center mb-6 text-sm">
              Your generosity makes a difference in someone's life.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Select Amount</label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[100, 500, 1000, 5000].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`py-2 rounded-lg text-sm font-medium transition ${
                        donationAmount === amount 
                          ? "bg-teal-400 text-black" 
                          : "bg-[#1a3535] text-gray-300 hover:bg-[#234545]"
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Or enter custom amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#1a3535] border border-gray-600 focus:outline-none focus:border-teal-400 transition text-white"
                  min="1"
                />
              </div>

              {/* Donor Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-[#1a3535] border border-gray-600 focus:outline-none focus:border-teal-400 transition text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-[#1a3535] border border-gray-600 focus:outline-none focus:border-teal-400 transition text-white"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "card", label: "Card" },
                    { id: "upi", label: "UPI" },
                    { id: "netbanking", label: "Net Banking" }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`py-2 rounded-lg text-sm font-medium transition ${
                        paymentMethod === method.id 
                          ? "bg-teal-400 text-black" 
                          : "bg-[#1a3535] text-gray-300 hover:bg-[#234545]"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!donationAmount || !donorName || !email}
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-bold py-3 rounded-lg transition hover:scale-105 hover:shadow-teal-400/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Donate ₹{donationAmount || 0}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}