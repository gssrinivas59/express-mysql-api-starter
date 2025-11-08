const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.json({ role: "admin", version: "v1", message: "Admin login successful" });
});

module.exports = router;
