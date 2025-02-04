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
// import EventDetails from "./component/content/EventDetails";
import "./App.css";

const menuItems = [
  {  label: "Home", icon: FaHome, path: "/" },
  {  label: "New Event", icon: FaCalendarPlus, path: "/new-event" },
  {  label: "All Events", icon: FaCalendarAlt, path: "/all-events" },
  {  label: "Users", icon: FaUsers, path: "/users" },
  {  label: "Settings", icon: FaCog, path: "/settings" },
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
                  {menuItems.map((item,i) => (
                    <Route
                      key={i}
                      path={item.path}
                      element={
                        <MainContent
                          activeItem={item.label
                            .toLowerCase()
                            .replace(" ", "-")}
                        />
                      }
                    />
                  ))}
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
