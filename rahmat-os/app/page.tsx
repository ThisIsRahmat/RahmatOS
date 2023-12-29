import Image from 'next/image'
import Link from 'next/link';
import { MoveUpRight  } from 'lucide-react';

const socialLinks = [
  {name: "Github", href: "https://github.com/ThisIsRahmat"},
  {name: "Email", href: "mailto:thisisrahmat@gmail.com"},
  {name:"Linkedin", href: "https://www.linkedin.com/in/rahmat-junaid/"}
]

export default function Home() {
  // const { projects } = useLoaderData() as AppProps;

  return (
    <div className="flex min-h-screen flex-col  justify-between ">

        <div>
  <div>
      <h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
     Hi! I’m Rahmat, 👋🏾
 
{/* A Product Support Engineer based in the UK  */}
     </h1>


     <h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
  I am an engineer and occassional technichal instructor. 
</h1>

<h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
  I have been working in a mixture of Support and DevOps Engineering roles for around 5 years.
</h1>

<h1 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">
This is my corner of the internet for talking about my technichal and non-technichal interests, unbound to any algorithim.
  </h1>

     {/* <p className="text-lg md:text-xl mx-auto m-6">
I have been working in a mixture of Cloud and Support Engineering roles
for a little over <span className="font-black underline underline-offset-4 decoration-double">5 years</span> now!
      </p> */}

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


{/* Latest Projects */}

<h2 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">Latest Projects</h2>



{/* Blogs */}

<h2 className=" text-slate-800 text-xl md:text-2xl mx-auto m-6">Articles</h2>



{/* Contact */}


{/* <h4>Articles</h4> */}





    </div>

    </div>
  )
}
