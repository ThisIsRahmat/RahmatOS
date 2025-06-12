import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Container } from "@/components/Container";
import { Highlight } from "@/components/Highlight";
import Link from "next/link";
import { Metadata } from "next";
import { HabitTracker } from "@/components/HabitTracker";
import { habits, HabitEntry } from '@/constants/til';

export const metadata: Metadata = {
  title: "TIL | Rahmat ",
  description: "Rahmat is a technologists exploring the world of AI ",
};
export default function TILPage() {

  const sortedHabits = [...habits].sort((a, b) => b.dayNumber - a.dayNumber);
  return (
    <div className="flex flex-col">
      <Container>
        <div className="space-y-8">
          <div>
            <Heading className="font-black mb-10">100 Days of AI + Python</Heading>

            <Paragraph>
              I am currently exploring the world of AI, in particular{" "}
              <Highlight>AI Agents</Highlight> and{" "}
              <Highlight>Conversational AI</Highlight>
            </Paragraph>
            <Paragraph>
              For the next 100 days I am trying to improve my python skills and dive into the world of AI Agents.
            </Paragraph>

            <div className="mt-4">
              <p className="text-gray-700 mb-2">During these 100 days I specifically want to:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Complete my game <Highlight>RealOrAI</Highlight>, which I&apos;ve had the domain for a while now
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Get my business <Highlight>InterviewGenie</Highlight> finished and off the ground
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Complete the ExecuteProgram course on Python
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* HabitTracker with matching padding and proper height */}
   <div className="w-full pt-8 max-w-4xl mx-auto px-4 md:px-10">
        <div className=" pb-4">
          <HabitTracker />
        </div>


        <div className="max-w-4xl mx-auto mt-12 space-y-6">
 
          {sortedHabits.map((habit) => (
            <div 
              key={habit.dayNumber} 
              className="border-l-2 border-gray-200 pl-4 py-2 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-900">Day {habit.dayNumber}/100</span>
                <span className="text-sm text-gray-500">{habit.date}</span>
              </div>
              <p className="text-gray-700 mt-1">{habit.task}</p>
              <p className="text-sm text-gray-500 mt-1">{habit.time} minutes</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}