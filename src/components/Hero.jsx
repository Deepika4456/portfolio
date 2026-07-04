import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg font-medium mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Deepika{" "}
            <span className="text-blue-400">
              Surisetty
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Data Analyst",
              2000,
              "Python Developer",
              2000,
              "Power BI Enthusiast",
              2000,
              "Machine Learning Learner",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="h2"
            className="text-2xl md:text-3xl text-blue-300 font-semibold mt-5"
          />

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">
            Passionate about transforming raw data into actionable insights
            using <span className="text-white">Python</span>,
            <span className="text-white"> SQL</span>,
            <span className="text-white"> Power BI</span>,
            <span className="text-white"> Machine Learning</span>,
            and <span className="text-white">AI</span>.
            I enjoy building intelligent applications, interactive dashboards,
            and solving real-world business problems through data.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

            <a href="#projects">
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg transition">
                View Projects
              </button>
            </a>

            <a href="/Deepika_Resume.pdf" download>
              <button className="border border-blue-500 hover:bg-blue-500 px-8 py-3 rounded-xl font-semibold transition">
                Download Resume
              </button>
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center lg:justify-start mt-10 text-3xl">

            <a
              href="https://github.com/Deepika4456"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/surisetty-deepika-63aa172a1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:deepu.nihi@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt="Deepika"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;