import React from 'react';
import { Target, TrendingUp, Shield } from 'lucide-react';

const StrategicMandateSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Navigating Complexity with Intelligent Autonomy
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              In a rapidly evolving global landscape, enterprises face unprecedented challenges in data utilization, regulatory compliance, and market responsiveness.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              NeuroNex specializes in translating the transformative power of Agentic AI into deployable, scalable solutions. We integrate seamlessly with your infrastructure, delivering not just technology, but a strategic partnership designed to secure your leadership position.
            </p>
            <p className="text-xl text-gray-600">
              Our commitment to constant innovation ensures your solutions always leverage the latest and greatest advancements in AI, providing an enduring competitive advantage.
            </p>
          </div>
        </div>

        {/* Problem -> Solution Flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Target className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">The Problem</h3>
            <p className="text-gray-600">
              Complex data landscapes, regulatory challenges, and market volatility create unprecedented obstacles for enterprise success.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">NeuroNex AI</h3>
            <p className="text-gray-600">
              Strategic Agentic AI solutions that understand, reason, learn, and act autonomously towards defined objectives.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">The Solution</h3>
            <p className="text-gray-600">
              Intelligent autonomy, adaptability, and strategic foresight that secure your leadership position in the market.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Strategic Partnership</h4>
            <p className="text-gray-600 text-sm">
              More than technology - we become your strategic partner for long-term success.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
            <p className="text-gray-600 text-sm">
              Solutions that integrate seamlessly with your existing infrastructure.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Constant Innovation</h4>
            <p className="text-gray-600 text-sm">
              Always leveraging the latest AI advancements for competitive advantage.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Leadership Position</h4>
            <p className="text-gray-600 text-sm">
              Designed to secure and maintain your market leadership position.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicMandateSection; 