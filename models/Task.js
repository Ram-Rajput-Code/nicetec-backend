import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    assignedTo: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "Canceled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
