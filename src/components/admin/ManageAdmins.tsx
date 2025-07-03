import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Edit, Trash2, Shield, Crown, User, Mail, Calendar, MoreVertical } from 'lucide-react';

const ManageAdmins: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('all');

  const admins = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@pixifyai.com',
      role: 'Super Admin',
      status: 'active',
      lastLogin: '2 hours ago',
      joinDate: '2023-01-15',
      permissions: ['all']
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@pixifyai.com',
      role: 'Content Manager',
      status: 'active',
      lastLogin: '1 day ago',
      joinDate: '2023-03-20',
      permissions: ['content', 'users']
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@pixifyai.com',
      role: 'System Admin',
      status: 'active',
      lastLogin: '30 minutes ago',
      joinDate: '2023-02-10',
      permissions: ['system', 'processing']
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david@pixifyai.com',
      role: 'Moderator',
      status: 'inactive',
      lastLogin: '1 week ago',
      joinDate: '2023-06-05',
      permissions: ['users']
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Super Admin': return 'bg-red-500/20 text-red-400';
      case 'System Admin': return 'bg-purple-500/20 text-purple-400';
      case 'Content Manager': return 'bg-blue-500/20 text-blue-400';
      case 'Moderator': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'inactive': return 'bg-gray-500/20 text-gray-400';
      case 'suspended': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Super Admin': return Crown;
      case 'System Admin': return Shield;
      case 'Content Manager': return Edit;
      case 'Moderator': return User;
      default: return User;
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Admins</h1>
        <p className="text-gray-700">Add, update, and manage administrator accounts and permissions</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search administrators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Roles</option>
              <option value="Super Admin">Super Admin</option>
              <option value="System Admin">System Admin</option>
              <option value="Content Manager">Content Manager</option>
              <option value="Moderator">Moderator</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              <Plus size={20} />
              <span>Add Admin</span>
            </motion.button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-gray-800 font-medium">Administrator</th>
                <th className="text-left py-4 px-4 text-gray-800 font-medium">Role</th>
                <th className="text-left py-4 px-4 text-gray-800 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-800 font-medium">Last Login</th>
                <th className="text-left py-4 px-4 text-gray-800 font-medium">Join Date</th>
                <th className="text-left py-4 px-4 text-gray-800 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => {
                const RoleIcon = getRoleIcon(admin.role);
                return (
                  <motion.tr
                    key={admin.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {admin.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium">{admin.name}</p>
                          <p className="text-gray-700 text-sm flex items-center">
                            <Mail size={14} className="mr-1" />
                            {admin.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <RoleIcon size={16} className="text-gray-600" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(admin.role)}`}>
                          {admin.role}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(admin.status)}`}>
                        {admin.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-700">{admin.lastLogin}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center text-gray-700">
                        <Calendar size={14} className="mr-1" />
                        {admin.joinDate}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add Admin Modal */}
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowAddModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-effect rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Add New Administrator</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-800 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-800 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-800 mb-2">Role</label>
                <select className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Select role</option>
                  <option>System Admin</option>
                  <option>Content Manager</option>
                  <option>Moderator</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-800 mb-2">Permissions</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded border-gray-200 text-purple-500 focus:ring-purple-500" />
                    <span className="text-gray-700">User Management</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded border-gray-200 text-purple-500 focus:ring-purple-500" />
                    <span className="text-gray-700">Content Management</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded border-gray-200 text-purple-500 focus:ring-purple-500" />
                    <span className="text-gray-700">System Settings</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded border-gray-200 text-purple-500 focus:ring-purple-500" />
                    <span className="text-gray-700">Image Processing</span>
                  </label>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Add Admin
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ManageAdmins;