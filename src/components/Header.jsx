import React from "react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Mon Portfolio
        </a>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-gray-900 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
            <li>
              <a href="/" className="hover:text-blue-400">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                À propos
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Compétences
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
