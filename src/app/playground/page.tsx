'use client'

import React, { useState } from 'react';
// import StockComparisonChart from "../../app/ui/components/StockComparisonChart";
import GitHubSection from "../../app/ui/components/GitHubSection";
import YelpBusinessList from "../../app/ui/components/YelpBusinessList";
import PlaygroundSection from "../../app/ui/components/PlaygroundSection";
// import { StockSymbol } from '../lib/definition';

const PlayGroundPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  // const symbols: StockSymbol[] = ['GOOG', 'AMZN']; 
  // const chartType = 'scatter';
  const tabs = [
    { label: 'Web Stacks', content: <PlaygroundSection /> }, 
    { label: 'Yelp Businesses', content: <YelpBusinessList location="San Diego" term="coffee"/> },
    { label: 'GitHub Repos', content: <GitHubSection /> }, 
    // { label: 'Chart', content: <StockComparisonChart symbols={symbols} chartType={chartType} /> },
  ];

  return (
    <>
      <div className="w-full max-w-5xl mx-auto mt-10 rounded-b-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex bg-gray-200 rounded-t-lg">
          <ul className="flex">
            {tabs.map((tab, index) => (
              <li key={index} className="-mb-px">
                <button
                  className={`px-4 py-2 focus:outline-none border ${
                    activeTab === index
                      ? 'bg-white text-black font-semibold border-gray-300 border-b-transparent'
                      : 'bg-gray-200 text-gray-600 border-transparent'
                  } ${
                    index === 0
                      ? 'rounded-tl-lg'
                      : index === tabs.length - 1
                      ? 'rounded-tr-lg'
                      : ''
                  }`}
                  onClick={() => setActiveTab(index)}
                  style={{ minHeight: '4.5rem' }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 bg-white rounded-b-lg border-t-0">
          {tabs[activeTab].content}
        </div>

      </div>
    </>
  );
};

export default PlayGroundPage;
