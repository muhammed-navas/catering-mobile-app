import mongoose, { Schema } from "mongoose";

const NewEventADd = new Schema(
  {
    eventName: { type: String, required: true },
    eventPlace: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventVenue: { type: String, required: true },
    eventCategory: [
      {
        name: { type: String, required: true }, 
        workersCount: { type: Number, required: true, min: 0 }, 
      },
    ],
  },
  { timestamps: true }
);

const EventAdd = mongoose.model("AllEvents", NewEventADd);

export default EventAdd;
