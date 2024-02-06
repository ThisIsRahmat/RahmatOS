interface SubtitleProps {

   title: string;
    description: string;
  }
  
  export default function Subheader({ title, description }: SubtitleProps) {
    return (

<div>
<div className="grid sm:grid-cols-2  gap-0 grid-cols-1 sm:pb-6">
  <div className="text-center ">
  <h2 className=" sm:w-1/2 w-full  sm:text-[102px] text-[60px] font-bold leading-10 inset-x-0 bottom-0 pr-8   mr-2">
    {title}
  </h2>
  </div>
  <div className="w-full sm:2/3 sm:text-start text-center   lg:w-2/3 py-4 sm:py-2 ">
    {description}
  </div>

</div>

<hr className="border-[#3f2b90] border-2 sm:border-4"/>
</div>

    );
  }
  