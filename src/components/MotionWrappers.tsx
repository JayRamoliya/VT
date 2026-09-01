import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

// Premium corporate easing: cubic-bezier(0.22, 1, 0.36, 1)
export const corporateEase = [0.22, 1, 0.36, 1] as const;

interface MotionBoxProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export const FadeUp: React.FC<MotionBoxProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: corporateEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn: React.FC<MotionBoxProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: corporateEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<MotionBoxProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: corporateEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideInLeft: React.FC<MotionBoxProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: corporateEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideInRight: React.FC<MotionBoxProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: corporateEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Subtle Section Divider Component
export const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-center my-6 sm:my-10 px-4 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: corporateEase }}
        className="max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent relative flex items-center justify-center"
      >
        <span className="w-2 h-2 rounded-full bg-[#007BFF]/40 absolute" />
      </motion.div>
    </div>
  );
};
