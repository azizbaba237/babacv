import React from "react";
import capture from "../assets/capture.JPG";
import gestfile from "../assets/gestfile.JPG";
import omri from "../assets/omri.JPG";

const projects = [
  {
    title: "Application E-commerce",
    description:
      "Une application complète de e-commerce, vente de parfum avec panier, paiement. etc",
    technologies: ["Django", "MySql", "Tailwind CSS"],
    image: capture,
    link: "https://bertorm.pythonanywhere.com/",
  },
  {
    title: "Application de Gestion de file d'attente",
    description:
      "Une application de gestion des files d'attente cas d'une banque. ",
    technologies: ["Django", "Tailwind CSS", "MySql"],
    image: gestfile,
    link: "https://gestfile.pythonanywhere.com/",
  },
  {
    title: "Application de Gestion d'une Quincaillerie Moderne",
    description:
      "Application de gestion d'une quincaillerie moderne, avec gestion des stocks, des ventes, des clients, des prestaions de services, etc.",
    technologies: ["React", "API REST", "Tailwind CSS", "Node.js", "Django", "MySql"],
    image: omri,
    link: "https://omri-turkish-construction.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mes projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                {/* Remplacez par une image réelle */}
                <img src={project.image} alt={project.title}/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Voir le projet
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
