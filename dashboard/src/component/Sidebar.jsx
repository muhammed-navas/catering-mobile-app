import React from "react";

function Sidebar({ menuItems, activeItem, setActiveItem }) {
  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-white">Dashboard</h1>
      </div>
      <ul className="flex flex-col py-4">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className={`flex flex-row items-center h-12 hover:bg-gray-700 hover:text-white ${
                activeItem === item.id
                  ? "text-white bg-gray-700"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <item.icon />
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
