import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Code2, Sparkles, Briefcase, Award, Lightbulb, Mail } from 'lucide-react';

type Tab = 'about' | 'projects' | 'certifications' | 'skills' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  const navItems = [
    { id: 'about' as Tab, label: 'About', icon: Sparkles },
    { id: 'projects' as Tab, label: 'Projects', icon: Briefcase },
    { id: 'certifications' as Tab, label: 'Education', icon: Award },
    { id: 'skills' as Tab, label: 'Skills', icon: Lightbulb },
    { id: 'contact' as Tab, label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <Code2 className="w-6 h-6 text-purple-600" />
              </div>
              <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 bg-clip-text text-transparent">
                Shreya Saji
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                Undergraduate Student
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bachelor of Computing (Hons) in Computer Science at Nanyang Technological University, Singapore
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveTab('projects');
                    setTimeout(() => {
                      const contentSection = document.getElementById('content-section');
                      contentSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  View My Work
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl blur-2xl" />
              <div className="relative">
                <ImageWithFallback
                  src="/shreya.jpeg"
                  alt="Shreya Saji"
                  className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/50"
                />

              </div>
            </motion.div>
          </div>
        </div>

        {/* Vertical Navigation + Content */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Side Navigation */}
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="lg:sticky lg:top-8 space-y-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    whileHover={{ x: 8 }}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white border border-purple-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-semibold">{item.label}</span>
                    {activeTab === item.id && (
                      <motion.div
                        layoutId="indicator"
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.nav>

            {/* Main Content */}
            <div className="flex-1 min-w-0" id="content-section">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-xl p-8 md:p-12"
                >
                  {activeTab === 'about' && <AboutSection />}
                  {activeTab === 'projects' && <ProjectsSection />}
                  {activeTab === 'certifications' && <CertificationsSection />}
                  {activeTab === 'skills' && <SkillsSection />}
                  {activeTab === 'contact' && <ContactSection />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}