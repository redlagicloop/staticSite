import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center border border-gray-200">
      <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;