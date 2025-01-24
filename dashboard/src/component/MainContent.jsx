import React from "react";
import Home from "./content/Home";
import NewEvent from "./content/NewEvent";
import AllEvents from "./content/AllEvents";
import Users from "./content/Users";
import Settings from "./content/Settings";

function MainContent({ activeItem }) {
  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return <Home />;
      case "new-event":
        return <NewEvent />;
      case "all-events":
        return <AllEvents />;
      case "users":
        return <Users />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl font-bold mb-6 capitalize">
        {activeItem.replace("-", " ")}
      </h2>
      {renderContent()}
    </div>
  );
}

export default MainContent;