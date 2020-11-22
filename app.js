if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" }); //load all .env vars
}

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { json, urlencoded } = require("body-parser");
const connect = require("./connect");

var adminsRouter = require("./routes/admins");
var usersRouter = require("./routes/users");
var adsRouter = require("./routes/ads");

var expressLayouts = require("express-ejs-layouts");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Database connectivity
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/ceylonVaganaya", { useNewUrlParser: true });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", adsRouter);
app.use("/admin-dashboard", adminsRouter);
app.use("/user-dashboard", usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Db connectivity
const PORT = process.env.PORT || 4000;
connect()
  .then(() =>
    app.listen(PORT, () => {
      console.log("server on http://localhost:4000");
    })
  )
  .catch((e) => console.error(e));
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
