import React from "react";

const Experience = () => {
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center p-8 ${
        isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <h1 className="text-5xl text-center font-bold mb-12">Experience</h1>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute border-l-4 border-blue-500 dark:border-blue-400 h-full left-1/2 transform -translate-x-1/2"></div>

          {/* First Education Block */}
          <div className="relative mb-14 w-full max-w-md">
            {/* Timeline Circle */}
            <div className="absolute w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
            {/* Date Label */}
            <div className="absolute bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold left-1/2 transform -translate-x-1/2 -translate-y-6">
              February 2024 – May 2024
            </div>
            {/* Content Box */}
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg mt-8 transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Graduation Project Intern - V5 Agency
              </h2>

              <ul className="list-disc ml-6 mt-2 text-gray-600 dark:text-gray-400">
                <li>
                  Created a social application to provide solutions for startup
                  owners looking to attract investors.
                </li>
                <li>
                  Developed REST APIs using Laravel and designed dynamic user
                  interfaces with React.
                </li>
                <li>Deployed ML models on AWS.</li>
                <li>
                  Utilized GitHub for version control and Trello for efficient
                  project management.
                </li>
              </ul>
            </div>
          </div>

          {/* Second Education Block */}
          <div className="relative mb-14 w-full max-w-md">
            {/* Timeline Circle */}
            <div className="absolute w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
            {/* Date Label */}
            <div className="absolute bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold left-1/2 transform -translate-x-1/2 -translate-y-6">
              January 2023 – February 2023
            </div>
            {/* Content Box */}
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg mt-8 transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Intern - Hammamet Valley Hub
              </h2>

              <ul className="list-disc ml-6 mt-2 text-gray-600 dark:text-gray-400">
                <li>
                  Developed an e-commerce web application for underwear using
                  PHP and MySQL for the back-end.
                </li>
                <li>
                  Utilized HTML and Bootstrap for a responsive front-end
                  interface.
                </li>
                <li>
                  Gained hands-on experience in full-stack development and
                  database integration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
