import { bookmarks } from "@/constants/bookmarks";

export default function Bookmarks() {
  // A utility function to assign colors to types
  const typeColors: Record<string, string> = {
    ML: "bg-green-200 text-green-800",
    "resource list": "bg-blue-200 text-blue-800",
    blog: "bg-yellow-200 text-yellow-800",
    LLM: "bg-purple-200 text-purple-800",
    "AI Agents": "bg-red-200 text-red-800",
  };

  return (
    <div className="space-y-6">
      {bookmarks.map((bookmark) => (
        <div
          key={bookmark.title}
          className=" pt-4 rounded-md  transition-shadow"
        >
          <a
            href={bookmark.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-indigo-600 hover:underline"
          >
            {bookmark.title}
          </a>
          <p className="mt-2 text-sm  text-gray-700">{bookmark.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {bookmark.type.map((type) => (
              <span
                key={type}
                className={`inline-block px-3 py-1 rounded-full text-sm sm:text-xs font-medium ${
                  typeColors[type] || "bg-gray-200 text-gray-800"
                }`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
