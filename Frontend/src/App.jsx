import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          🚀 Tailwind CSS + React
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome! Your Tailwind CSS setup is working perfectly.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Let's Go!
        </button>
      </div>
    </div>
  );
}

export default App;
