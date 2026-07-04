import {
  FaCode,
  FaChartBar,
  FaBrain,
  FaTools,
  FaCloud,
  FaLaptopCode,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

const skills = [
  {
    title: "Programming",
    icon: <FaCode />,
    items: ["Python", "SQL", "JavaScript", "React"],
  },

  {
    title: "Data Analytics",
    icon: <FaChartBar />,
    items: ["Excel", "Power BI", "EDA", "Visualization"],
  },

  {
    title: "Machine Learning",
    icon: <FaBrain />,
    items: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
  },

  {
    title: "Databases",
    icon: <FaDatabase />,
    items: ["MySQL", "SQLite", "SQL"],
  },

  {
    title: "Backend",
    icon: <FaRobot />,
    items: ["FastAPI", "REST APIs", "AI Integration"],
  },

  {
    title: "Deployment",
    icon: <FaCloud />,
    items: ["Streamlit", "Vercel", "GitHub"],
  },

  {
    title: "Development",
    icon: <FaLaptopCode />,
    items: ["VS Code", "Git", "GitHub"],
  },

  {
    title: "Tools",
    icon: <FaTools />,
    items: ["Jupyter", "Colab", "Kaggle"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            My <span className="text-blue-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies I use for Data Analytics, AI, and Full Stack
            Development.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-4xl text-blue-400 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-5">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {skill.items.map((item, i) => (

                  <span
                    key={i}
                    className="bg-slate-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 transition"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;