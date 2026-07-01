import React from 'react'
import { resumeData } from '../data/resume'
import {
  Header,
  Experience,
  Skills,
  Projects,
  Education,
  Languages,
} from './resume/index'

export const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={resumeData.personalInfo} />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <Experience data={resumeData.experience} />
            <Projects data={resumeData.projects} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Skills data={resumeData.skills} />
            <Education data={resumeData.education} />
            <Languages data={resumeData.languages} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            © 2024 {resumeData.personalInfo.name} - Resume Portfolio
          </p>
        </div>
      </footer>
    </div>
  )
}
