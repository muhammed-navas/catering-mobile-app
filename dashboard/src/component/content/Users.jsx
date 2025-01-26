import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SearchBar from "../SearchBar";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    place: "New York",
    phone: "123-456-7890",
    totalWork: "5 years",
    proof: "Aadhaar",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    place: "Los Angeles",
    phone: "987-654-3210",
    totalWork: "3 years",
    proof: "License",
  },
  // Add more dummy data here...
];

const itemsPerPage = 10;

export const UserTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete item with id: ${id}`);
  };

  return (
    <div className="container mx-auto p-2 sm:p-3 lg:p-4">
      <SearchBar />
      {/* Table for larger screens */}
      <div className="hidden sm:block">
        <table className="min-w-full bg-white  rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">No</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Place</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Total Work</th>
              <th className="py-3 px-4 text-left">Proof</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4">{indexOfFirstItem + index + 1}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.place}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.totalWork}</td>
                <td className="py-3 px-4">{item.proof}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile screens */}
      <div className="sm:hidden space-y-4">
        {currentItems.map((item, index) => (
          <div key={item.id} className="bg-white  rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold">
                No: {indexOfFirstItem + index + 1}
              </span>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-sm"
              >
                Delete
              </button>
            </div>
            <div>
              <span className="font-semibold">Name:</span> {item.name}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {item.email}
            </div>
            <div>
              <span className="font-semibold">Place:</span> {item.place}
            </div>
            <div>
              <span className="font-semibold">Phone:</span> {item.phone}
            </div>
            <div>
              <span className="font-semibold">Total Work:</span>{" "}
              {item.totalWork}
            </div>
            <div>
              <span className="font-semibold">Proof:</span> {item.proof}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 hidden sm:block  ">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                currentPage === index + 1
                  ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Next</span>
            <FaChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
}
