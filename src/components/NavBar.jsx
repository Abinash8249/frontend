"use client"
import React from "react";
import "flowbite";
import Link from "next/link";

const NavBar = () => (
  <nav className="bg-navy-blue border-gray-200">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <Link
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="text-white self-center text-2xl font-semibold whitespace-nowrap">
          SoftTech
        </span>
      </Link>
      <button
        data-collapse-toggle="mega-menu-full"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-controls="mega-menu-full"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        id="mega-menu-full"
        className="bg-navy-blue items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:hover:bg-transparent"
              aria-current="page"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:hover:bg-transparent"
              aria-current="page"
            >
              About
            </Link>
          </li>

          <li>
            <button
              id="mega-menu-full-dropdown-button"
              data-collapse-toggle="mega-menu-full-dropdown"
              className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:w-auto hover:bg-gray-700"
            >
              Services
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </button>
          </li>
          <li>
            <Link
              href="/blog"
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:hover:bg-transparent"
              aria-current="page"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className="block py-2 px-3 text-white hover:bg-gray-700 rounded md:hover:bg-transparent"
              aria-current="page"
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="mega-menu-full-dropdown"
      className="mt-1 border-gray-200 shadow-sm bg-navy-blue text-white"
    >
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto sm:grid-cols-2">
        <ul>
          <li>
            <Link
              href="/stores"
              className="block p-3 rounded-lg hover:bg-gray-700"
            >
              <div className="font-semibold">Web Design</div>
              <span className="text-sm text-white">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/segmentation"
              className="block p-3 rounded-lg hover:bg-gray-700"
            >
              <div className="font-semibold">Web Development</div>
              <span className="text-sm text-white">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/crm"
              className="block p-3 rounded-lg hover:bg-gray-700"
            >
              <div className="font-semibold">Digital Marketing</div>
              <span className="text-sm text-white">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="/stores"
              className="block p-3 rounded-lg hover:bg-gray-700"
            >
              <div className="font-semibold">Software Developments</div>
              <span className="text-sm text-white">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/segmentation"
              className="block p-3 rounded-lg hover:bg-gray-700"
            >
              <div className="font-semibold">Graphic Design</div>
              <span className="text-sm text-white">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/crm"
              className="block p-3 rounded-lg hover:bg-gray-700"
            >
              <div className="font-semibold">Video Editing</div>
              <span className="text-sm text-white">
                Connect with third-party tools that you're already using.
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
