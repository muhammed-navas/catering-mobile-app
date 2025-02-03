import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SearchBar from "../SearchBar";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { PopupSure } from "../PopupSure";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "0987654321",
    place: "New York",
    completedWork: "5",
    payment: 2000,
    proof: "Aadhaar",
  },

  // Add more data as needed
];

const itemsPerPage = 5;

const ActionMenu = ({ id, setIsDelete }) => {
  return (
    <div className="absolute right-0 w-36 z-[999]  py-2 bg-white rounded-md shadow-lg border border-gray-200 animate-fade-in">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <button
          href="#"
          className="block px-4 py-2 text-sm w-full cursor-pointer text-gray-700 hover:bg-gray-50 transition-colors duration-150"
          role="menuitem"
        >
          View
        </button>
        <button
          href="#"
          className="block px-4 py-2 text-sm w-full cursor-pointer text-gray-700 hover:bg-gray-50 transition-colors duration-150"
          role="menuitem"
        >
          Add Payment
        </button>
        <button
          onClick={() => setIsDelete(true)}
          className="block px-4 py-2 w-full cursor-pointer text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
;

export const UserTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null); // Added state variable

  const [isDelete, setIsDelete] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleMenu = (id, event) => {
    event.stopPropagation(); // Prevent event bubbling
    setActiveMenu(activeMenu === id ? null : id);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="container mx-auto p-2 sm:p-3 lg:p-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Users</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          <span className="text-gray-700 font-bold py-2 px-4">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">No.</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone Number</th>
              <th className="py-3 px-4 text-left">Place</th>
              <th className="py-3 px-4 text-left">completed Work</th>
              <th className="py-3 px-4 text-left">payment</th>
              <th className="py-3 px-4 text-left">Proof</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={item.id}
                className="border-b dived-y bg-white border-gray-200 "
              >
                <td className="py-3 px-4">{indexOfFirstItem + index + 1}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.place}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.completedWork}</td>
                <td className="py-3 px-4">{item.payment}</td>
                <td className="py-3 px-4">{item.proof}</td>
                <td className="py-3 px-4">
                  <div className="relative ">
                    <button
                      onClick={(e) => toggleMenu(item.id, e)}
                      className="p-1 rounded-full hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                    >
                      <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
                    </button>
                    {activeMenu === item.id && (
                      <ActionMenu id={item.id} setIsDelete={setIsDelete} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile screens */}
      <div className="sm:hidden space-y-4">
        {currentItems.map((item, index) => (
          <div key={item.id} className="bg-white rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold">
                No: {indexOfFirstItem + index + 1}
              </span>
              <div className="relative">
                <button
                  onClick={(e) => toggleMenu(item.id, e)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
                >
                  <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
                </button>
                {activeMenu === item.id && <ActionMenu id={item.id} />}
              </div>
            </div>
            <div>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Role: {item.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
        <span className="text-gray-700 font-bold py-2 px-4">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
      <PopupSure
        isOpen={isDelete}
        onClose={() => setIsDelete(false)}
        // onConfirm={handleDelete}
      />
    </div>
  );
};
