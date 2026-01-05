import { motion } from 'motion/react';
import { GraduationCap, Target, Heart, Zap } from 'lucide-react';

export function AboutSection() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-4xl mb-2 bg-gradient-to-r from-purple-900 to-pink-800 bg-clip-text text-transparent">
            Hello, I'm Shreya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I'm a Year 2 student at <span className="font-semibold text-purple-900">Nanyang Technological University, Singapore</span>, 
            pursuing a Bachelor's in Computing in Computer Science. With a strong foundation 
            in Python, Java, C, and C++, and a growing interest in Artificial Intelligence and 
            Machine Learning, I enjoy solving problems through code, developing innovative projects, 
            and contributing to teams that push the boundaries of technology.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With hands-on experience in software development and algorithm design, I'm passionate 
            about applying data-driven approaches to real-world challenges. I thrive in collaborative 
            environments, continuously seek to improve my technical skills, and am eager to take on 
            opportunities that allow me to learn, innovate, and make a meaningful impact.
          </p>
        </div>

        {/* Creative Interests Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border-2 border-orange-200 h-full">
              <div className="text-4xl mb-4">💃</div>
              <h3 className="text-2xl text-orange-900 mb-3">Bharatanatyam</h3>
              <p className="text-gray-700">
                Dancing since the age of five, this classical Indian art form has taught me 
                <span className="font-semibold text-orange-900"> expression, dedication, and grace</span>. 
                The discipline and precision required mirror the qualities I bring to software development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border-2 border-purple-200 h-full">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl text-purple-900 mb-3">Photography</h3>
              <p className="text-gray-700">
                A creative outlet where I <span className="font-semibold text-purple-900">capture small moments 
                and everyday beauty</span>. This hobby sharpens my eye for detail and helps me 
                appreciate aesthetics in both art and code.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What Drives Me */}
        <div className="space-y-4">
          <h3 className="text-2xl text-purple-900 mb-6">What Drives Me</h3>
          
          {[
            {
              icon: Target,
              title: 'Problem-Solving Mindset',
              description: 'I approach every challenge as an opportunity to learn and create elegant solutions.',
              color: 'purple',
            },
            {
              icon: Zap,
              title: 'Continuous Innovation',
              description: 'Always exploring new technologies and methodologies to stay at the cutting edge.',
              color: 'pink',
            },
            {
              icon: Heart,
              title: 'Collaborative Spirit',
              description: 'I believe the best solutions come from diverse perspectives and teamwork.',
              color: 'blue',
            },
            {
              icon: GraduationCap,
              title: 'Lifelong Learning',
              description: 'From AI/ML to full-stack development, I\'m constantly expanding my knowledge.',
              color: 'orange',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/80 border border-purple-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 flex items-center justify-center flex-shrink-0`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
