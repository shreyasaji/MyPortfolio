import { motion } from 'motion/react';
import { Award, Trophy, GraduationCap, MapPin, Calendar } from 'lucide-react';

export function CertificationsSection() {
  const achievements = [
    {
      title: 'Agentic AI Hackathon 2025',
      issuer: 'SimplifyNext × AWS',
      date: 'January 2025',
      status: 'Semi-finalist',
      description: 'Competed in a prestigious AI hackathon, reaching the semi-finals with innovative solutions.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Artificial Intelligence Foundations: Machine Learning',
      issuer: 'LinkedIn Learning',
      date: '2024',
      status: 'Certified',
      description: 'Comprehensive course covering ML fundamentals and AI applications.',
      icon: Award,
      color: 'from-blue-400 to-purple-500',
    },
  ];

  const education = [
    {
      degree: 'Bachelors of Computing in Computer Science',
      institution: 'Nanyang Technological University',
      location: 'Singapore',
      period: '2024 - Present',
      description: 'Pursuing Computer Science with focus on AI/ML and software development.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'High School Diploma',
      institution: 'White Oaks Secondary School',
      location: 'Canada',
      period: '2022 - 2024',
      description: 'Completed high school education with strong focus on STEM subjects.',
      color: 'from-blue-500 to-teal-500',
    },
    {
      degree: 'GCE O Level',
      institution: 'Pasir Ris Crest Secondary School',
      location: 'Singapore',
      period: '2018 - 2021',
      description: 'Triple Science and Assistant Sergeant Major and Freestyle Exhibition Drill In-Charge of NCC (girls)',
      color: 'from-green-500 to-emerald-500',
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
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
          <p className="text-gray-600 text-lg">
            My academic journey and professional recognitions
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-orange-600" />
            <h3 className="text-2xl text-purple-900">Certifications & Achievements</h3>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-white rounded-2xl border border-purple-100 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <achievement.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-xl text-purple-900 mb-1">{achievement.title}</h4>
                            <p className="text-purple-600">{achievement.issuer}</p>
                          </div>
                          <span className={`px-4 py-1 bg-gradient-to-r ${achievement.color} text-white rounded-full text-sm font-semibold`}>
                            {achievement.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{achievement.description}</p>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-purple-600" />
            <h3 className="text-2xl text-purple-900">Education</h3>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300 hidden md:block" />
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <div className="md:ml-20">
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity`} />
                      <div className="relative bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="absolute -left-20 top-8 w-16 h-16 bg-gradient-to-br from-white to-purple-50 rounded-full border-4 border-purple-100 hidden md:flex items-center justify-center">
                          <div className={`w-8 h-8 bg-gradient-to-br ${edu.color} rounded-full`} />
                        </div>
                        
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl text-purple-900 mb-1">{edu.degree}</h4>
                            <p className="text-purple-600 font-medium">{edu.institution}</p>
                          </div>
                          <span className={`px-4 py-1 bg-gradient-to-r ${edu.color} bg-opacity-10 text-purple-700 rounded-full text-sm font-medium whitespace-nowrap ml-4`}>
                            {edu.period}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{edu.description}</p>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
