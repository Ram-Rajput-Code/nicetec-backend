//models\Inquiry.js
import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    assignedTo: { type: String, required: true },
    status: {
      type: String,
      enum: ["Admission Done", "Not Interested", "Next Follow-up"],
      default: "Next Follow-up",
    },
    followUpDate: { type: Date },
    courseInterested: { type: String, required: true }, // New Field
  description: { type: String, required: false }, // New Field
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", inquirySchema);
