import React from 'react';
import { ArrowRight, Box } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gray-600 opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Box className="h-8 w-8 text-gray-300" />
              <h1 className="text-3xl font-bold text-white">NeuroNex</h1>
            </div>
            <span className="block text-4xl md:text-6xl font-bold mb-4 heading-2xl">
              NeuroNex: Pioneering <span className="text-blue-600">Agentic AI</span> for Enterprise Excellence
            </span>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Empowering visionary enterprises with strategic AI solutions that drive tangible impact and enduring competitive advantage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="#solutions" 
                variant="primary"
                className="flex items-center gap-2"
              >
                Discover Our Solutions <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                href="#contact" 
                variant="outline"
              >
                Schedule a Strategy Session
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative z-10 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="absolute -top-4 -left-4 bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <Box className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategic AI Solutions</h3>
              <p className="text-gray-200 mb-6">Our Agentic AI platform enables enterprises to navigate complexity with intelligent autonomy and strategic foresight.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <p className="text-gray-200">Evidence Navigator</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <p className="text-gray-200">Text2SQL</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <p className="text-gray-200">Compliance Review</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <p className="text-gray-200">Semantic Search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;