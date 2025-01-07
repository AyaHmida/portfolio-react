import React from "react";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  const isDarkMode = document.body.classList.contains("dark");
  const projects = [
    {
      title: "Dev Portfolio",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>Developer Portfolio Website made in React</li>
          <li>Fully customizable and dynamic</li>
          <li>Easily change data and images</li>
          <li>Dark Mode Support</li>
        </ul>
      ),
      techStack: ["React", "Portfolio", "JavaScript"],
      githubLink: "https://github.com/mehmoodulhaq570/Protfolio-reactjs.git",
      liveLink: "#",
      image: "/images/react-portfolio.png",
    },

    {
      title: "Startup Social Application",
      description: (
        <ul className="list-disc pl-5 space-y-0 text-gray-700">
          <li>
            Developed a social application to connect startup owners with
            potential investors.
          </li>
          <li>Implemented dynamic user interfaces using React.</li>
          <li>Built RESTful APIs with Laravel for back-end functionality.</li>
        </ul>
      ),
      techStack: ["React", "Laravel", "REST APIs", "GitHub", "Trello"],
      githubLink: "https://github.com/AyaHmida/StartInvest-UserFrontEnd",

      liveLink: "#",
      image: "/images/StartInvest.png",
    },
    
  ];

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center p-8 ${
        isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl text-center font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
