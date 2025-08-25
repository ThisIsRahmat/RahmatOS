import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Projects } from "@/components/Projects";


import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { socials } from "@/constants/socials";
import Link from "next/link";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <Image
        src="/images/profile.png"
        width={`200`}
        height={`200`}
        alt="Illustration of Rahmat"
        className="rounded-full sm:h-20 sm:w-20 h-14 w-14 "
      />
      <Heading className="font-black">Hello, I&apos;m Rahmat</Heading>
      <Paragraph className="max-w-xl mt-2">
        I am an <Highlight> AI Engineer</Highlight> and{" "}
        <Highlight>Technologist</Highlight> based in the UK 🇬🇧
      </Paragraph>

      <Paragraph className=" mt-2">
        I am currently exploring and hacking on AI products, particularly around{" "}
        <Highlight>voice agents</Highlight> and{" "}
        <Highlight>conversational AI</Highlight>
      </Paragraph>


      {/* <Paragraph className=" bg-gray-900 mt-8 px-2 py-2.5 rounded-xl text-white shadom-md flex ">
        I am launching a substack later this year called Talking AI
        please subscribe{" "}
        <Link
          href="https://talkingai.substack.com/"
          className="hover:text-blue-600 underline pl-0.5"
        >
          here{" "}
        </Link>
      </Paragraph> */}

      {/* <TechStack /> */}

     
 

      {/* <div
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg sm:mt-10 mt-6 mb-4"
      >
        Let&apos;s connect
      </Heading> */}

      <Paragraph className="sm:mt-10 mt-6 mb-4">
        If you want to get in touch with me you can find me here:
      </Paragraph>

      <Paragraph className="mb-8">
        <div className="flex text-sm  space-x-2 flex-wrap">
          {socials.map((item) => (
            <>
              <Link href={item.href}>
                <span className="hover:text-blue-600" key={item.label}>
                  {item.label}
                </span>
              </Link>
            </>
          ))}
        </div>
      </Paragraph>
    </Container>
  );
}
