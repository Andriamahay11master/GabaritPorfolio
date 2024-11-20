import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Section id="home" className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=faces"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold mb-4"
          >
            John Doe
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Full Stack Developer
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with 5 years of experience building web applications.
              I love creating elegant solutions to complex problems and am constantly learning new technologies
              to stay at the forefront of web development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing technical
              blog posts, or exploring the latest web technologies.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Frontend', icon: Code, skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
              { title: 'Backend', icon: Briefcase, skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
              { title: 'Tools', icon: ExternalLink, skills: ['Git', 'Docker', 'AWS', 'CI/CD'] },
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <category.icon className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;