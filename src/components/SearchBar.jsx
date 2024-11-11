import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

function SearchBar({ onSearch, onCategoryChange }) {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const resetFilters = () => {
    onSearch(''); // Clear search input
    onCategoryChange(''); // Clear category filter
    setSortOption('');
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full font-inter">
      {/* Search Input */}
      <div className="relative w-full md:w-1/3">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none bg-white focus:ring-1 focus:ring-[#D1EC79]"
          onChange={(e) => onSearch(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-3.5 text-gray-500" />
      </div>

      {/* Category Filter */}
      <div className="relative w-full md:w-1/4">
        <select 
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-1 text-gray-400 focus:ring-[#D1EC79] appearance-none"
        >
          <option value="">Filter by category</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Business">Business</option>
          <option value="Crafts">Crafts</option>
          <option value="Fashion & Accessories">Fashion & Accessories</option>
          <option value="Culinary Arts">Culinary Arts</option>
        </select>
        <IoIosArrowDown className="absolute top-3 right-4 text-gray-500" />
      </div>

      {/* Sort Option */}
      <div className="relative w-full md:w-1/4">
        <select 
          value={sortOption} 
          onChange={handleSortChange}
          className="w-full p-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-1 text-gray-400 focus:ring-[#D1EC79] appearance-none"
        >
          <option value="">Sort by</option>
          <option value="popularity">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
        <IoIosArrowDown className="absolute top-3 right-4 text-gray-500" />
      </div>

      {/* Reset Button */}
      <button 
        onClick={resetFilters} 
        className="p-3 px-5 bg-[#8cd836] text-white rounded-md shadow-md focus:outline-none text-sm"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default SearchBar;
