import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-2xl mt-16 shadow-lg">

      <p className="cta-text text-lg md:text-xl font-semibold text-white mb-4 md:mb-0">
        🚀 Have a project idea? <br className="sm:block hidden" />
        Let’s build something amazing together!
      </p>


      <Link
        to="/contact"
        className="btn bg-white text-blue-700 px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300 font-semibold shadow-md"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
