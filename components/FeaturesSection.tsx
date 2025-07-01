import React from 'react';
import { Shield, Zap, Clock, PieChart } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose MagicKubes?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI solutions are designed with your business needs in mind, offering unparalleled advantages in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Enterprise-Grade Security" 
            description="Your data is protected with bank-level encryption and strict access controls."
            icon={<Shield className="h-10 w-10 text-gray-700" />}
          />
          <FeatureCard 
            title="Lightning Fast Performance" 
            description="Our optimized algorithms deliver results in milliseconds, not minutes."
            icon={<Zap className="h-10 w-10 text-gray-700" />}
          />
          <FeatureCard 
            title="24/7 Availability" 
            description="Our AI systems operate round-the-clock, ensuring continuous service."
            icon={<Clock className="h-10 w-10 text-gray-700" />}
          />
          <FeatureCard 
            title="Actionable Analytics" 
            description="Gain valuable insights with comprehensive performance reporting."
            icon={<PieChart className="h-10 w-10 text-gray-700" />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;