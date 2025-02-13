import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

import { Paragraph } from "@/components/Paragraph";
import { Projects } from "@/components/Projects";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Rahmat ",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Projects />
    </Container>
  );
}
