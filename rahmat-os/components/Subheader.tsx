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


      <div className="flex flex-wrap">
      <h2 className="w-full pt-8 sm:text-[102px] text-[60px] font-bold leading-10 inset-x-0 bottom-0 pr-8 text-text-lvl-1 lg:w-1/3 text-center">{title}</h2>
      <div className="w-full text-text-lvl-2 mt-2 lg:w-2/3 lg:mt-[0px]">
     {description}
</div>
      </div>
    );
  }
  