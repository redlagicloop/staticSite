import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group border border-gray-200">
      <div className="p-8">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a 
          href={href} 
          className="inline-flex items-center text-gray-800 font-medium group-hover:text-black transition-colors"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;