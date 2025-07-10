import React from 'react';
import { Users, TrendingUp, Zap, Award } from 'lucide-react';

const MagicKubesAdvantageSection: React.FC = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: 'Research-Driven Innovation',
      description: 'Solutions built on rigorous R&D, ensuring intellectual robustness and practical efficacy.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Zap,
      title: 'Dynamic Solution Evolution',
      description: 'Continuous refinement and cutting-edge capabilities that adapt to new challenges.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Users,
      title: 'Strategic Deployment & Integration',
      description: 'Seamless integration for immediate impact, ensuring minimal disruption and maximum results.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Award,
      title: 'Unrivaled Competitive Edge',
      description: 'Adaptive intelligence for market outperformance and sustained leadership position.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Partner for Sustained AI Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choosing NeuroNex means opting for a partner that offers distinct strategic advantages in the competitive AI landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`${advantage.bgColor} rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                  <advantage.icon className={`h-6 w-6 ${advantage.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          

        </div>

        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose NeuroNex?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We don't just follow trends; we help define them through our deep commitment to AI R&D and strategic partnership approach.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Partnership</h4>
                <p className="text-gray-600">More than a vendor - we become your strategic partner for long-term success.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h4>
                <p className="text-gray-600">Always at the vanguard of technological advancement with superior performance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Immediate Impact</h4>
                <p className="text-gray-600">Seamless deployment ensuring immediate and measurable business impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicKubesAdvantageSection; 