import React from 'react';
import { ResumeData } from '../../data/resume';

interface LanguagesProps {
  data: ResumeData['languages'];
}

export const Languages: React.FC<LanguagesProps> = ({ data }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">🌍</span>
        Languages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((lang, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold text-gray-800 mb-1">{lang.language}</h3>
            <p className="text-gray-600 text-sm">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
