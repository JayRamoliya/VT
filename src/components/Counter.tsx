import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label?: string;
  subtext?: string;
  icon?: React.ReactNode;
  className?: string;
  cardClassName?: string;
  decimals?: number;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1.4,
  label,
  subtext,
  icon,
  className = '',
  cardClassName = '',
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '50px 0px -10px 0px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, show final count immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(value);
      setHasAnimated(true);
      return;
    }

    // Safety fallback: if not triggered within 500ms after mount, trigger anyway
    let safetyTimeout: number | undefined;
    if (!hasAnimated) {
      safetyTimeout = window.setTimeout(() => {
        if (!hasAnimated) {
          triggerCount();
        }
      }, 500);
    }

    if (isInView && !hasAnimated) {
      triggerCount();
    }

    function triggerCount() {
      setHasAnimated(true);
      let startTime: number | null = null;
      const durationMs = duration * 1000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // Smooth cubic ease-out curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = easeOut * value;

        if (decimals > 0) {
          setCount(parseFloat(current.toFixed(decimals)));
        } else {
          setCount(Math.floor(current));
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }

    return () => {
      if (safetyTimeout) clearTimeout(safetyTimeout);
    };
  }, [isInView, value, duration, hasAnimated, decimals]);

  // Formatted numeric string
  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : count.toLocaleString();

  // If label/subtext is provided, render the full premium metric card
  if (label || subtext) {
    return (
      <div
        ref={ref}
        className={`group p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 hover:border-[#007BFF]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${cardClassName}`}
      >
        <div className="flex items-center justify-between mb-4">
          {icon ? (
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#007BFF] flex items-center justify-center group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-250">
              {icon}
            </div>
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-[#007BFF]/80 group-hover:scale-125 transition-transform" />
          )}
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
            Direct Plant Metric
          </span>
        </div>

        <div>
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl sm:text-4xl font-black text-[#151616] tracking-tight font-tabular-nums ${className}`}>
              {prefix}
              {formattedCount}
            </span>
            {suffix && (
              <span className="text-xl sm:text-2xl font-black text-[#007BFF] tracking-tight">
                {suffix}
              </span>
            )}
          </div>

          <h4 className="text-sm font-bold text-gray-900 mt-2 line-clamp-1 group-hover:text-[#007BFF] transition-colors">
            {label}
          </h4>
          {subtext && (
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              {subtext}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Inline / minimal Counter display
  return (
    <span
      ref={ref as unknown as React.RefObject<HTMLSpanElement>}
      className={`inline-block font-tabular-nums ${className}`}
    >
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};
export default Counter;
