export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="flex-1 py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We are dedicated to making a positive impact in our community through various charitable initiatives and events.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We envision a world where everyone has the opportunity to thrive, and where our community is a place of support and compassion.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}