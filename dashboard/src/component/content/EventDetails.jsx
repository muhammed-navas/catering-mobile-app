import React from 'react'
import Accordion from '../Accordion';

export const EventDetails = ({ setIsView }) => {
      const accordionItems = [
        {
          title: "What is React?",
          users: ["one", "two", "three"],
          num: 20,
        },
        {
          title: "What is Tailwind CSS?",
          users: ["one", "two", "three", "four", "five"],
          num: 5,
        },
        {
          title: "How do they work together?",
          users: ["one", "two"],
          num: 10,
        },
        {
          title: "How do they work together?",
          users: ["one", "two"],
          num: 10,
        },
        {
          title: "How do they work together?",
          users: ["one", "two"],
          num: 10,
        },
        {
          title: "How do they work together?",
          users: ["one", "two"],
          num: 10,
        },
        {
          title: "How do they work together?",
          users: ["one", "two"],
          num: 10,
        },
        {
          title: "How do they work together?",
          users: ["one", "two"],
          num: 10,
        },
        {
          title: "How do they work together?",
          users: ["one", "two"],
          num: 10,
        },
      ];
  return (
    <div className="fixed inset-0 bg-black/70 z-[99]  flex items-center justify-center p-4">
      <div className=" rounded overflow-hidden  bg-white w-full lg:w-3/4">
        <div className="px-6 py-4 grid grid-cols-2 lg:grid-cols-3">
          <div className="font-bold text-xl mb-2 text-gray-800">name</div>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Place:</span> place
          </p>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Auditorium:</span>auditorium
          </p>
          <div className="flex gap-6 items-center">
            <p className="text-gray-600 text-base mb-2">
              <span className="font-semibold">Date :</span> date
            </p>
            <p className="text-gray-600 text-base mb-2">
              <span className="font-semibold"> Time:</span> time
            </p>
          </div>
          <p className="text-gray-600 text-base mb-2">
            <span className="font-semibold">Total Count:</span>totalCoun
          </p>
        </div>
        <Accordion items={accordionItems} />
        <div className="flex justify-between items-center px-6 py-4">
         
          <button
            onClick={() => setIsView(false)}
            className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
