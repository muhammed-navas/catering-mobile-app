import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ title, users, num, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 ">
      <button
        className="flex justify-between cursor-pointer   items-center w-full p-4 text-left"
        onClick={onToggle}
      >
        <span className="font-medium max-w-40 lg:max-w-full ">{title}</span>
        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-1 lg:gap-4 lg:flex-row flex-col">
            <div className="text-xs px-2 py-ps border border-gray-300 rounded-md">
              Total Users = {num}
            </div>
            <div className="text-xs px-2 py-ps border border-gray-300 rounded-md">
              Available Users = {users.length}
            </div>
          </div>
          <IoIosArrowUp
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          {users.map((user, i) => (
            <div key={i} className="flex items-center gap-4 mb-2">
              <div className="bg-orange-300 h-2 w-2 rounded-full"></div>
              <div className="text-gray-700 text-lg">{user}</div>
              <div className="text-blue-500 underline cursor-pointer text-xs">
                profile view
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  console.log(items,'----------------')
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg px-2 overflow-y-scroll h-80">
      {/* {items?.map((val) =>
        val.categories.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            num={item.totalCount}
            users={item.users}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))
      )} */}
    </div>
  );
};

export default Accordion;
