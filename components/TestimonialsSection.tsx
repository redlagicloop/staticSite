import React from 'react';
import { Star, Quote } from 'lucide-react';
import Button from './ui/Button';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "NeuroNex transformed our data analysis, cutting decision time by 30%.",
      author: "VP of Strategy",
      company: "Global Pharma Co.",
      rating: 5
    },
    {
      quote: "Their Agentic AI solutions gave us the competitive edge we needed in a rapidly evolving market.",
      author: "CTO",
      company: "Tech Innovation Corp",
      rating: 5
    },
    {
      quote: "The seamless integration and strategic partnership approach exceeded our expectations.",
      author: "Director of Operations",
      company: "Financial Services Ltd",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how NeuroNex has empowered leading enterprises to achieve breakthrough results with our Agentic AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Measurable Results
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                <p className="text-gray-600">Faster Decision Making</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                <p className="text-gray-600">Reduced Research Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                <p className="text-gray-600">Improved Efficiency</p>
              </div>
            </div>
            <Button 
              href="#case-studies" 
              variant="primary"
              className="text-lg px-8 py-3"
            >
              View Our Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 