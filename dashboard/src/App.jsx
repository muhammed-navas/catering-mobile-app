import React, { useState } from "react";
import {
  FaHome,
  FaCalendarPlus,
  FaCalendarAlt,
  FaUsers,
  FaCog,
} from "react-icons/fa";
import Sidebar from "./component/Sidebar";
import BottomNav from "./component/BottomNav";
import MainContent from "./component/MainContent";

const menuItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "new-event", label: "New Event", icon: FaCalendarPlus },
  { id: "all-events", label: "All Events", icon: FaCalendarAlt },
  { id: "users", label: "Users", icon: FaUsers },
  { id: "settings", label: "Settings", icon: FaCog },
];

function App() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        menuItems={menuItems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <MainContent activeItem={activeItem} />
        </main>
        <BottomNav
          menuItems={menuItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
}

export default App;
