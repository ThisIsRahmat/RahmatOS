interface SubtitleProps {

   title: string;
    description: string;
  }
  
  export default function Subheader({ title, description }: SubtitleProps) {
    return (

      // <div className="flex min-h-screen flex-col   ">
      //   <h1>{title}</h1>
      // <div className="grid grid-cols-1 gap-2 text-center">
        
      //      <h4 className=" text-xl">{description}</h4>
      //      </div>
      //      </div>


<div className="grid sm:grid-cols-2  gap-0 grid-cols-1">
  <div className="w-1/2">
  <h2 className=" w-1/2 pt-2 sm:text-[102px] text-[60px] font-bold leading-10 inset-x-0 bottom-0 pr-8 text-text-lvl-1   mr-2">
    {title}
  </h2>
  </div>
  <div className="w-full  text-start    lg:w-2/3 py-4 sm:py-2 ">
    {description}
  </div>
</div>

    );
  }
  