'use client'

import React, { useState } from 'react';
import { FaLaptopCode, FaThumbsUp } from 'react-icons/fa';
import GitHubSearch from './../components/GitHubSearch';

const GitHubSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [first, setFirst] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(query);
    setFirst(10)
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="py-5"><FaLaptopCode className="inline text-xl mr-2 mb-2" /> This feature uses React frontend (TypeScript and Apollo) sending GraphQL query to AWS API Gateway triggering AWS Lambda (Python) to call Github GraphQL endpoint passing API Token and return search result. API Token can be stored in AWS Secret Manager and then use AWS SDK to pull it in Lambda function.</div>
      
      <div className="flex items-center space-x-4 py-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Search GitHub repositories..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-green-5 text-white rounded-lg shadow-md hover:bg-green-1"
        >
          Search
        </button>
      </div>
      <GitHubSearch query={searchQuery} first={first} />
    </div>
  );
};

export default GitHubSection;

