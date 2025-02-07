import React, { useEffect, useState } from "react";
import Home from "./content/Home";
import { UserTable } from "./content/Users";
import Settings from "./content/Settings";
import EventForm from "./content/NewEvent";
import EventCard from "./content/AllEvents";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MainContent({ activeItem }) {
  const [editFormData, setEditFormData] = useState(null);
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();
    console.log("first");
    const getUserData = async () => {
      const session = sessionStorage.getItem("accessToken");
      if (session) {
      try {
        console.log("first");
        const response = await axios.get(
          `http://localhost:3001/api/admin/get-user`
        );
        let {data }= response.data;
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
      }else{
        navigate("/login");
      }
    };

    useEffect(() => {
      getUserData();
    }, []);

    console.log(userData, "userrrrrr...");

  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return <Home userData={userData} />;
      case "new-event":
        return (
          <EventForm
            editFormData={editFormData}
            setEditFormData={setEditFormData}
          />
        );
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
