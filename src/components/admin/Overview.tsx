import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Image, DollarSign, Activity, Clock } from 'lucide-react';

const Overview: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '12,453', change: '+8.2%', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { title: 'Images Processed', value: '2.1M', change: '+12.5%', icon: Image, color: 'from-purple-500 to-pink-500' },
    { title: 'Revenue', value: '$45,230', change: '+15.3%', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { title: 'Active Sessions', value: '1,234', change: '+5.7%', icon: Activity, color: 'from-orange-500 to-red-500' },
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'Uploaded 5 images', time: '2 minutes ago', status: 'processing' },
    { user: 'Jane Smith', action: 'Completed batch processing', time: '5 minutes ago', status: 'completed' },
    { user: 'Mike Johnson', action: 'Upgraded to Pro plan', time: '10 minutes ago', status: 'success' },
    { user: 'Sarah Wilson', action: 'Downloaded enhanced images', time: '15 minutes ago', status: 'completed' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-700">Monitor your platform's performance and user activity</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1 text-green-400 text-sm">
                <TrendingUp size={16} />
                <span>{stat.change}</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-700 text-sm">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.user}</p>
                  <p className="text-gray-700 text-sm">{activity.action}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-gray-700 text-sm">{activity.time}</span>
                  </div>
                  <div className={`
                    px-2 py-1 rounded-full text-xs font-medium mt-1
                    ${activity.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' : 
                      activity.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                      'bg-blue-500/20 text-blue-400'}
                  `}>
                    {activity.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-800">API Response Time</span>
              <span className="text-green-400 font-semibold">145ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Server Uptime</span>
              <span className="text-green-400 font-semibold">99.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Processing Queue</span>
              <span className="text-yellow-400 font-semibold">23 items</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Storage Usage</span>
              <span className="text-blue-400 font-semibold">67%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;