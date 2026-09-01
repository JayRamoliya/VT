import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center p-8 bg-white">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-14 h-14 rounded-2xl border-3 border-gray-200 border-t-[#007BFF]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[#007BFF] animate-pulse" />
        </div>
      </div>
      <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
        Loading Corporate Catalogue...
      </span>
    </div>
  );
};
