import React from 'react';
import project1 from "../assets/project1.jpg"; // Import project1 image
import project2 from "../assets/project2.jpg"; // Import project2 image
import project3 from "../assets/project3.jpg"; // Import project3 image

const Projects = () => {
  const projects = [
    {
      title: "Network Security Audit",
      description: "Conducted a comprehensive security audit for a corporate network.",
      image: project1
    },
    {
      title: "Web Application Penetration Testing",
      description: "Identified and mitigated vulnerabilities in a web application.",
      image: project2 // Use the imported image
    },
    {
      title: "Firewall Configuration",
      description: "Configured and optimized firewall rules for enhanced security.",
      image: project3 // Use the imported image
    }
  ];

  return (
    <div id='project' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-justify">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;