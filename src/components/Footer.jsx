import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-beige-200 shadow-inner py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-gray-700">Contact us at: <a href="mailto:info@fleursetcuir.com" className="underline">info@fleursetcuir.com</a></p>
        </div>
        <p className="text-gray-500">&copy; 2024 Fleurs et Cuir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;