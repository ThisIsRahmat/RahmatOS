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
  {
    dayNumber: 2,
    date: "2025-06-12",
    time: 45,
    task:  "Continued on the boot.dev course worked on the section where I built function for the LLM to call, it was a good exercise in understanding os and I learnt how to check if one path is a parent of another. It was weirdly challenging thinking through the logic of my function but I also think I was sturggling a little bit because I was sleepy and couldn't concentrate. I used claude to help me but I am super intnentional about my usage, I always ask it to guide me to an answer and NOT  to give me the answer outright. I also switched to VSCode yesterday because I realised I have become a little over dependent on Cursor and it was making my dev skills incredibly bad. I really want to learn this challenge and not midnless tickbox each day. "
  
  },
];