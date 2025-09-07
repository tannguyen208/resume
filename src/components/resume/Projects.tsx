import React from 'react';
import { ResumeData } from '../../data/resume';

interface ProjectsProps {
  data: ResumeData['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">🚀</span>
        Dự án nổi bật
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  🌐 Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                >
                  📁 GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
