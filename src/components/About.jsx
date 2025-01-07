import React from "react";

const About = () => {
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <div
      className={`min-h-screen flex flex-col justify-start items-center p-8 ${
        isDarkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"
      }`}
      style={{ overflow: "hidden" }}
    >
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>

      {/* Content */}
      <div className="flex flex-wrap justify-between w-full max-w-6xl px-4 mb-12">
        {/* Left Content */}
        <div className="flex-1 pr-5 text-justify">
          <p className="mb-4 leading-relaxed text-lg">
            I am a passionate Full Stack Developer with a strong background in
            web development and a growing interest in the field of software
            testing. With a meticulous and detail-oriented approach, I thrive on
            ensuring the quality and reliability of every application I work on
            while continuously learning and evolving professionally.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            Over the course of my academic and professional journey, I have
            developed various web-based solutions, including an e-commerce
            platform for undergarments using PHP and MySQL, and educational
            tools for primary students. My expertise spans modern frameworks
            like React, Angular, and Symfony, and extends to back-end
            technologies such as Node.js, Laravel, and Java.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            In addition to development, I am deeply passionate about software
            testing, focusing on identifying and resolving potential issues to
            deliver robust and user-friendly solutions. My recent projects,
            including a social application connecting startup owners with
            investors, have allowed me to implement both development and quality
            assurance practices, ensuring high performance and reliability.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            With experience in Agile methodologies like SCRUM, and tools such as
            GitHub, Trello, and testing frameworks, I am committed to
            contributing to impactful projects while enhancing my skills in both
            development and testing domains.
          </p>
        </div>

        {/* Right Content (Avatar or Image) */}
        <div className="flex-1 flex justify-center items-center mt-5">
          <div className="bg-gray-200 rounded-xl w-72 h-96 flex flex-col items-center justify-end overflow-hidden relative">
            {/* User Image */}
            <img
              src="/images/my-photo.JPG" // Update this with the path to your image
              alt="My Avatar"
              className="w-full h-full object-cover absolute top-0 left-0 z-10"
            />
            {/* Name Section */}
            <div className="w-full bg-black bg-opacity-60 text-white text-center py-2 font-bold z-20">
              Ben Hmida Aya
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
