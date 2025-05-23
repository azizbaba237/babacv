import React from "react";

const projects = [
  {
    title: "Application E-commerce",
    description:
      "Une application complète de e-commerce avec panier, paiement.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "ecommerce.jpg",
    link: "https://e-shop-five-sigma.vercel.app/",
  },
  {
    title: "Application E-commerce",
    description:
      "Une application complète de e-commerce avec panier, paiement.",
    technologies: ["React", "Tailwind CSS"],
    image: "social.jpg",
    link: "https://e-commerce-plum-rho.vercel.app/",
  },
  {
    title: "Application Météo",
    description:
      "Application météo utilisant une API pour afficher les prévisions.",
    technologies: ["React", "API REST", "CSS"],
    image: "weather.jpg",
    link: "#",
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
                <span className="text-4xl">📱</span>
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
