import React from 'react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Welcome to Fleurs et Cuir
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Fleurs et Cuir, we believe in the art of elevating everyday moments. Our meticulously
          crafted self-care kits blend the timeless elegance of preserved flowers with the
          sophistication of fine leather. Each kit is designed to provide a sanctuary of luxury and
          serenity, allowing you to indulge in personal wellness rituals that rejuvenate the mind,
          body, and soul.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Explore our collection and discover how we transform ordinary experiences into
          extraordinary memories, all while embracing sustainable practices and unparalleled quality.
        </p>
      </div>
    </section>
  );
};

export default Introduction;