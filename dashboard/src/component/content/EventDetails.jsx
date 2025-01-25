import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch event details from your API here
    // For now, we'll use dummy data
    const dummyEvent = {
      id: id,
      name: "Conference 2023",
      date: "2023-08-15",
      location: "Convention Center",
      description: "Annual tech conference",
      attendees: 500,
      speakers: ["John Doe", "Jane Smith"],
      schedule: [
        { time: "09:00 AM", activity: "Registration" },
        { time: "10:00 AM", activity: "Keynote Speech" },
        { time: "12:00 PM", activity: "Lunch Break" },
      ],
    };
    setEvent(dummyEvent);
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to All Events
      </Link>
      <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-xl mb-2">Date: {event.date}</p>
        <p className="text-xl mb-2">Location: {event.location}</p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <p className="text-lg mb-2">Attendees: {event.attendees}</p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Speakers:</h3>
          <ul className="list-disc list-inside">
            {event.speakers.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Schedule:</h3>
          <ul className="space-y-2">
            {event.schedule.map((item, index) => (
              <li key={index}>
                <span className="font-semibold">{item.time}:</span>{" "}
                {item.activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
