import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Container } from "@/components/Container";
import { Highlight } from "@/components/Highlight";
import TIL from "@/components/TIL";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TIL | Rahmat ",
  description: "Rahmat is a technologists exploring the world of AI ",
};

export default function TILPage() {
  return (
    <Container>
      <Heading className="font-black mb-10"> Today I Learned (TIL)</Heading>

      <Paragraph>
        I am currently exploring the world of AI, in particular{" "}
        <Highlight>AI Agents</Highlight> and{" "}
        <Highlight>Conversational AI</Highlight>
      </Paragraph>
      <Paragraph>
        I try to learn something everyday or work on one of my AI projects:{" "}
        <Link href="#" className="hover:underline hover:text-blue-400">
          InterviewGenie
        </Link>{" "}
        or{" "}
        <Link href="#" className="hover:underline hover:text-blue-400">
          Real or AI
        </Link>
      </Paragraph>

      {/* <TIL /> */}
    </Container>
  );
}
