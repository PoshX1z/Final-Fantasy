import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex items-center text-4xl relative">
      <input
        type="text"
        placeholder="Search game..."
        className="border border-white rounded-lg p-2 pl-10 w-full"
      />
      <SearchIcon className="absolute left-2" />
    </div>
  );
};
