import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Settings, Activity, Clock } from 'lucide-react';

const ImageProcessing: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [qualityLevel, setQualityLevel] = useState(85);
  const [processingSpeed, setProcessingSpeed] = useState('normal');

  const queueItems = [
    { id: 1, user: 'John Doe', filename: 'landscape.jpg', size: '2.1MB', status: 'processing', progress: 65 },
    { id: 2, user: 'Jane Smith', filename: 'portrait.png', size: '1.8MB', status: 'queued', progress: 0 },
    { id: 3, user: 'Mike Johnson', filename: 'photo.jpg', size: '3.2MB', status: 'completed', progress: 100 },
    { id: 4, user: 'Sarah Wilson', filename: 'image.png', size: '1.5MB', status: 'queued', progress: 0 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing': return 'bg-yellow-500/20 text-yellow-400';
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'queued': return 'bg-blue-500/20 text-blue-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Image Processing</h1>
        <p className="text-gray-700">Monitor and control image processing operations</p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Processing Controls</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${isProcessing ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className="text-gray-900 font-medium">
                  Processing Status: {isProcessing ? 'Active' : 'Stopped'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsProcessing(!isProcessing)}
                  className={`p-2 rounded-lg transition-colors ${
                    isProcessing 
                      ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                      : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  }`}
                >
                  {isProcessing ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button className="p-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition-colors">
                  <RotateCcw size={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-800 mb-2">Quality Level: {qualityLevel}%</label>
              <input
                type="range"
                min="50"
                max="100"
                value={qualityLevel}
                onChange={(e) => setQualityLevel(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-2">Processing Speed</label>
              <select
                value={processingSpeed}
                onChange={(e) => setProcessingSpeed(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="fast">Fast (Lower Quality)</option>
                <option value="normal">Normal (Balanced)</option>
                <option value="slow">Slow (Higher Quality)</option>
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">System Performance</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-800">CPU Usage</span>
              <span className="text-orange-400 font-semibold">68%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-400 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-800">Memory Usage</span>
              <span className="text-blue-400 font-semibold">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-800">GPU Usage</span>
              <span className="text-purple-400 font-semibold">82%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass-effect rounded-2xl p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Processing Queue</h3>
        
        <div className="space-y-4">
          {queueItems.map((item, index) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-900 font-medium">{item.filename}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-700">
                  <span>{item.user}</span>
                  <span>{item.size}</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{item.status === 'processing' ? 'Processing...' : item.status === 'queued' ? 'In queue' : 'Completed'}</span>
                  </div>
                </div>
                {item.status === 'processing' && (
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageProcessing;