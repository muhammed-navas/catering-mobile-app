import React from "react";
import { Link } from "react-router-dom";

function BottomNav({ menuItems, activeItem, setActiveItem }) {
  return (
    <div className="md:hidden bg-white shadow-lg">
      <nav className="flex justify-around">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id === "home" ? "/" : `/${item.id}`}
            className={`flex flex-col items-center py-2 px-3 ${
              activeItem === item.id
                ? "text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default BottomNav;
