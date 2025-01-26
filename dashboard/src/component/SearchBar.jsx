import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative mx-auto max-w-full mb-6">
      <div className="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="w-5 h-5 cursor-pointer text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
      />
    </div>
  );
};

export default SearchBar;
