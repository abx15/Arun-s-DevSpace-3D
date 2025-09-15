
export { default as php } from "../assets/icons/php.svg";
export { default as bootstrap } from "../assets/icons/bootstrap.svg";
export { default as mysql } from "../assets/icons/mysql.svg";
export { default as java } from "../assets/icons/java.svg";
export { default as python } from "../assets/icons/python.svg";


import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  twitter,
  typescript,


  php,
  bootstrap,
  mysql,
  java,
  python,
  figma,
  smilepoint,
  bloodline,
  health, mentalwell,
  ecommerce,
  food,
  grocery,
} from "../assets/icons";
// Make sure all imports like css, html, javascript etc. are correctly imported above this array

export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: bootstrap, name: "Bootstrap", type: "Frontend" },
  { imageUrl: sass, name: "Sass", type: "Frontend" },
  { imageUrl: mui, name: "Material-UI", type: "Frontend" },
  { imageUrl: figma, name: "Figma", type: "UI/UX Design" },

 
  { imageUrl: redux, name: "Redux", type: "State Management" },


  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: express, name: "Express.js", type: "Backend" },
  { imageUrl: php, name: "PHP", type: "Backend" },
  { imageUrl: java, name: "Java", type: "Backend" },
  { imageUrl: python, name: "Python", type: "Backend" },

 
  { imageUrl: mysql, name: "MySQL", type: "Database" },
  { imageUrl: mongodb, name: "MongoDB", type: "Database" },


  { imageUrl: git, name: "Git", type: "Version Control" },
  { imageUrl: github, name: "GitHub", type: "Version Control" },
  { imageUrl: motion, name: "Framer Motion", type: "Animation" }
];




export const socialLinks = [
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://twitter.com/ArunKumarBind",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/abx15",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/arun-kumar-bind-a3b047353/",
  }
];



export const projects = [
  {
    iconUrl: smilepoint,
    theme: 'btn-back-red',
    name: 'SmilePoint',
    description: 'Developed a dental management system for patient records, appointments, and treatment tracking with a user-friendly interface.',
  },
  {
    iconUrl: bloodline,
    theme: 'btn-back-green',
    name: 'BloodLine',
    description: 'Built a blood donation management system to connect donors and recipients, track availability, and streamline the donation process.',
  },
  {
    iconUrl: health,
    theme: 'btn-back-blue',
    name: 'Digital Health Records',
    description: 'Created a complete digital health records platform for patients and doctors with appointment management, reports, and analytics.',
  },
  {
    iconUrl: ecommerce,
    theme: 'btn-back-pink',
    name: 'E-Commerce Website',
    description: 'Designed and developed an online shopping platform with product listings, cart system, checkout, and admin panel.',
  },
  {
    iconUrl: food,
    theme: 'btn-back-black',
    name: 'Online Food Ordering System',
    description: 'Developed a web-based food ordering system with dynamic menus, cart, and order tracking using PHP and MySQL.',
  },
  {
    iconUrl: grocery,
    theme: 'btn-back-yellow',
    name: 'Online Grocery Ordering System',
    description: 'Built a grocery ordering system with product listing, cart, payment simulation, and order history for users and admins.',
  },
  {
    iconUrl: mentalwell,
    theme: 'btn-back-red',
    name: 'MentalWell – AI Assistant',
    description: 'Created an AI-powered mental health assistant web app with chatbot, mood tracker, daily journals, and admin analytics.',
  },
  

];


export const service = [
  {
    theme: 'btn-back-red',
    name: 'Frontend Development',
    description:
      'Building responsive and interactive user interfaces using React, Next.js, Tailwind CSS, and other modern frontend technologies.',
  },
  {
    theme: 'btn-back-blue',
    name: 'Backend Development',
    description:
      'Creating robust and scalable backend systems with Node.js, Express, MongoDB, and RESTful APIs to power web applications.',
  },
  {
    theme: 'btn-back-green',
    name: 'UI/UX Design',
    description:
      'Designing intuitive and engaging interfaces that enhance user experience and make digital products visually appealing.',
  },
  {
    theme: 'btn-back-yellow',
    name: 'Website Development',
    description:
      'End-to-end website development solutions including design, frontend, backend, and deployment for businesses and personal projects.',
  },
  {
    theme: 'btn-back-purple',
    name: 'Content Writing',
    description:
      'Creating high-quality web content, blogs, and copywriting to boost online presence and engage your target audience effectively.',
  },
];
