import React from "react";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaTrello,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaGit,
  FaCode,
} from "react-icons/fa";
import { SiLaravel, SiMongodb, SiFlutter, SiExpress } from "react-icons/si";

const Skills = () => {
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center p-8 ${
        isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
      style={{ overflow: "hidden" }}
    >
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-12">Skills</h1>

      {/* Description Text */}
      <p className="text-lg font-medium text-center mb-12 leading-relaxed">
        I love to learn new things and experiment with new technologies. <br />
        These are some of the major languages, frameworks, tools, and platforms
        I have worked with:
      </p>

      {/* Skills Sections */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 max-w-5xl w-full">
        {/* Languages & Databases */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Languages & Databases</h2>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center text-5xl">
              <FaPython className="text-[#3776AB]" title="Python" />
              <span className="text-sm mt-1">Python</span>
            </div>
            <div className="flex flex-col items-center text-5xl">
              <FaJava className="text-[#f89820]" title="Java" />
              <span className="text-sm mt-1">Java</span>
            </div>

            <div className="flex flex-col items-center text-5xl">
              <FaDatabase className="text-[#4479A1]" title="SQL" />
              <span className="text-sm mt-1">SQL</span>
            </div>
            <div className="flex flex-col items-center text-5xl">
              <SiMongodb className="text-[#47A248]" title="MongoDB" />
              <span className="text-sm mt-1">MongoDB</span>
            </div>
          </div>
        </div>

        {/* Frameworks & Technologies */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Frameworks & Technologies
          </h2>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center text-5xl">
              <SiLaravel className="text-[#FF2D20]" title="Laravel" />
              <span className="text-sm mt-1">Laravel</span>
            </div>

            <div className="flex flex-col items-center text-5xl">
              <SiFlutter className="text-[#02569B]" title="Flutter" />
              <span className="text-sm mt-1">Flutter</span>
            </div>
            <div className="flex flex-col items-center text-5xl">
              <SiExpress className="text-black" title="Express.js" />
              <span className="text-sm mt-1">Express.js</span>
            </div>

            <div className="flex flex-col items-center text-5xl">
              <FaReact className="text-[#61DAFB]" title="React" />
              <span className="text-sm mt-1">React</span>
            </div>
            <div className="flex flex-col items-center text-5xl">
              <FaNodeJs className="text-[#68A063]" title="Node.js" />
              <span className="text-sm mt-1">Node.js</span>
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Tools & Platforms</h2>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center text-5xl">
              <FaTrello className="text-[#0079BF]" title="Trello" />
              <span className="text-sm mt-1">Trello</span>
            </div>
            <div className="flex flex-col items-center text-5xl">
              <FaGithub className="text-[#000000]" title="GitHub" />
              <span className="text-sm mt-1">GitHub</span>
            </div>
            <div className="flex flex-col items-center text-5xl">
              <FaGit className="text-[#F1502F]" title="Git" />
              <span className="text-sm mt-1">Git</span>
            </div>
          </div>
        </div>

        {/* Development Tools */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Development Tools</h2>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center text-5xl">
              <FaCode className="text-[#007ACC]" title="Visual Studio Code" />
              <span className="text-sm mt-1">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
