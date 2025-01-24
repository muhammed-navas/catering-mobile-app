import React from "react";

function BottomNav({ menuItems, activeItem, setActiveItem }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800">
      <ul className="flex justify-around py-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className={`flex flex-col items-center ${
                activeItem === item.id ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon className="text-2xl" />
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BottomNav;
