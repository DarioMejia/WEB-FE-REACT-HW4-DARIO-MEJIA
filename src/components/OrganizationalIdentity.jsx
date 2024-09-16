import React from 'react';

const OrganizationalIdentity = () => {
  return (
    <section id="identity" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Organizational Identity
        </h2>
        <div className="space-y-12">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Fleurs et Cuir, our mission is to enrich the lives of our customers by providing
              exquisitely crafted self-care kits that embody elegance, luxury, and mindfulness. We
              strive to create products that not only offer a momentary escape from the mundane but
              also inspire a deeper connection with oneself through the harmonious blend of nature
              and artisanal craftsmanship.
            </p>
          </div>
          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to be a global leader in the self-care industry, renowned for redefining
              luxury and setting new standards in quality and sustainability. We aspire to build a
              community that values self-love, environmental responsibility, and the timeless beauty
              of handcrafted products, leaving a lasting legacy that transcends generations.
            </p>
          </div>
          {/* Corporate Policies */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Corporate Policies
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li>
                <strong className="font-semibold">Quality Assurance:</strong> We are committed to
                delivering unparalleled quality in every product, meticulously inspecting each item
                to ensure it meets our exacting standards.
              </li>
              <li>
                <strong className="font-semibold">Sustainability:</strong> Environmental stewardship
                is at the core of our operations. We prioritize eco-friendly materials and
                sustainable practices to minimize our ecological footprint.
              </li>
              <li>
                <strong className="font-semibold">Customer-Centric Approach:</strong> Our customers
                are the heart of our business. We dedicate ourselves to exceeding expectations
                through personalized service, responsiveness, and fostering lasting relationships.
              </li>
              <li>
                <strong className="font-semibold">Innovation:</strong> We embrace creativity and
                continuous improvement, encouraging innovation to stay ahead in the evolving
                self-care landscape.
              </li>
              <li>
                <strong className="font-semibold">Ethical Practices:</strong> Integrity guides our
                actions. We uphold ethical standards in all dealings with customers, suppliers, and
                the wider community.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalIdentity;