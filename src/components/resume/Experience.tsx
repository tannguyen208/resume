import React from 'react';
import { ResumeData } from '../../data/resume';

interface ExperienceProps {
  data: ResumeData['experience'];
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">💼</span>
        Work Experience
      </h2>
      <div className="space-y-6">
        {data.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm mt-1 md:mt-0">{exp.duration}</span>
              </div>
              
              <ul className="mb-4 space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{desc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
