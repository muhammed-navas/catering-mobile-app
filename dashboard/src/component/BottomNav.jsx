import React from "react";
import { NavLink } from "react-router-dom";

function BottomNav({ menuItems }) {
  return (
    <div className="md:hidden bg-white shadow-lg pt-3">
      <nav className="flex justify-around">
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-gray-600 hover:text-blue-500"
              } flex flex-col items-center py-2 px-3`
            }
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default BottomNav;
