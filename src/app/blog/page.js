import Link from "next/link";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Tech essentials: exploring the latest electronic gadgets and innovations",
      description:
        "Discovering the must-have electronic devices and groundbreaking innovations in the tech world.",
      author: "Andrea William",
      date: "21 Jan 2023",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Unlocking2 financial inclusion: how fintech is bridging the gap",
      description:
        "Examining how fintech is promoting access to financial services for underserved populations.",
      author: "James Camron",
      date: "21 Apr 2023",
      category: "Business",
      image:
        "https://plus.unsplash.com/premium_photo-1670793631007-e86c6ddfd812?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Unlocking3 financial inclusion: how fintech is bridging the gap",
      description:
        "Examining how fintech is promoting access to financial services for underserved populations.",
      author: "James Camron",
      date: "21 Apr 2023",
      category: "Business",
      image:
        "https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Unlocking4 financial inclusion: how fintech is bridging the gap",
      description:
        "Examining how fintech is promoting access to financial services for underserved populations.",
      author: "James Camron",
      date: "21 Apr 2023",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1721333092254-4f59905d10a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D",
    },
  ];

  const popularNews = [
    {
      id: 1,
      title:
        "Tech essentials: exploring the latest electronic gadgets and innovations",
      description:
        "Discovering the must-have electronic devices and groundbreaking innovations in the tech world.",
      author: "Andrea William",
      date: "21 Jan 2023",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Unlocking financial inclusion: how fintech is bridging the gap",
      description:
        "Examining how fintech is promoting access to financial services for underserved populations.",
      author: "James Camron",
      date: "21 Apr 2023",
      category: "Business",
      image:
        "https://plus.unsplash.com/premium_photo-1670793631007-e86c6ddfd812?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Unlocking financial inclusion: how fintech is bridging the gap",
      description:
        "Examining how fintech is promoting access to financial services for underserved populations.",
      author: "James Camron",
      date: "21 Apr 2023",
      category: "Business",
      image:
        "https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Unlocking financial inclusion: how fintech is bridging the gap",
      description:
        "Examining how fintech is promoting access to financial services for underserved populations.",
      author: "James Camron",
      date: "21 Apr 2023",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1721333092254-4f59905d10a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 5,
      title: "Unlocking financial inclusion: how fintech is bridging the gap",
      description:
        "Examining how fintech is promoting access to financial services for underserved populations.",
      author: "James Camron",
      date: "21 Apr 2023",
      category: "Business",
      image:
        "https://unsplash.com/photos/a-group-of-people-walking-down-a-street-u6SbmjbGC4Y",
    },
  ];

  return (
<div className="p-6 md:p-12 mx-auto w-[70%]">
                <h1 className="text-center font-semibold text-4xl mb-4">Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                  <div>
                    <p>{blog.author}</p>
                    <p>{blog.date}</p>
                  </div>
                  <p className="bg-gray-200 px-2 py-1 rounded-md">
                    {blog.category}
                  </p>
                </div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Popular News */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Most popular news</h3>
          <div className="space-y-6">
            {popularNews.map((news) => (
              <div key={news.id} className="flex items-center space-x-4">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <Link
                    href={`/blog/${news.id}`}
                    className="text-lg font-medium text-gray-800 hover:text-blue-500 transition"
                  >
                    {news.title}
                  </Link>
                  <p className="text-gray-500 text-sm">{news.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
