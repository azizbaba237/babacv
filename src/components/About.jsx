import React from "react";
import MonImage from "../assets/photo1.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          À propos de moi
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400">
              {/* Image de profil */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <img src={MonImage} alt="" />
              </div>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg mb-4">
              Passionné par l'informatique plus precisément le développement, j'aime
              créer des applications performantes et esthétiques.
            </p>
            <p className="text-lg mb-4">
              Diplômé en Génie Logiciel, j'ai travaillé sur divers projets
              allant des sites vitrines aux applications complexes.
            </p>
            <p className="text-lg mb-6">
              En dehors du code, j'aime le voyage, ce qui m'aide à garder un
              esprit créatif et ouvert.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-blue-600">+3 ans</h3>
                <p>d'expérience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-blue-600">Quelques projets</h3>
                <p>réalisés</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-blue-600">Full Stack</h3>
                <p>spécialisation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
