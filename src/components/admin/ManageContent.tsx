import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Edit, Trash2, Eye, FileText, Image, DollarSign, HelpCircle, Save, X } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  status: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  status: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  status: string;
}

const ManageContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('features');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Content state management
  const [featuresContent, setFeaturesContent] = useState<Feature[]>([
    {
      id: 1,
      title: 'Lightning Fast Processing',
      description: 'Get enhanced images in seconds with our optimized AI algorithms',
      icon: 'Zap',
      color: 'from-yellow-500 to-orange-500',
      status: 'published'
    },
    {
      id: 2,
      title: 'Secure & Private',
      description: 'Your images are processed securely and deleted after enhancement',
      icon: 'Shield',
      color: 'from-green-500 to-blue-500',
      status: 'published'
    },
    {
      id: 3,
      title: 'Advanced AI Technology',
      description: 'Powered by state-of-the-art machine learning models',
      icon: 'Cpu',
      color: 'from-purple-500 to-pink-500',
      status: 'draft'
    }
  ]);

  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([
    {
      id: 1,
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: ['50 images per month', '2x upscaling', 'Basic support'],
      popular: false,
      status: 'published'
    },
    {
      id: 2,
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for professionals and businesses',
      features: ['500 images per month', '4x upscaling', 'Priority support', 'API access'],
      popular: true,
      status: 'published'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large-scale operations and teams',
      features: ['Unlimited images', '8x upscaling', '24/7 support', 'Custom integrations'],
      popular: false,
      status: 'published'
    }
  ]);

  const [faqItems, setFaqItems] = useState<FAQ[]>([
    {
      id: 1,
      question: 'How does AI image upscaling work?',
      answer: 'Our AI uses advanced machine learning algorithms trained on millions of images to predict and add detail to low-resolution images.',
      status: 'published'
    },
    {
      id: 2,
      question: 'What image formats are supported?',
      answer: 'We support all major image formats including PNG, JPG, JPEG, and WEBP.',
      status: 'published'
    },
    {
      id: 3,
      question: 'How long does processing take?',
      answer: 'Processing time depends on your subscription plan and image size.',
      status: 'draft'
    }
  ]);

  // Form state for editing
  const [formData, setFormData] = useState<any>({});

  const contentSections = [
    { id: 'features', label: 'Features', icon: FileText },
    { id: 'pricing', label: 'Pricing Plans', icon: DollarSign },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'gallery', label: 'Sample Gallery', icon: Image },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400';
      case 'archived': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    
    // Initialize form data based on section
    switch (activeSection) {
      case 'features':
        setFormData({
          title: '',
          description: '',
          icon: 'Zap',
          color: 'from-purple-500 to-blue-500',
          status: 'draft'
        });
        break;
      case 'pricing':
        setFormData({
          name: '',
          price: '$',
          period: '/month',
          description: '',
          features: [''],
          popular: false,
          status: 'draft'
        });
        break;
      case 'faq':
        setFormData({
          question: '',
          answer: '',
          status: 'draft'
        });
        break;
    }
    
    setEditingItem(null);
    setShowEditModal(true);
  };

  const handleEdit = (item: any) => {
    setIsAddingNew(false);
    setEditingItem(item);
    setFormData({ ...item });
    setShowEditModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      switch (activeSection) {
        case 'features':
          setFeaturesContent(prev => prev.filter(item => item.id !== id));
          break;
        case 'pricing':
          setPricingPlans(prev => prev.filter(item => item.id !== id));
          break;
        case 'faq':
          setFaqItems(prev => prev.filter(item => item.id !== id));
          break;
      }
    }
  };

  const handleSave = () => {
    if (isAddingNew) {
      // Generate new ID
      const newId = Date.now();
      const newItem = { ...formData, id: newId };
      
      switch (activeSection) {
        case 'features':
          setFeaturesContent(prev => [...prev, newItem]);
          break;
        case 'pricing':
          setPricingPlans(prev => [...prev, newItem]);
          break;
        case 'faq':
          setFaqItems(prev => [...prev, newItem]);
          break;
      }
    } else {
      // Update existing item
      switch (activeSection) {
        case 'features':
          setFeaturesContent(prev => prev.map(item => 
            item.id === editingItem.id ? { ...formData, id: editingItem.id } : item
          ));
          break;
        case 'pricing':
          setPricingPlans(prev => prev.map(item => 
            item.id === editingItem.id ? { ...formData, id: editingItem.id } : item
          ));
          break;
        case 'faq':
          setFaqItems(prev => prev.map(item => 
            item.id === editingItem.id ? { ...formData, id: editingItem.id } : item
          ));
          break;
      }
    }
    
    setShowEditModal(false);
    setFormData({});
    setEditingItem(null);
    setIsAddingNew(false);
  };

  const handleFormChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...(formData.features || [])];
    newFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({ 
      ...prev, 
      features: [...(prev.features || []), ''] 
    }));
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_: any, i: number) => i !== index);
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'features':
        return (
          <div className="space-y-4">
            {featuresContent.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-white font-bold">{feature.icon[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-700 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                      {feature.status}
                    </span>
                    <button
                      onClick={() => handleEdit(feature)}
                      className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(feature.id)}
                      className="p-2 text-gray-700 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-4">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                        {plan.popular && (
                          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 text-sm">{plan.description}</p>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-700 ml-1">{plan.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                      {plan.status}
                    </span>
                    <button
                      onClick={() => handleEdit(plan)}
                      className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(plan.id)}
                      className="p-2 text-gray-700 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 text-sm">{faq.answer}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(faq.status)}`}>
                      {faq.status}
                    </span>
                    <button
                      onClick={() => handleEdit(faq)}
                      className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(faq.id)}
                      className="p-2 text-gray-700 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'gallery':
        return (
          <div className="text-center py-12">
            <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Gallery Management</h3>
            <p className="text-gray-700">Gallery management functionality coming soon...</p>
          </div>
        );

      default:
        return <div>Select a content section to manage</div>;
    }
  };

  const renderEditModal = () => {
    if (!showEditModal) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={() => setShowEditModal(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {isAddingNew ? 'Add New' : 'Edit'} {
                activeSection === 'features' ? 'Feature' : 
                activeSection === 'pricing' ? 'Plan' : 
                'FAQ'
              }
            </h3>
            <button
              onClick={() => setShowEditModal(false)}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            {activeSection === 'features' && (
              <>
                <div>
                  <label className="block text-gray-800 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => handleFormChange('title', e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 mb-2">Description</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => handleFormChange('description', e.target.value)}
                    rows={3}
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-800 mb-2">Icon</label>
                    <select
                      value={formData.icon || 'Zap'}
                      onChange={(e) => handleFormChange('icon', e.target.value)}
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Zap">Zap</option>
                      <option value="Shield">Shield</option>
                      <option value="Cpu">Cpu</option>
                      <option value="Globe">Globe</option>
                      <option value="Palette">Palette</option>
                      <option value="Clock">Clock</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-800 mb-2">Color</label>
                    <select
                      value={formData.color || 'from-purple-500 to-blue-500'}
                      onChange={(e) => handleFormChange('color', e.target.value)}
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="from-yellow-500 to-orange-500">Yellow to Orange</option>
                      <option value="from-green-500 to-blue-500">Green to Blue</option>
                      <option value="from-purple-500 to-pink-500">Purple to Pink</option>
                      <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
                      <option value="from-pink-500 to-rose-500">Pink to Rose</option>
                      <option value="from-indigo-500 to-purple-500">Indigo to Purple</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {activeSection === 'pricing' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-800 mb-2">Plan Name</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 mb-2">Price</label>
                    <input
                      type="text"
                      value={formData.price || ''}
                      onChange={(e) => handleFormChange('price', e.target.value)}
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-800 mb-2">Description</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => handleFormChange('description', e.target.value)}
                    rows={2}
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 mb-2">Features</label>
                  {(formData.features || []).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter feature"
                      />
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="p-2 text-red-500 hover:text-red-700 rounded-lg transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeature}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                  >
                    + Add Feature
                  </button>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.popular || false}
                      onChange={(e) => handleFormChange('popular', e.target.checked)}
                      className="mr-2 rounded border-gray-200 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">Mark as popular plan</span>
                  </label>
                </div>
              </>
            )}

            {activeSection === 'faq' && (
              <>
                <div>
                  <label className="block text-gray-800 mb-2">Question</label>
                  <input
                    type="text"
                    value={formData.question || ''}
                    onChange={(e) => handleFormChange('question', e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 mb-2">Answer</label>
                  <textarea
                    value={formData.answer || ''}
                    onChange={(e) => handleFormChange('answer', e.target.value)}
                    rows={4}
                    className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-gray-800 mb-2">Status</label>
              <select
                value={formData.status || 'draft'}
                onChange={(e) => handleFormChange('status', e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                <Save size={16} />
                <span>{isAddingNew ? 'Add' : 'Save'} {
                  activeSection === 'features' ? 'Feature' : 
                  activeSection === 'pricing' ? 'Plan' : 
                  'FAQ'
                }</span>
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Content</h1>
        <p className="text-gray-700">Update and manage content displayed on the landing page</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Content Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Content Sections</h3>
          <nav className="space-y-2">
            {contentSections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                  ${activeSection === section.id 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <section.icon size={20} />
                <span className="font-medium">{section.label}</span>
              </motion.button>
            ))}
          </nav>
        </motion.div>

        {/* Content Management Area */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {contentSections.find(s => s.id === activeSection)?.label}
              </h3>
              {activeSection !== 'gallery' && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddNew}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
                >
                  <Plus size={16} />
                  <span>Add New</span>
                </motion.button>
              )}
            </div>

            {renderContent()}
          </motion.div>
        </div>
      </div>

      {renderEditModal()}
    </div>
  );
};

export default ManageContent;