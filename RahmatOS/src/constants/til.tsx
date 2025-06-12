export interface HabitEntry {
  dayNumber: number;
  date: string;
  time: number;
  task: string;
}

export const habits: HabitEntry[] = [
  {
    dayNumber: 1,
    date: "2025-06-11",
    time: 45,
    task: "Started Boot.dev course on building AI coding agents, complete the first chapter where I created a script to give an LLM prompts and get a response. I find the course a little more basic than I expected, a lot of the content is already known to me but I have made myselfa promise that I will stick through and finish whatever course I start during this 100 days so I am going to see this through"
  },
];