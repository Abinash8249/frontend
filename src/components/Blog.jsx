import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          The Blog
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          See how game-changing companies are making the most of every engagement with Preline.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <a 
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" 
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img 
              className="w-full object-cover rounded-xl" 
              src="https://st2.depositphotos.com/1006899/8646/i/450/depositphotos_86463824-stock-photo-blog-hanging-on-strings.jpg" 
              alt="Blog post about free plan"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
              Announcing a free plan for small teams
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
              At Wake, our mission has always been focused on bringing openness.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img 
              className="w-8 h-8 rounded-full" 
              src="https://www.shutterstock.com/image-photo/letter-dice-on-black-keyboard-600nw-562449814.jpg" 
              alt="Lauren Waller"
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </a>

        {/* Card 2 */}
        <a 
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" 
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img 
              className="w-full object-cover rounded-xl" 
              src="https://st2.depositphotos.com/1350793/9161/i/450/depositphotos_91612518-stock-photo-blog-concept-with-man-holding.jpg" 
              alt="Blog post about Google Assistant"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
              How Google Assistant now helps you record stories for kids
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
              Google is constantly updating its consumer AI, Google Assistant, with new features.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img 
              className="w-8 h-8 rounded-full" 
              src="https://st2.depositphotos.com/1026266/47189/i/450/depositphotos_471894900-stock-photo-businessman-defending-with-umbrella-from.jpg" 
              alt="Aaron Larsson"
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                By Aaron Larsson
              </h5>
            </div>
          </div>
        </a>

        {/* Card 3 */}
        <a 
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" 
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img 
              className="w-full object-cover rounded-xl" 
              src="https://www.shutterstock.com/image-photo/word-blog-on-notebook-office-260nw-462466795.jpg" 
              alt="Blog post about front accounts"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
              Front accounts - let's work together
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
              Are you an accountant? Are you a company formation advisor?
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img 
              className="w-8 h-8 rounded-full" 
              src="https://www.shutterstock.com/image-photo/social-media-connecting-blog-communication-260nw-247195609.jpg" 
              alt="Lauren Waller"
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </a>
      </div>

      {/* Read More Button */}
      <div className="mt-12 text-center">
        <Link
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" 
          href="/blog"
        >
          Read more
          <svg 
            className="shrink-0 w-4 h-4" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Blog;