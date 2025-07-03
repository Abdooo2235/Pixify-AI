import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { motion } from 'framer-motion';
import { Upload, Image, FileText, AlertCircle } from 'lucide-react';

const DragDropUpload: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop: (item: any) => {
      if (item.files && item.files.length > 0) {
        handleFiles(Array.from(item.files));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setUploadedFiles(imageFiles);
    
    if (imageFiles.length > 0) {
      setIsProcessing(true);
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
      }, 3000);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleFiles(Array.from(files));
    }
  };

  return (
    <div className="w-full">
      <motion.div
        ref={drop}
        className={`
          drag-zone glass-effect rounded-3xl p-12 text-center transition-all duration-300
          ${isOver && canDrop ? 'active' : ''}
          ${isProcessing ? 'pulse-glow' : ''}
        `}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {isProcessing ? (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Image className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Processing Your Image</h3>
              <p className="text-gray-700">AI is working its magic...</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </div>
          </div>
        ) : uploadedFiles.length > 0 ? (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <Image className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Files Ready!</h3>
              <p className="text-gray-700">{uploadedFiles.length} image(s) uploaded successfully</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="bg-gray-100 rounded-lg px-3 py-1 text-gray-800 text-sm">
                  {file.name}
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsProcessing(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enhance Images
            </motion.button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto floating-animation">
              <Upload className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Drop your images here
              </h3>
              <p className="text-gray-700 mb-6">
                or click to browse your files
              </p>
            </div>
            <div>
              <input
                type="file"
                id="file-upload"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-block"
              >
                Choose Files
              </label>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <FileText size={16} />
                <span>PNG, JPG, JPEG</span>
              </div>
              <div className="flex items-center space-x-1">
                <AlertCircle size={16} />
                <span>Max 10MB</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DragDropUpload;