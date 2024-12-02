import mongoose, { Schema } from "mongoose";

const UserAddEventSchema = new Schema(
  {
    eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    categories: [
      {
        categoryID: { type: String, required: true },
        count: { type: Number, required: true, min: 0 },
        userID: [{ type: String }]
      },
    ],
  },
  { timestamps: true }
);

const UserAddEvent = mongoose.model("UserAddEvent", UserAddEventSchema);

export default UserAddEvent;
