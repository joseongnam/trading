import express from "express";

const router = express.Router();

router.get("/nasdaq", (req, res) => {
  res.json({ message: "안녕, 클라이언트!" });
});

module.exports = router;
