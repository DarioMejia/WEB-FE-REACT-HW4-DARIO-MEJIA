import React from 'react';

const Header = () => {
  return (
    <header className="bg-beige-200 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Fleurs et Cuir</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#introduction" className="text-gray-700 hover:text-gray-900">Introduction</a></li>
            <li><a href="#swot" className="text-gray-700 hover:text-gray-900">Diagnosis</a></li>
            <li><a href="#identity" className="text-gray-700 hover:text-gray-900">Our Identity</a></li>
            <li><a href="#objectives" className="text-gray-700 hover:text-gray-900">Objectives</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;