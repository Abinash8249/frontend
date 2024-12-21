"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Slider from "@/components/Slider";
import About from "@/components/About";
import React from 'react';
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HappyClients from "@/components/HappyClients";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1528459584353-5297db1a9c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Our Company</h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Discover Our History and Mission and See How We're Dedicated to Providing Excellent IT Services
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Who We Are</h1>
            <p className="text-gray-600 text-base md:text-lg">
              We are a forward-thinking IT company committed to delivering innovative solutions
              that drive business success. With years of experience and a talented team of
              professionals, we help organizations transform their digital landscape and achieve
              their technological goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 md:order-2">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2">Team Members</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">50+</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2">Technologies</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">20+</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2">Clients</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">200+</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2">Years</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">10+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 md:mb-12">Our Mission</h2>
          <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12">
            To empower businesses through innovative technology solutions while maintaining
            the highest standards of service excellence and customer satisfaction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3">Human Centric</h3>
              <p className="text-gray-600 text-sm md:text-base">Putting people first in everything we do</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm md:text-base">Striving for the highest quality in our work</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3">Accountability</h3>
              <p className="text-gray-600 text-sm md:text-base">Taking responsibility for our actions</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3">Empathy</h3>
              <p className="text-gray-600 text-sm md:text-base">Understanding and sharing client needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Vision</h2>
            <p className="text-gray-600 text-base md:text-lg">
              To be the leading innovator in IT solutions, recognized globally for our 
              commitment to excellence, sustainable practices, and transformative impact
              on businesses and communities. We envision a future where technology
              seamlessly enhances human potential.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/vecteurs-premium/concept-creation-entreprise-moderne-conception-visuelle-mot-word-formes-geometriques-abstraites_48369-17746.jpg"
              alt="Vision illustration"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default AboutPage;