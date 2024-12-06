import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { socials } from "@/constants/socials"
import Link from "next/link"

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
      <Paragraph className="max-w-xl mt-4">
   I am a <Highlight >Product Engineer</Highlight> based in the UK 🇬🇧
    
      </Paragraph>
      <Paragraph className="max-w-xl mt-2">
      I enjoy <Highlight>building products</Highlight> and web apps with a strong customer focus.
        </Paragraph>
      <Paragraph className=" mt-2">
  
        I am currently exploring AI products, particularly around <Highlight>AI agents</Highlight> and <Highlight>conversational AI</Highlight>


      </Paragraph>
      <Paragraph className=" mt-2 text-red-400  shadom-md flex ">
I am launching a substack documenting my explorations, called Talking AI please subscribe<Link href="https://talkingai.substack.com/" className="hover:text-blue-600"> here </Link>

</Paragraph>
      <TechStack />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg sm:mt-10 mt-6 mb-4"
      >
        My projects
      </Heading>
      <Projects />

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg sm:mt-10 mt-6 mb-4"
      >
       Let&apos;s connect
      </Heading>

      <Paragraph className=" mt-2">
  
      If you want to get in touch with you can find me here:
      

</Paragraph>


<Paragraph className="mb-8">
<div className="flex text-sm mt-4 space-x-2 flex-wrap">
        {socials.map((item) => (
          <>
          <Link href={item.href}>
     <span className="hover:text-blue-600" key={item.title}>
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
