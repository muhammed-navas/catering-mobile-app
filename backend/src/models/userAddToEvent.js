import mongoose, { Schema } from "mongoose";

const UserAddEventSchema = new Schema(
  {
    eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true }, 
    categories: [
      new Schema(
        {
          categoryID: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
          },
          workersCount: { type: Number, required: true, min: 0 }, 
          workers: {
            type: [Schema.Types.ObjectId],
            ref: "User",
            required: true,
          },
        },
        { _id: false } 
      ),
    ],
  },
  { timestamps: true } 
);

const UserAddEvent = mongoose.model("UserAddEvent", UserAddEventSchema);
export default UserAddEvent;
