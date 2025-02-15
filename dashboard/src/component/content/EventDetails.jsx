import React from "react";
import Accordion from "../Accordion";

export const EventDetails = ({ setIsView, viewData }) => {

  return (
    <div className="fixed inset-0 bg-black/70 z-[99]  flex items-center justify-center p-4">
      <div className=" rounded overflow-hidden  bg-white w-full lg:w-3/4">
        <div className="px-6 py-4 grid grid-cols-1 lg:grid-cols-3">
          <div className="font-bold text-xl mb-2 text-gray-800">
            {viewData.name}
          </div>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Place:</span> {viewData.place}
          </p>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Auditorium:</span>{" "}
            {viewData.auditorium}
          </p>
          <div className="flex gap-6 items-center">
            <p className="text-gray-600 text-base mb-2">
              <span className="font-semibold">Date :</span> {viewData.date}
            </p>
            <p className="text-gray-600 text-base mb-2">
              <span className="font-semibold"> Time:</span> {viewData.time}
            </p>
          </div>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Total Count works:</span>
            {viewData.totalCount}
          </p>
        </div>
        <Accordion items={viewData?.categories} />
        <div className="flex justify-between items-center px-6 py-4">
          <button
            onClick={() => setIsView(false)}
            className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Cancel
          </button>
          <button
            className="bg-gray-500 cursor-pointer hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
           Print
          </button>
        </div>
      </div>
    </div>
  );
};
