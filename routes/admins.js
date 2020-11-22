var express = require("express");
var router = express.Router();
const User = require("../models/user");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).send("admin");
});
router.get("/users", async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.status(200).send(users);
});

module.exports = router;
