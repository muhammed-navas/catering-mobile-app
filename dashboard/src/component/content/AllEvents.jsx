import React from "react";

function AllEvents() {
  const events = [
    { id: 1, name: "Team Meeting", date: "2023-06-15" },
    { id: 2, name: "Product Launch", date: "2023-07-01" },
    { id: 3, name: "Annual Conference", date: "2023-09-10" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">All Events</h3>
      <ul className="divide-y divide-gray-200">
        {events.map((event) => (
          <li key={event.id} className="py-4">
            <div className="flex justify-between">
              <span className="font-medium">{event.name}</span>
              <span className="text-gray-500">{event.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEvents;
