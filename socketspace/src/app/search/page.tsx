'use client';

import React, { useState } from 'react';

const search = () => {
  const [friendName, setFriendName] = useState('');

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendName(e.target.value);
  };

  // Handle search button click (you can customize it later to make API calls or search within the app)
  const handleSearchClick = () => {
    if (friendName.trim() !== '') {
      // For now, we'll log the search input to the console.
      console.log('Searching for friend: ', friendName);
      // You could redirect or fetch results based on `friendName`.
    } else {
      alert('Please enter a name to search.');
    }
  };

  return (
    <div className="search min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-lg mx-auto p-8">
        <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 backdrop-blur-sm shadow-xl border border-blue-800">
          <h2 className="text-2xl font-semibold mb-6 text-blue-300">Search for Your Friend</h2>

          {/* Search Form */}
          <div className="searchForm mb-6">
            <input
              type="text"
              placeholder="Enter your friend's name"
              value={friendName}
              onChange={handleInputChange}
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-blue-800 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSearchClick}
              className="relative group px-8 py-4 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 rounded-full shadow-lg transform transition duration-300 group-hover:-translate-y-1 group-hover:scale-105"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200 animate-gradient-x"></div>
              <div className="relative flex items-center">
                <span className="font-bold text-lg text-white">Search</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default search;
