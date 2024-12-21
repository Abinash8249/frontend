"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Slider from "@/components/Slider";
import About from "@/components/About";
import React from 'react';
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HappyClients from "@/components/HappyClients";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
   
      {/* Hero Section */}
      <div className="heroSlider">
        <Slider />
      </div>

      {/* About Section */}
      <section className="text-center mt-8 mb-0">
        <h1 className="text-4xl">About Us</h1>
        <About />
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <p className="text-center text-base font-semibold leading-7 text-primary-500">
            Services
          </p>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Empowering You Through Our Services
          </h2>

          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            {/* Feature 1 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="ChatGPT feature"
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">Web Design</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                The cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
                effortlessly tap into the world of AI-generated text.
              </p>
            </li>

            {/* Feature 2 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Easy to use feature"
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">Web Development</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Simply input your subject, click the generate button, and the result will appear in seconds just like
                magic.
              </p>
            </li>

            {/* Feature 3 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Custom settings feature"
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">Digital Marketing</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
                lengths, and formats.
              </p>
            </li>

            {/* Feature 4 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/pricing" className="group">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682091872078-46c5ed6a006d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Free trial feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Software Development
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer a free trial service without login. We provide many payment options including pay-as-you-go
                  and subscription.
                </p>
              </a>
            </li>

            {/* Feature 5 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/templates" className="group">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Templates feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Graphic Desgin
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer many templates covering areas such as writing, education, lifestyle, and creativity to
                  inspire your potential.
                </p>
              </a>
            </li>

            {/* Feature 6 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/download" className="group">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Use anywhere feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Video Editing
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including Web, Chrome, Windows, and Mac. You can
                  use it anywhere.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Work Section */}
      <section className="bg-gray-700 p-12  relative">
        {/* Background gradient */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6 text-secondary"
            >
              <path 
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
            <p className="text-gray-300">We have built many products and some of them are below</p>
          </div>

          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {/* Work Item 1 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Xyz.com logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Xyz.com
                  </h5>
                  <p className="text-gray-300">
                    Platform to convert Domains into Content websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Item 2 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ABC.com logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    ABC.com
                  </h5>
                  <p className="text-gray-300">
                    Platform to create dynamic widgets for websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Item 3 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ASD.com logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    ASD.com
                  </h5>
                  <p className="text-gray-300">
                    API SaaS Platform that provides API Suit to help you ship fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Item 4 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="TMK.co logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    TMK.co
                  </h5>
                  <p className="text-gray-300">
                    Chrome Extension that lets you add ChatGPT on any website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="blog-section">
        <Blog/>
      </section>

      <section className="testimonials">
       <Testimonial/>
      </section>

      <section className="happyclients">
      <HappyClients/>
      </section>

    </>
  );
};

export default HomePage;