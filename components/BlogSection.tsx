import React from 'react';
import BlogCard from './ui/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Agentic AI in Enterprise Settings',
    excerpt: 'Explore how autonomous AI agents are transforming business operations and decision-making processes.',
    date: 'May 15, 2025',
    author: 'Alex Chen',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Semantic Search: Beyond Simple Keyword Matching',
    excerpt: 'Discover how semantic understanding is revolutionizing information retrieval and search experiences.',
    date: 'April 28, 2025',
    author: 'Sophia Williams',
    category: 'Search Technology',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Enhancing Customer Support with AI Chatbots',
    excerpt: 'Learn how AI-powered chatbots are transforming customer service with 24/7 intelligent support.',
    date: 'April 10, 2025',
    author: 'Michael Johnson',
    category: 'Customer Experience',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in the world of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              category={post.category}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors border border-gray-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;