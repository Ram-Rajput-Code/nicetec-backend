import express from "express";

const router = express.Router();

// Hardcoded login credentials
const HARD_CODED_ID = "rpsingh";
const HARD_CODED_PASSWORD = "rpsing";

router.post("/login", (req, res) => {
  const { id, password } = req.body;
  if (id === HARD_CODED_ID && password === HARD_CODED_PASSWORD) {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
