import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shreya.saji.08@gmail.com',
      link: 'mailto:shreya.saji.08@gmail.com',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+65 8925 0023',
      link: 'tel:+6589250023',
      color: 'from-blue-500 to-teal-500',
      bgColor: 'from-blue-50 to-teal-50',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '43 Simel Rise, Singapore',
      link: null,
      color: 'from-orange-500 to-pink-500',
      bgColor: 'from-orange-50 to-pink-50',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/shreya-s-2032b8221/',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/shreyasaji/personal_projects',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'from-gray-50 to-gray-100',
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
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
          <p className="text-gray-600 text-lg">
            I'm always open to new opportunities and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl text-purple-900">Get In Touch</h3>
            </div>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className={`relative bg-gradient-to-r ${method.bgColor} rounded-xl border border-purple-100 p-4 group-hover:border-purple-200 transition-all`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-purple-600 font-semibold mb-1">{method.label}</p>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-gray-800 hover:text-purple-600 transition-colors font-medium truncate block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
            >
              <h4 className="text-lg text-purple-900 mb-3">Looking for opportunities in:</h4>
              <div className="flex flex-wrap gap-2">
                {['Software Development', 'AI/ML Projects', 'Full-Stack Development', 'Internships'].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm border border-purple-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Send className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl text-purple-900">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-400 bg-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-400 bg-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-400 bg-white resize-none transition-colors"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span className="font-semibold">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative group overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500" />
          <div className="relative p-8 text-center text-white">
            <h3 className="text-2xl mb-3">Ready to collaborate?</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
              I'd love to hear from you!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
