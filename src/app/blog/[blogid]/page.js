import React from 'react';
import Link from 'next/link';

const Card = ({ className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
      {...props}
    />
  );
};

const CardContent = ({ className = '', ...props }) => {
  return <div className={`p-6 ${className}`} {...props} />;
};

const SingleBlogPost = () => {
  const post = {
    id: 1,
    title: "Tech essentials: exploring the latest electronic gadgets and innovations",
    content: `
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2 class="text-2xl font-bold my-4">The Evolution of Technology</h2>
      
      <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p class="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>`,
    author: "Andrea William",
    date: "21 Jan 2023",
    category: "Business",
    image: "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: "5 min read"
  };

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      image: "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "15 Jan 2023"
    },
    {
      id: 2,
      title: "Understanding Blockchain Technology",
      image: "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "18 Jan 2023"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      image: "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "20 Jan 2023"
    }
  ];

  // const categories = [
  //   "Technology", "Business", "AI", "Development", 
  //   "Design", "Marketing", "Innovation", "Startups"
  // ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-3/4">
          <Card>
            <CardContent>
              {/* Post Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Post Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4">
          {/* Featured Insights */}
          <Card className="mb-8">
            <CardContent>
              <h2 className="text-xl font-bold mb-4">Featured Insights</h2>
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 hover:text-blue-600 transition">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          {/* <Card>
            <CardContent>
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Link 
                    key={index} 
                    href={`/category/${category.toLowerCase()}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;