import { motion } from 'motion/react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Budget Buddy App',
      description: 'Built a finance web app/hackathon project that tracks income, expenses, and savings goals with an intuitive dashboard. Integrated agentic AI to enforce contextual insights, smart notifications, and spending comparisons.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Agentic AI'],
      year: 'Year 2',
      category: 'AI & Full-Stack',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Schoolsearch Project',
      description: 'Collaborated in a team to develop a full-stack web application enabling Singapore students to input their address and scores to receive a proximity-ranked list of schools with advanced filtering and peer reviews.',
      tech: ['Java', 'React', 'Vite', 'Java Spring Boot'],
      year: 'Year 2',
      category: 'Full-Stack',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      title: 'Library Management System',
      description: 'Developed book search and borrowing/returning functionalities using Object-Oriented Programming (OOP) principles.',
      tech: ['Java', 'OOP'],
      year: 'Year 2',
      category: 'Backend',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'BTO Application Project',
      description: 'Developed a university group project simulating a HDB BTO system, enabling buyers to apply for flats and managers to oversee applications.',
      tech: ['Java'],
      year: 'Year 1',
      category: 'System Design',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Automated Team Allocation System',
      description: 'Collaborated in a team of 5 to design an algorithm that efficiently assigned 5,000 students into balanced project groups based on school, gender, and CGPA.',
      tech: ['Python', 'Data Visualization'],
      year: 'Year 1',
      category: 'Algorithms',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Fighter Robot Project',
      description: 'Designed and coded a simulated fighter robot in Java to compete against classmates\' robots, implementing logic for health, attacks, and survival.',
      tech: ['Java', 'Game Logic'],
      year: 'Grade 12',
      category: 'Game Dev',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Space Junk Shooter Game',
      description: 'Created an arcade-style shooting game themed around space junk removal. Designed and programmed all game mechanics from scratch to raise awareness about orbital debris.',
      tech: ['Python', 'Pygame'],
      year: 'Grade 11',
      category: 'Game Dev',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-4xl mb-2 bg-gradient-to-r from-purple-900 to-pink-800 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
          <p className="text-gray-600 text-lg">
            A collection of projects showcasing my journey in software development
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative bg-white rounded-2xl border border-purple-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl text-purple-900">{project.title}</h3>
                        <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs`}>
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm border border-purple-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-purple-100">
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
