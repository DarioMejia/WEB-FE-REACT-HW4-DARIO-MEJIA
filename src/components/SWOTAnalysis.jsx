import React from 'react';
import { swotData } from '../utils/data/swotData';

const SWOTAnalysis = () => {
  const swotPositions = {
    Strengths: { order: 1, bgColor: 'bg-beige-100' },
    Weaknesses: { order: 2, bgColor: 'bg-beige-200' },
    Opportunities: { order: 3, bgColor: 'bg-beige-100' },
    Threats: { order: 4, bgColor: 'bg-beige-200' },
  };

  return (
    <section id="swot" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Current Diagnosis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {swotData
            .sort((a, b) => swotPositions[a.type].order - swotPositions[b.type].order)
            .map((swot) => (
              <div
                key={swot.id}
                className={`${swotPositions[swot.type].bgColor} p-6 rounded shadow`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {swot.type}
                </h3>
                <ul className="space-y-4">
                  {swot.items.map((item) => (
                    <li key={item.id}>
                      <h4 className="text-xl font-semibold text-gray-700">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SWOTAnalysis;