import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        '50 images per month',
        '2x upscaling',
        'Basic support',
        'Standard processing speed'
      ],
      popular: false,
      icon: Check
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for professionals and businesses',
      features: [
        '500 images per month',
        '4x upscaling',
        'Priority support',
        'Fast processing speed',
        'Batch processing',
        'API access'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large-scale operations and teams',
      features: [
        'Unlimited images',
        '8x upscaling',
        '24/7 dedicated support',
        'Lightning fast processing',
        'Advanced batch processing',
        'Full API access',
        'Custom integrations',
        'White-label options'
      ],
      popular: false,
      icon: Zap
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the perfect plan for your image enhancement needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`
                glass-effect rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300
                ${plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}
              `}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full mb-6 inline-block">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-700 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-700 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-800">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300
                  ${plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;