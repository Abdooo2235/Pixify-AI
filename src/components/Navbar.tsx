import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, isAdmin, user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <Link to="/" className="text-xl font-bold text-gray-900">Pixify AI</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  {isAdmin && (
                    <Link 
                      to="/admin" 
                      className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{user?.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/auth" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Get Started
                </Link>
              )}
            </motion.div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
                <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
                
                {isAuthenticated ? (
                  <>
                    {isAdmin && (
                      <Link 
                        to="/admin" 
                        className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-700 text-sm">{user?.name}</span>
                    </div>
                    <button
                      onClick={logout}
                      className="text-left text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link 
                    to="/auth" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium text-center"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;