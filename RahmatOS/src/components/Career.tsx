import { career } from "@/constants/career";

export const Career = () => {
  return (
    <div className="grid gap-4">
      {career.map((role) => (
        <div
          key={role.company}
          className="grid grid-cols-12 gap-4 items-start"
        >
          {/* Left Column for Dates */}
          <div className="col-span-3 text-xs text-gray-600">
            {role.time}
          </div>

          {/* Right Column for Details */}
          <div className="col-span-9">
            <p className="text-sm font-medium">
              {role.job_title} at {role.company}
            </p>
            <p className="text-xs text-gray-500">{role.location}</p>
            <p className="mt-1 text-sm">{role.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
