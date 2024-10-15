import React from 'react';
import { FiCheckCircle, FiClock, FiAward, FiSettings } from 'react-icons/fi';

const Property = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Title and Button */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Own a home?</h1>
          <p className="text-lg text-gray-600 mb-8">
            Let us help you manage it. List your property in a few easy steps and enjoy hassle-free management services, including on-time rent and proactive maintenance.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg font-semibold hover:bg-blue-700">
            Property Management Solutions
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1: KYC-Verified Tenants */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-center mb-4 text-teal-600">
              <FiCheckCircle size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">KYC-Verified Tenants</h3>
            <p className="text-gray-600">
              Our thorough tenant KYC & verification process guarantees the highest quality tenants for your rental property.
            </p>
          </div>

          {/* Feature 2: On-time Rent Collection */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-center mb-4 text-teal-600">
              <FiClock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">On-time Rent Collection</h3>
            <p className="text-gray-600">
              Enjoy hassle-free, on-time rent collection for your property every month.
            </p>
          </div>

          {/* Feature 3: Unparalleled Expertise */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-center mb-4 text-teal-600">
              <FiAward size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Unparalleled Expertise</h3>
            <p className="text-gray-600">
              Having 8+ years of experience in Property and Rental Management, currently overseeing Transactions Worth ₹2000+ Crores.
            </p>
          </div>

          {/* Feature 4: Prompt Maintenance */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-center mb-4 text-teal-600">
              <FiSettings size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Prompt Maintenance</h3>
            <p className="text-gray-600">
              We conduct regular property inspections and provide on-demand services to keep your space forever spick and span.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <p className="text-center">&copy; 2024 Pune PG Listings. All rights reserved.</p>
      </footer>
    </section>
    
  );
};

export default Property;
