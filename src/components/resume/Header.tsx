import React from 'react';
import { ResumeData } from '../../data/resume';

interface HeaderProps {
  data: ResumeData['personalInfo'];
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-6">
          {data.avatar && (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
            <h2 className="text-xl text-blue-100 mb-4">{data.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <a href={`mailto:${data.email}`} className="hover:underline">
                  {data.email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <a href={`tel:${data.phone}`} className="hover:underline">
                  {data.phone}
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{data.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-blue-100 leading-relaxed">{data.summary}</p>
        </div>
      </div>
    </header>
  );
};
