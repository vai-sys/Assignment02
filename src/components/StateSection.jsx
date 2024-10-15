import React from 'react';
import { Users, Home, MapPin, DollarSign } from 'lucide-react';

const StatItem = ({ icon: Icon, value, label }) => (
  <div className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
    <Icon className="text-blue-600 w-12 h-12" />
    <div>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  </div>
);

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Transforming the way people find and rent homes across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatItem icon={Users} value="2,00,000+" label="Happy customers" />
          <StatItem icon={Home} value="1,00,000+" label="Houses across India" />
          <StatItem icon={MapPin} value="9+" label="locations in Pune" />
          <StatItem icon={DollarSign} value="₹38+ Cr" label="Saving made on brokerage" />
        </div>

        
      </div>
    </div>
  );
};

export default StatsSection;