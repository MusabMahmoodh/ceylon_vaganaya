const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connect;
