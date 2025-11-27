import React from "react";

const skillCategories = {
  Frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Conception web adaptative", level: 80 },
  ],

  Backend: [
    { name: "Node.js", level: 50 },
    { name: "Python", level: 65 },
    { name: "Django", level: 85 },
    { name: "Gestion de bases de données (SQL/NoSQL)", level: 70 },
    { name: "Conception d'API RESTful", level: 75 },
  ],

  "Architecture & Concepts": [
    { name: "Programmation orientée objet", level: 75 },
    { name: "Modèles de conception logicielle", level: 75 },
    { name: "Intégration d'API", level: 75 },
  ],

  "Soft Skills / Méthodologies": [
    { name: "Méthodologie Agile/Scrum", level: 75 },
    { name: "Tests et débogage", level: 75 },
    { name: "Résolution de problèmes", level: 75 },
    { name: "Collaboration d'équipe", level: 75 },
  ],

  Outils: [
    { name: "Git", level: 75 },
    { name: "Github", level: 75 },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mes compétences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">
                {category}
              </h3>

              {skills.map((skill, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
