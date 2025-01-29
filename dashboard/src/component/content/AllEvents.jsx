import React, { useState } from "react";
import { PopupSure } from "../PopupSure";
import { Link } from "react-router-dom";
import { EventDetails } from "./EventDetails";

const EventCard = ({ setEditFormData }) => {
  const eventData = [
    {
      name: "new event",
      place: "Silicon Valley",
      auditorium: "Main Hall",
      totalCount: 100,
      date: "22-01-2025 ",
      time: "04.00 pm",
      categories: [
        {
          title: "VIP section",
          totalCount: 10,
          users:[ "one", "two", "three"]
        },
        {
          title: "Welcome Drink ",
          totalCount: 4,
          users:[ "one1", "two2", "three3"]
        },
      ],
      description:
        "Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops on the latest technologies.",
    },
    {
      name: "Annual Tech Conference",
      place: "Silicon Valley",
      auditorium: "Main Hall",
      totalCount: 100,
      date: "22-01-2025 ",
      time: "04.00 pm",
      categories: [
        {
          title: "VIP section",
          totalCount: 10,
          users:[ "one", "two", "three"]
        },
        {
          title: "Welcome Drink ",
          totalCount: 4,
          users:[ "one1", "two2", "three3"]
        },
        {
          title: "food supply ",
          totalCount: 4,
          users:[ "one1", "two2", "three3"]
        },
      ],
      description:
        "Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops on the latest technologies.",
    },
  ];
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [ isView , setIsView ] = useState(false);
  const [viewData , setViewData ] = useState(null);

  const handleDelete = () => {
    // Your delete logic here
    console.log("Item deleted!");
  };
  const viewDetailsHandle = (item) =>{
    setIsView(true)
    setViewData(item)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-2 ">
        {eventData.map((item, i) => (
          <div
            key={i}
            className="max-w-xl rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
                {item.name}
              </div>
              <p className="text-gray-600 text-base mb-2">
                <span className="font-semibold">Place:</span> {item.place}
              </p>
              <p className="text-gray-600 text-base mb-2">
                <span className="font-semibold">Auditorium:</span>{" "}
                {item.auditorium}
              </p>
              <div className="flex gap-6 items-center">
                <p className="text-gray-600 text-base mb-2">
                  <span className="font-semibold">Date :</span> {item.date}
                </p>
                <p className="text-gray-600 text-base mb-2">
                  <span className="font-semibold"> Time:</span> {item.time}
                </p>
              </div>
              <p className="text-gray-600 text-base mb-2">
                <span className="font-semibold">Total Count:</span>{" "}
                {item.totalCount}
              </p>
              <div className="text-gray-700 text-sm mb-4 flex  gap-3 items-center flex-wrap ">
                {item.categories.map((category, i) => (
                  <p
                    key={i}
                    className="bg-gray-300 pl-2 py-0.5 w-fit rounded-lg"
                  >
                    {category.title}{" "}
                    <span className="bg-gray-400 text-white rounded-md p-1 text-xs">
                      {" "}
                      {category.totalCount}
                    </span>
                  </p>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link to="/new-event">
                  <button
                    onClick={() => setEditFormData(item)}
                    className="bg-green-500 cursor-pointer hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => viewDetailsHandle(item)}
                  className="bg-slate-500 cursor-pointer hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  View
                </button>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PopupSure
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
      {isView && <EventDetails setIsView={setIsView} viewData={viewData} />}
    </>
  );
};

export default EventCard;
