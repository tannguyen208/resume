import React from 'react'
import { ResumeData } from '../../data/resume'

interface EducationProps {
  data: ResumeData['education']
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">🎓</span>
        Education
      </h2>
      <div className="space-y-4">
        {data.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 font-medium">{edu.school}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <span className="text-gray-500 text-sm">{edu.year}</span>
                {edu.gpa && (
                  <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
