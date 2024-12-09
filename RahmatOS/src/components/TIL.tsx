


import  { til } from "@/constants/til"

export default function TIL() {

    return (
      <div className="space-y-4 pt-8">
        {til.map((til) => (
          <div
            key={til.date}
            className=" rounded-md  transition-shadow"
          >
            <p
         
     
              rel="noopener noreferrer"
              className="sm:text-sm text-base underline  font-semibold text-gray-600 "
            >
              {til.date}
            </p>
            <p className="mt-2 text-sm text-gray-700">{til.description}</p>
     
          </div>
        ))}
      </div>
    );
  }