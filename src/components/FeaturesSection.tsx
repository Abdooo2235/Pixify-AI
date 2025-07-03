import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Globe, Palette, Clock } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'Get enhanced images in seconds with our optimized AI algorithms',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your images are processed securely and deleted after enhancement',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Cpu,
      title: 'Advanced AI Technology',
      description: 'Powered by state-of-the-art machine learning models',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multiple Formats',
      description: 'Support for PNG, JPG, JPEG, and WEBP formats',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Color Enhancement',
      description: 'Automatic color correction and vibrancy enhancement',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Clock,
      title: 'Batch Processing',
      description: 'Process multiple images simultaneously to save time',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to enhance your images with professional-grade AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;