import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope className="text-3xl text-blue-400" />,
      title: "Email",
      value: "deepu.nihi@gmail.com",
      link: "mailto:deepu.nihi@gmail.com",
    },
    {
      icon: <FaGithub className="text-3xl text-blue-400" />,
      title: "GitHub",
      value: "github.com/Deepika4456",
      link: "https://github.com/Deepika4456",
    },
    {
      icon: <FaLinkedin className="text-3xl text-blue-400" />,
      title: "LinkedIn",
      value: "surisetty-deepika",
      link: "https://www.linkedin.com/in/surisetty-deepika-63aa172a1/",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-400" />,
      title: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
            I'm actively looking for opportunities in Data Analytics,
            Data Science, AI, and Full Stack Development.
            Feel free to connect with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-2xl p-8 flex items-center gap-6 shadow-xl hover:bg-slate-700 transition"
            >
              {item.icon}

              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;