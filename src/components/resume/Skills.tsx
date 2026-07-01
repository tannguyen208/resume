import React from 'react'
import { ResumeData } from '../../data/resume'

interface SkillsProps {
  data: ResumeData['skills']
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">🛠️</span>
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
