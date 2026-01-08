import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Phone, ExternalLink } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shreya.saji.08@gmail.com',
      link: 'mailto:shreya.saji.08@gmail.com',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      description: 'Send me an email',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+65 8925 0023',
      link: 'tel:+6589250023',
      color: 'from-blue-500 to-teal-500',
      bgColor: 'from-blue-50 to-teal-50',
      description: 'Give me a call',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '43 Simel Rise, Singapore',
      link: null,
      color: 'from-orange-500 to-pink-500',
      bgColor: 'from-orange-50 to-pink-50',
      description: 'Based in Singapore',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me on LinkedIn',
      link: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      description: 'Professional network',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'from-gray-50 to-gray-100',
      description: 'Check out my code',
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
            Contact Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
          <p className="text-gray-600 text-lg">
            Here's how you can reach out to me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className={`relative bg-gradient-to-r ${info.bgColor} rounded-2xl border border-purple-100 p-6 group-hover:border-purple-200 transition-all h-full`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg text-purple-900">{info.label}</h3>
                      {info.link && (
                        <ExternalLink className="w-4 h-4 text-purple-400" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{info.description}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-purple-600 transition-colors font-medium break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative group overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500" />
          <div className="relative p-8 text-center text-white">
            <h3 className="text-2xl mb-3">Open to Opportunities</h3>
            <p className="text-purple-100 max-w-2xl mx-auto mb-4">
              I'm currently looking for opportunities in software development, AI/ML projects, 
              and full-stack development roles. Feel free to reach out through any of the channels above!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Software Development', 'AI/ML', 'Full-Stack', 'Internships'].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
