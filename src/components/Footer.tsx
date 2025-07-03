import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Pixify AI</span>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Transform your images with the power of AI. Our cutting-edge technology enhances image quality while preserving original details, making every pixel count.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <LinkedIn className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-700">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@pixifyai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <p className="text-gray-700">
              © 2024 Pixify AI. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;