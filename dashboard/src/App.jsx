import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { Login } from "./page/Login";
import EventDetails from "./component/content/EventDetails";
import "./App.css";

const menuItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "new-event", label: "New Event", icon: FaCalendarPlus },
  { id: "all-events", label: "All Events", icon: FaCalendarAlt },
  { id: "users", label: "Users", icon: FaUsers },
  { id: "settings", label: "Settings", icon: FaCog },
];

function App() {
  const [activeItem, setActiveItem] = useState("home");
  const accessToken = localStorage.getItem("accessToken");

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {!accessToken ? (
          <>
            <Sidebar
              menuItems={menuItems}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <Routes>
                  <Route path="/" element={<MainContent activeItem="home" />} />
                  <Route
                    path="/new-event"
                    element={<MainContent activeItem="new-event" />}
                  />
                  <Route
                    path="/all-events"
                    element={<MainContent activeItem="all-events" />}
                  />
                  <Route
                    path="/users"
                    element={<MainContent activeItem="users" />}
                  />
                  <Route
                    path="/settings"
                    element={<MainContent activeItem="settings" />}
                  />
                  <Route path="/event/:id" element={<EventDetails />} />
                </Routes>
              </main>
              <BottomNav
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
