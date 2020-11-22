var express = require("express");
var router = express.Router();
const User = require("../models/user");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.status(201).send("user cdashboard");
});
// Get by id
router.get("/:id", (req, res) => {});
router.post("/addVehicle", (req, res) => {
  res.send("create vehicle");
});
router.delete("/removeVehicle/:id", (req, res) => {});
router.put("/updateVehicle/:id", (req, res) => {});

module.exports = router;
