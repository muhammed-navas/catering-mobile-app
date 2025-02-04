import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar({ menuItems }) {
  const location = useLocation();

  return (
    <aside className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-400">
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              Dashboard
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              {menuItems.map((item,i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gray-100 text-gray-900 border border-gray-400"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={`${
                          isActive
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500"
                        } mr-3 flex-shrink-0 h-6 w-6`}
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
