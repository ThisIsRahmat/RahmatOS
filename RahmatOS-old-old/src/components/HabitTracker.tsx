"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { habits, HabitEntry } from '@/constants/til';

export const HabitTracker = () => {
  const getColorIntensity = (minutes: number) => {
    if (minutes >= 45) return 'bg-green-500';
    if (minutes >= 30) return 'bg-green-400';
    if (minutes >= 15) return 'bg-green-300';
    return 'bg-gray-200';
  };

  // Generate empty slots for missing days
  const generateFullGrid = () => {
    const gridData: (HabitEntry | null)[] = [];
    
    // Create array of 100 slots
    for (let i = 1; i <= 100; i++) {
      const entry = habits.find(h => h.dayNumber === i);
      gridData.push(entry || null);
    }
    
    return gridData;
  };

  const getTaskPreview = (task: string) => {
    const words = task.split(' ');
    if (words.length <= 5) return task;
    return words.slice(0, 5).join(' ') + '...';
  };


  return (
    <div className="w-full">
      <div className="grid grid-cols-10 grid-rows-10 gap-0.5 max-w-4xl mx-auto">
        {generateFullGrid().map((habit, index) => (
          <motion.div
            key={`day-${index + 1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.01 }}
            className={`w-full h-8 rounded ${
              habit ? getColorIntensity(habit.time) : 'bg-gray-200'
            } group relative cursor-pointer`}
          >
                {habit && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
                <div className="font-semibold">Day {habit.dayNumber}/100</div>
                <div className="text-gray-300">{habit.date}</div>
                <div className="text-gray-400 text-xs mt-1">{habit.time} minutes</div>
                <div className="text-gray-300 text-xs mt-1">{getTaskPreview(habit.task)}</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};