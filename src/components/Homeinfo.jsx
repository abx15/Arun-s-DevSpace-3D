import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-6 text-white mx-4 md:mx-0">
        Hey, I'm
        <span className="font-semibold mx-2 text-white">Arun Kumar Bind 🙋‍♂️</span>
        <br />
        A Full-Stack Web Developer from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box py-4 px-6 bg-blue-700 rounded-xl shadow-lg max-w-lg mx-auto">
        <p className="font-medium sm:text-lg text-center text-white">
          I craft seamless digital experiences that resonate, engage, and elevate online presence. 
          From code to design, every detail is intentional.
        </p>

        <Link
          to="/about"
          className="neo-brutalism-white neo-btn mt-4 inline-flex items-center justify-center gap-2"
        >
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box py-4 px-6 bg-green-700 rounded-xl shadow-lg max-w-lg mx-auto">
        <p className="font-medium sm:text-lg text-center text-white">
          Explore my portfolio of innovative projects, each reflecting creativity, skill, and dedication 
          to solving real-world problems.
        </p>

        <Link
          to="/projects"
          className="neo-brutalism-white neo-btn mt-4 inline-flex items-center justify-center gap-2"
        >
          Visit my work
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box py-4 px-6 bg-purple-700 rounded-xl shadow-lg max-w-lg mx-auto">
        <p className="font-medium sm:text-lg text-center text-white">
          Looking to bring your project ideas to life? <br />
          Let's collaborate and create something impactful together.
        </p>

        <Link
          to="/contact"
          className="neo-brutalism-white neo-btn mt-4 inline-flex items-center justify-center gap-2"
        >
          Get In Touch
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
