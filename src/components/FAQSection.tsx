import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does AI image upscaling work?',
      answer: 'Our AI uses advanced machine learning algorithms trained on millions of images to predict and add detail to low-resolution images. The AI analyzes patterns and textures to intelligently enhance your images while preserving their original quality and characteristics.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support all major image formats including PNG, JPG, JPEG, and WEBP. Images can be uploaded up to 10MB in size, and we maintain the original format in the enhanced output.'
    },
    {
      question: 'How long does processing take?',
      answer: 'Processing time depends on your subscription plan and image size. Starter plan images typically process in 30-60 seconds, Professional plan in 15-30 seconds, and Enterprise plan in 5-15 seconds.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We use industry-standard encryption for all uploads and processing. Your images are automatically deleted from our servers after processing is complete. We never store or use your images for any other purposes.'
    },
    {
      question: 'Can I upscale multiple images at once?',
      answer: 'Yes! Professional and Enterprise plans support batch processing, allowing you to upload and enhance multiple images simultaneously. This feature saves significant time for users with large image collections.'
    },
    {
      question: 'What upscaling factors are available?',
      answer: 'We offer different upscaling factors based on your plan: 2x for Starter, 4x for Professional, and up to 8x for Enterprise. Higher factors provide more dramatic enhancements but require more processing power.'
    },
    {
      question: 'Do you offer API access?',
      answer: 'Yes, Professional and Enterprise plans include API access, allowing you to integrate our image enhancement capabilities directly into your applications, websites, or workflows.'
    },
    {
      question: 'What if I\'m not satisfied with the results?',
      answer: 'We offer a 30-day money-back guarantee on all plans. If you\'re not completely satisfied with the image enhancement quality, contact our support team for a full refund.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about our AI image enhancement service
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-700" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-700" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-6"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;