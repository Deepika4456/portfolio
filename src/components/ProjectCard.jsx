import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  image,
  featured,
  title,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700"
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        {featured && (
          <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
            Featured
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover hover:scale-110 transition duration-500"
        />

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">

          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 px-5 py-3 rounded-lg transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;