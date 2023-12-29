import Image from 'next/image'
import Link from 'next/link';
import { MoveUpRight  } from 'lucide-react';


const socialLinks = [
  {name: "Github", href: "https://github.com/ThisIsRahmat"},
  {name: "Email", href: "mailto:thisisrahmat@gmail.com"},
  {name:"Linkedin", href: "https://www.linkedin.com/in/rahmat-junaid/"}
]


const projects = [
  {name: "OpenSaasFinder", description:"AI generated flashcards built with openAI’s GPT and Nextjs(Javascript)", link: "https://github.com/ThisIsRahmat"},
  {name: "StudyWiz", description:"A directory for discovering popular alternatives to paid Saas products.", link: "mailto:thisisrahmat@gmail.com"},

]

export default function Home() {


  return (
    <div className="flex min-h-screen flex-col sm:py-20 justify-between ">

        <div>
  <div>
      <h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
     Hi! I’m Rahmat, 👋🏾
 
{/* A Product Support Engineer based in the UK  */}
     </h1>


     <h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
  I am an engineer and occassional technichal instructor based in the UK.🇬🇧
</h1>

<h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
  I have been working in a mixture of Support and Cloud Engineering roles for nearly 5 years.
</h1>
{/* 
<div className="flex items-center">
<div className="border-[#3f2b90] border  rounded-md pl-2 sm:w-1/3">
<table  className=" w-full md:px-24 px-4 text-left items-start py-2">
  <thead>
    <tr>
      <th colspan="2">Resume</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Appvia</td>
      <td>2023 - present</td>
    </tr>
    <tr>
      <td>Fly.io</td>
      <td> 2021 -2022</td>
    </tr>
    <tr>
      <td>Automation Logic</td>
      <td>2018 - 2021 </td>
    </tr>
  </tbody>
</table>
</div>
</div> */}

<h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
This is my corner of the internet for talking about my technichal and non-technichal interests, unbound to any algorithim.
  </h1>

  <button className=" w-full border-black bg-[#ab9ef2] text-black rounded-lg border text-lg text-light ">
   I am currently completing #100DaysOfGo which you can follow <Link href="/notes/DaysGo" className="underline"> here </Link>

  </button>


  {/* Currently Reading */}

{/* <h2 className="text-xl uppercase"> Currently Reading </h2> */}

  {/* Projects */}

<h2 className="text-xl uppercase pt-2"> Projects </h2>

<div>

      <div className="flex flex-wrap gap-8 justify-center py-4">
      {projects.map((project) => (
        <div
          key={project.name}
          className=" flex flex-col border border-gray-700 shadow-lg rounded-lg overflow-hidden w-96 transition-transform duration-300 hover:scale-105"
        >

          {/* <img
            className="w-full object-cover h-24" // Adjust the height here with Tailwind's h- class
            src={project.titleImage.url}
            alt={project.title}
          /> */}
          <div className="flex flex-col flex-1 p-4 justify-between">  
            <div className="gap-4">
            <Link href={project.link}>
<p className="md:text-xl text-lg  font-semibold text-black">
                {project.name}
              </p>

              </Link>
              <p className="text-md  mt-2">
                {project.description}
              </p>
{/*              
              {project.language.map((lang, index) => (
  <button key={index} className=" hover:bg-purple-400 rounded-xl border px-2 text-sm text-light mt-2 mr-2">
    {lang}

  </button>
))} */}

            </div>
            {/* <div className="mt-auto"> 
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 rounded-lg px-4 py-2 block mt-4"
              >
                View Project
              </a>
            </div> */}
          </div>
        </div>
      ))}
    </div>
      </div>

{/* Blog Post */}


{/* <h2 className="text-xl uppercase"> Latest Blog </h2> */}

{/* Contact */}

<h2 className="text-xl uppercase"> Contact </h2>
  <h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
You can get in touch with me on:
  </h1>

  <div className="sm:backdrop:pl-32">
<ul className="gap-y-6 ">
{socialLinks.map((socialLink) => (



<li key={socialLink.id} className=" hover:text-[#3f2b90] flex-inline flex  md:text-2xl text-lg">
  <Link href={socialLink.href}>
  
  <div className="flex-inline sm:text-2xl text-xl flex underline underline-offset-2">
    {socialLink.name}
    <MoveUpRight size={24} />
</div>
    </Link>
    </li>

))}
</ul>
</div>

     {/* <p className="text-lg md:text-xl mx-auto m-6">
I have been working in a mixture of Cloud and Support Engineering roles
for a little over <span className="font-black underline underline-offset-4 decoration-double">5 years</span> now!
      </p>  */}

      {/* <p>
        During that time I have worked at startups, 
        </p> */}

      {/* <p className="text-lg md:text-xl mx-auto m-6">
        Prior to working in tech I completed a degree in Neuroscience 🧠
      </p> */}
{/* <p className=" text-slate-800 text-lg md:text-xl mx-auto m-6">
*ThisisRahmat* is my home on the web where I document my journey to becoming an absolute <span className="italic font-xl font-black underline">beast</span> on Golang and Javascript plus all the things I build along the way.
</p> */}
</div>

{/* Resume */}





{/* Latest Projects */}

{/* <h2 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">Latest Projects</h2>
 */}


{/* Blogs */}
{/* 
<h2 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">Articles</h2> */}



{/* Contact */}


{/* <h4>Articles</h4> */}





    </div>

    </div>
  )
}
