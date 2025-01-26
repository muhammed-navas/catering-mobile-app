import React, { useState } from "react";
import Home from "./content/Home";
import { UserTable } from "./content/Users";
import Settings from "./content/Settings";
import EventForm from "./content/NewEvent";
import EventCard from "./content/AllEvents";

function MainContent({ activeItem }) {
  const [editFormData , setEditFormData] = useState(null);

  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return <Home />;
      case "new-event":
        return <EventForm editFormData={editFormData} setEditFormData={setEditFormData} />;
      case "all-events":
        return <EventCard setEditFormData={setEditFormData} />;
      case "users":
        return <UserTable />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 md:py-6">
      <h2 className="text-3xl font-bold mb-6 capitalize">
        {activeItem.replace("-", " ")}
      </h2>
      {renderContent()}
    </div>
  );
}

export default MainContent;
