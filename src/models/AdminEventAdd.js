import mongoose, { Schema } from "mongoose";

const NewEventADd = new Schema(
  {
    eventName: { type: String, required: true },
    eventPlace: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventVenue: { type: String, required: true },
    eventCategory: { type: String, required: true },
    eventSubCategory: { type: String, required: true },
  },
  { collection: "eventsAdd" }
);
const EventAdd = mongoose.model("AdminEventAdd", NewEventADd);

export default EventAdd;
