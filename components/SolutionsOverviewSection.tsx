import React from 'react';
import { Search, Database, Shield, Target, Globe, Lightbulb } from 'lucide-react';
import Button from './ui/Button';

const SolutionsOverviewSection: React.FC = () => {
  const solutions = [
    {
      icon: Search,
      title: 'Evidence Navigator',
      description: 'Revolutionize decision-making with AI-driven insight.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Database,
      title: 'Text2SQL',
      description: 'Democratize data access for faster insights.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Shield,
      title: 'Marketing Content Compliance Review System',
      description: 'Mitigate risk, ensure compliance with intelligent oversight.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Target,
      title: 'Semantic Search Engine',
      description: 'Elevate information discovery, understand true intent.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Globe,
      title: 'Web Scraping',
      description: 'Stay decisively ahead with continuous monitoring and impact analysis.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Lightbulb,
      title: 'Content Recommendation',
      description: 'Optimize engagement and trust with explainable recommendations.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Challenges into Strategic Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Agentic AI solutions address your most pressing strategic challenges and unlock new avenues for growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`${solution.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                <solution.icon className={`h-8 w-8 ${solution.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {solution.description}
              </p>
              <Button 
                href={`#${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                variant="outline"
                className="w-full"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolutionsOverviewSection; 