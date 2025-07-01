import React from 'react';
import { Database, BrainCircuit, Globe, Sparkles, Puzzle, Search } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our AI Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative AI solutions can transform your business operations,
            enhance decision-making, and drive growth in today&apos;s digital landscape.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Agentic AI Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Text to SQL" 
              description="Convert natural language queries into SQL commands automatically, making database interactions intuitive for non-technical users."
              icon={<Database className="h-8 w-8 text-gray-700" />}
              href="#text-to-sql"
            />
            <ServiceCard 
              title="Unstructured Chatbot" 
              description="Deploy intelligent chatbots that understand context, learn from interactions, and provide human-like responses to complex queries."
              icon={<BrainCircuit className="h-8 w-8 text-gray-700" />}
              href="#chatbot"
            />
            <ServiceCard 
              title="Web Scraping" 
              description="Extract valuable data from websites automatically with our intelligent scraping technology that adapts to changing layouts."
              icon={<Globe className="h-8 w-8 text-gray-700" />}
              href="#web-scraping"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Advanced AI Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Content Engineering" 
              description="Generate high-quality, contextually relevant content tailored to your specific industry and audience needs."
              icon={<Puzzle className="h-8 w-8 text-black" />}
              href="#content-engineering"
            />
            <ServiceCard 
              title="Semantic Search Engine" 
              description="Implement powerful search capabilities that understand meaning and context, not just keywords, for more relevant results."
              icon={<Search className="h-8 w-8 text-black" />}
              href="#semantic-search"
            />
            <ServiceCard 
              title="Custom AI Solutions" 
              description="Tailored AI implementations designed specifically for your unique business challenges and opportunities."
              icon={<Sparkles className="h-8 w-8 text-black" />}
              href="#custom-ai"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;