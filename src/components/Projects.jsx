import ProjectCard from "./ProjectCard";

import resumeImg from "../assets/projects/resume.png";
import noteaiImg from "../assets/projects/note.ai.png";

function Projects() {
  const projects = [
    {
      title: "Resume Skill Gap Analyzer",
      image: resumeImg,
      featured: true,
      description:
        "An AI-powered application that analyzes resumes against job descriptions, calculates ATS match scores, identifies missing skills, and provides personalized recommendations.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "SQL",
        "AI",
        "Streamlit",
      ],
      github: "https://github.com/Deepika4456/resume_skill_gap_analyzer",
      demo: "https://resumeskillgapanalyzer-dh68muwvbxtrmvw7qrrfx7.streamlit.app/",
    },

    {
      title: "NoteAI LMS",
      image: noteaiImg,
      featured: false,
      description:
        "AI-powered Learning Management System where students upload notes, generate summaries, ask AI questions, and automatically create presentations.",
      technologies: [
        "React",
        "FastAPI",
        "Python",
        "AI",
        "Vercel",
        "GitHub",
      ],
      github: "https://github.com/yashasree-vadisala/lms-ai",
      demo: "https://note-ai-1.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            Some of my recent projects built using AI, Machine Learning,
            React, FastAPI, Python, and Data Analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              featured={project.featured}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;