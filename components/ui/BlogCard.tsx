import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  author,
  category,
  imageUrl,
}) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group border border-gray-200">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium text-gray-800 bg-gray-100 px-2 py-1 rounded-full border border-gray-300">
            {category}
          </span>
          <span className="text-xs text-gray-500 ml-auto">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">By {author}</span>
          <a 
            href="#" 
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;