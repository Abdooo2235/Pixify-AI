import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/admin/Sidebar';
import Overview from '../components/admin/Overview';
import UserManagement from '../components/admin/UserManagement';
import ImageProcessing from '../components/admin/ImageProcessing';
import SystemSettings from '../components/admin/SystemSettings';
import ManageAdmins from '../components/admin/ManageAdmins';
import ManageContent from '../components/admin/ManageContent';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'users':
        return <UserManagement />;
      case 'processing':
        return <ImageProcessing />;
      case 'admins':
        return <ManageAdmins />;
      case 'content':
        return <ManageContent />;
      case 'settings':
        return <SystemSettings />;
      default:
        return <Overview />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex"
    >
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;