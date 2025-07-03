import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import PricingSection from '../components/PricingSection';
import SampleGallery from '../components/SampleGallery';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <SampleGallery />
      <PricingSection />
      <FAQSection />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;