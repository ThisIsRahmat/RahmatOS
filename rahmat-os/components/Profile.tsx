interface ProfileProps {
    imageSrc: string;
    name: string;
    description: string;
  }
  
  export default function Profile({ imageSrc, name, description }: ProfileProps) {
    return (

      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-4 mb-4 mx-auto">
       <img src={imageSrc} alt={name}  className=" h-32 overflow-hidden rounded-full " />
     
          <div className="grid grid-cols-1 gap-2 text-center">
        
           <h4 className=" text-xl">{description}</h4>
           </div>
           </div>
    );
  }
  