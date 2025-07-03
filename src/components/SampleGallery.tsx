import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SampleGallery: React.FC = () => {
  const sampleImages = [
    {
      before: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Portrait'
    },
    {
      before: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Landscape'
    },
    {
      before: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Animal'
    },
    {
      before: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Architecture'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sample <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our collection of enhanced images across different categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleImages.map((sample, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="relative group">
                  <img
                    src={sample.before}
                    alt={`${sample.category} before`}
                    className="w-full h-32 object-cover rounded-xl opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-2">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <img
                  src={sample.after}
                  alt={`${sample.category} after`}
                  className="w-full h-32 object-cover rounded-xl"
                />
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{sample.category}</h3>
                  <p className="text-gray-700 text-sm">Enhanced with AI</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleGallery;