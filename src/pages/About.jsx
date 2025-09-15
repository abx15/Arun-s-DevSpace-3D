import React from 'react'
import { skills, service, socialLinks } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="max-container py-12">
   
      <h1 className="head-text">
        Hey, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Arun Kumar Bind
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 max-w-3xl">
        <p>
          I’m Arun Kumar Bind, a full-stack web developer from India with a strong interest in
          building practical and user-friendly digital solutions. Over time, I’ve worked
          on projects ranging from simple websites to full-scale applications like
          e-commerce platforms and college management systems. My goal is always the same –
          clean design, smooth functionality, and a great experience for the end user.
          I’m constantly learning and improving my skills to stay updated with modern
          technologies and bring fresh ideas into every project.
        </p>

      </div>

     
      <div className="py-16 flex flex-col">
        <h3 className="subhead-text text-center">My Skills</h3>

        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              
              <div className="w-20 h-20 flex justify-center items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:scale-110 group-hover:shadow-blue-400/50 transition-all duration-300">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              
              <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-blue-500 transition">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>


      
      <div className="py-16">
        <h2 className="head-text text-center">
          <span className="blue-gradient_text font-semibold drop-shadow">
            Services{" "}
          </span>
          I Provide
        </h2>

        <div className="mt-5 text-slate-500 max-w-3xl mx-auto text-center">
          <p>
            I offer a variety of services to help you build a strong online presence.
            From clean frontend design to powerful backend systems, my work is focused
            on delivering user-friendly, responsive, and result-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {service.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-start bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
            
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {item.name}
              </h3>

             
              <p className="text-sm text-gray-600 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>


   
      <hr className="border-slate-200 my-10" />

      
      <CTA />

     
      <div className="mt-10 flex justify-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 transition-colors duration-300"
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="w-5 h-5 object-contain"
            />
          </a>
        ))}
      </div>

    </section>
  )
}

export default About
