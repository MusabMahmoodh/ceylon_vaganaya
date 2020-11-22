var express = require("express");
var router = express.Router();
const User = require("../models/user");
/* GET ad listing. */
router.get("/", function (req, res, next) {
  res.status(200).send("ad");
});

// Search vehicle
router.get("/:term", (req, res) => {});
// Signup
router.post("/", async (req, res) => {
  // console.log(req.body);
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobileNumber: req.body.mobileNumber,
    password: req.body.password,
  });
  res.status(200).send("successfully created user");
});
// Signin
router.post("/signin", (req, res) => {
  res.redirect("/user-dashboard");
});
module.exports = router;
