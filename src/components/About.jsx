import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaUserGraduate className="text-3xl text-blue-400" />,
      title: "Education",
      value:
        "B.Tech in Data Science\nVignan's Institute of Information Technology",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-400" />,
      title: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-400" />,
      title: "Career Goal",
      value: "Data Analyst / AI Engineer",
    },
    {
      icon: <FaLaptopCode className="text-3xl text-blue-400" />,
      title: "Interests",
      value: "Data Analytics, AI, ML, Dashboard Development",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg leading-8">
            I am a passionate and enthusiastic Data Science student with a
            strong interest in Data Analytics, Artificial Intelligence,
            Machine Learning, and Full Stack Development. I enjoy building
            real-world projects that combine analytics with modern web
            technologies to solve practical business problems.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I specialize in transforming raw data into meaningful insights
              using Python, SQL, Excel, Power BI, and Machine Learning.
              Alongside analytics, I enjoy developing AI-powered web
              applications using React, FastAPI, Streamlit, and Vercel.

              <br /><br />

              My goal is to continuously improve my technical skills while
              contributing to innovative projects that create real-world
              impact through data-driven decision making.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <h4 className="text-4xl font-bold text-blue-400">
                  10+
                </h4>
                <p className="text-gray-400 mt-2">
                  Technologies
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <h4 className="text-4xl font-bold text-blue-400">
                  3+
                </h4>
                <p className="text-gray-400 mt-2">
                  Major Projects
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition duration-300 shadow-lg"
              >
                <div className="flex items-start gap-5">

                  <div>{card.icon}</div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {card.title}
                    </h3>

                    <p className="text-gray-400 whitespace-pre-line mt-2 leading-7">
                      {card.value}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;