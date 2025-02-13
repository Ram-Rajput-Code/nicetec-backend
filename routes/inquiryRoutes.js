//routes\inquiryRoutes.js
import express from "express";
import {
  createInquiry,
  getInquiries,
  updateInquiry,
  deleteInquiry,
} from "../controllers/inquiryController.js";

const router = express.Router();

router.post("/", createInquiry);
router.get("/", getInquiries);
router.put("/:id", updateInquiry);
router.delete("/:id", deleteInquiry);

export default router;
