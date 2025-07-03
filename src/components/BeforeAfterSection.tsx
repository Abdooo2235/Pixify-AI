import React from 'react';
import { motion } from 'framer-motion';
import { 
  ReactCompareSlider, 
  ReactCompareSliderImage 
} from 'react-compare-slider';

const BeforeAfterSection: React.FC = () => {
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
            See the <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the dramatic improvement in image quality with our AI enhancement technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 overflow-hidden">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Before" />}
                itemTwo={<ReactCompareSliderImage src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="After" />}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Before</h3>
                <p className="text-gray-700">Low resolution, pixelated</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">After</h3>
                <p className="text-gray-700">Sharp, detailed, enhanced</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;