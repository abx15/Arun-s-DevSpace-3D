import React from 'react'
import { projects, socialLinks } from '../constants'
import { arrow } from '../assets/icons'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className="max-container py-16">
      {/* Heading */}
      <h1 className="head-text text-center">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>

      {/* Intro Paragraph */}
      <div className="mt-5 flex flex-col gap-3 text-slate-500 max-w-3xl mx-auto text-center">
        <p>
          My project portfolio is more than just a showcase; it’s a collection of ideas turned into real solutions. 
          Each project reflects creativity, attention to detail, and the practical application of modern technologies. 
          Explore how vision meets execution in every line of code.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Card Background */}
            <div className={`absolute inset-0 ${project.theme} opacity-20`}></div>

            {/* Icon Front */}
            <div className="relative flex justify-center items-center h-40 bg-gray-50">
              <img
                src={project.iconUrl}
                alt={`${project.name} Icon`}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold text-gray-800">{project.name}</h4>
              <p className="mt-3 text-slate-500 text-sm">{project.description}</p>

              {/* Live Link */}
              <div className="mt-5 flex items-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 flex items-center gap-1"
                >
                  Live Link
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider + CTA */}
      <hr className="border-slate-200 my-16" />
      <CTA />

      {/* Social Links */}
      <div className="mt-10 flex justify-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 transition-colors duration-300"
          >
            <img src={social.iconUrl} alt={social.name} className="w-5 h-5 object-contain" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
