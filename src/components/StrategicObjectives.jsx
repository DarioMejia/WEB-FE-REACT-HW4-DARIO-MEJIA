

import React from 'react';
import { strategicObjectivesData } from '../utils/data/strategicObjectivesData';

const StrategicObjectives = () => {
  const getStatus = (compliance) => {
    if (compliance >= 0 && compliance <= 35) {
      return { status: 'Critical', color: 'text-red-500' };
    } else if (compliance >= 36 && compliance <= 75) {
      return { status: 'Acceptable', color: 'text-orange-500' };
    } else if (compliance >= 76 && compliance <= 100) {
      return { status: 'Successful', color: 'text-green-500' };
    } else {
      return { status: 'Unknown', color: 'text-gray-500' };
    }
  };

  const formatValue = (value, id) => {
    switch (id) {
      case 1: // Monetary value
      case 4:
        return `$${value.toLocaleString()}`;
      case 2: // Number of items
      case 5:
        return value;
      case 3: // Percentage
        return `${value}%`;
      default:
        return value;
    }
  };

  return (
    <section id="objectives" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Strategic Objectives
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-beige-100">Code</th>
                <th className="py-2 px-4 bg-beige-100">Objective</th>
                <th className="py-2 px-4 bg-beige-100">Description</th>
                <th className="py-2 px-4 bg-beige-100">Target</th>
                <th className="py-2 px-4 bg-beige-100">Progress</th>
                <th className="py-2 px-4 bg-beige-100">Compliance</th>
                <th className="py-2 px-4 bg-beige-100">Status</th>
              </tr>
            </thead>
            <tbody>
              {strategicObjectivesData.map((obj) => {
                const { status, color } = getStatus(obj.compliance);
                return (
                  <tr key={obj.id} className="text-center border-b">
                    <td className="py-2 px-4">{obj.id}</td>
                    <td className="py-2 px-4 text-left">{obj.goal}</td>
                    <td className="py-2 px-4 text-left">{obj.description}</td>
                    <td className="py-2 px-4">{formatValue(obj.target, obj.id)}</td>
                    <td className="py-2 px-4">{formatValue(obj.progress, obj.id)}</td>
                    <td className="py-2 px-4">{obj.compliance}%</td>
                    <td className={`py-2 px-4 font-semibold ${color}`}>{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StrategicObjectives;