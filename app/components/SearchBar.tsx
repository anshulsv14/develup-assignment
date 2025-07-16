import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex gap-2 max-w-[75%]'>
        <input
            type="text"
            placeholder="Search for courses, trainers, or jobs..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className=" bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Search
        </button>
    </div>
  )
}

export default SearchBar
