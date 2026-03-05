import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Search products..."
        className="border-theme rounded-4xl pl-4 p-2 w-full outline-0"
      />
      <div className="absolute right-0 button-theme-primary rounded-4xl p-2">
        <SearchIcon />
      </div>
    </div>
  );
};
