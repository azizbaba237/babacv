import React from "react";
import MonImage from "../assets/photo1.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-900 text-white pt-20"
    >
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bonjour, je suis{" "}
              <span className="text-blue-400">ABDOUL AZIZ BABA</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Développeur Junior</h2>
            <p className="text-lg mb-8">
              Je crée des applications web modernes et réactives avec les
              dernières technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400">
              {/* Image de profil */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <img src={MonImage} alt="im" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
