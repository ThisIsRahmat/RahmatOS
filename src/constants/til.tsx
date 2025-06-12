export interface HabitEntry {
  dayNumber: number;
  date: string;
  type: 'ai' | 'python';
  count: number;
  activity: string;
}

export const habits: HabitEntry[] = [
  {
    dayNumber: 1,
    date: "2024-03-20",
    type: "ai",
    count: 45,
    activity: "Started Boot.dev course on building AI coding agents"
  },
  {
    dayNumber: 1,
    date: "2024-03-20",
    type: "python",
    count: 30,
    activity: "Completed Python data structures module"
  },
  {
    dayNumber: 2,
    date: "2024-03-19",
    type: "ai",
    count: 60,
    activity: "Built a simple AI chatbot using Python"
  },
  {
    dayNumber: 2,
    date: "2024-03-19",
    type: "python",
    count: 45,
    activity: "Practiced Python list comprehensions"
  },
  // Add more entries following the same pattern
]; 