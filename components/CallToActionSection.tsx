import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from './ui/Button';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ignite Your Enterprise with Agentic Intelligence
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Ready to redefine what's possible? Partner with NeuroNex to unlock new levels of intelligent autonomy, adaptability, and strategic foresight.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              href="#contact" 
              variant="primary"
              className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 flex items-center gap-2"
            >
              Schedule a Strategic Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              href="#whitepaper" 
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900 flex items-center gap-2"
            >
              Download Our Agentic AI Whitepaper
              <Download className="h-5 w-5" />
            </Button>
          </div> */}

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Agentic AI?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Intelligent Autonomy</h4>
                <p className="text-gray-200">Systems that understand, reason, learn, and act autonomously towards defined objectives.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Strategic Foresight</h4>
                <p className="text-gray-200">Anticipate market dynamics and optimize resource allocation for sustained leadership.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Adaptive Intelligence</h4>
                <p className="text-gray-200">Continuously evolve and adapt to new challenges and opportunities.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-gray-300">
            <p className="text-sm">
              Join the revolution in enterprise AI. Contact NeuroNex today to discover how Agentic AI can transform your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 