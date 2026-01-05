import { motion } from 'motion/react';
import { Code, Palette, Database, Brain, Globe } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      color: 'purple',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 90 },
        { name: 'C', level: 85 },
        { name: 'C++', level: 85 },
      ],
    },
    {
      category: 'Frontend Development',
      icon: Palette,
      color: 'pink',
      skills: [
        { name: 'React', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vite', level: 80 },
      ],
    },
    {
      category: 'Backend & Tools',
      icon: Database,
      color: 'blue',
      skills: [
        { name: 'Java Spring Boot', level: 75 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'OOP Principles', level: 90 },
        { name: 'Data Structures & Algorithms', level: 85 },
      ],
    },
    {
      category: 'Emerging Technologies',
      icon: Brain,
      color: 'orange',
      skills: [
        { name: 'Artificial Intelligence', level: 75 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Agentic AI', level: 65 },
      ],
    },
  ];

  const languages = [
    { name: 'English', level: 5, flag: '🇬🇧' },
    { name: 'Hindi', level: 4, flag: '🇮🇳' },
    { name: 'Malayalam', level: 4, flag: '🇮🇳' },
    { name: 'Tamil', level: 3, flag: '🇮🇳' },
  ];

  const softSkills = [
    'Communication',
    'Analytical Thinking',
    'Team Collaboration',
    'Problem Solving',
    'Leadership',
    'Time Management',
    'Adaptability',
    'Creative Thinking',
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
          <p className="text-gray-600 text-lg">
            Technical proficiencies and soft skills I've developed
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative bg-white rounded-2xl border border-purple-100 p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-purple-900">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-purple-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className={`h-full bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-white rounded-2xl border border-orange-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl text-orange-900">Languages</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100"
                >
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <p className="text-gray-800 font-semibold mb-3">{lang.name}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < lang.level
                            ? 'bg-gradient-to-r from-orange-400 to-pink-500'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-white rounded-2xl border border-purple-100 p-8">
            <h3 className="text-2xl text-purple-900 mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-900 rounded-full border-2 border-purple-200 font-medium hover:border-purple-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
