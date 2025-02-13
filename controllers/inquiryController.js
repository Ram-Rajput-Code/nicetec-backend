//controllers\inquiryController.js
import Inquiry from "../models/Inquiry.js";

// Create a new inquiry
export const createInquiry = async (req, res) => {
  try {
    const { studentName, contactNumber, assignedTo, status, followUpDate } =
      req.body;
    const inquiry = new Inquiry({
      studentName,
      contactNumber,
      assignedTo,
      status,
      followUpDate,
    });
    await inquiry.save();
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all inquiries
export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an inquiry
export const updateInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Inquiry.findByIdAndUpdate(id, req.body, { new: true });
    if (!inquiry) return res.status(404).json({ message: "Inquiry not found" });
    res.status(200).json(inquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an inquiry
export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Inquiry.findByIdAndDelete(id);
    if (!inquiry) return res.status(404).json({ message: "Inquiry not found" });
    res.status(200).json({ message: "Inquiry deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
