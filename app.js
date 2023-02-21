var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var courseCategoryRouter = require('./routes/courseCategoty');
var courseRouter = require("./routes/course");
var userCourseRouter = require("./routes/userCourse");
var logoutRouter = require("./routes/logout");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/course-category", courseCategoryRouter);
app.use("/course", courseRouter);
app.use("/user-course", userCourseRouter);
app.use("/logout", logoutRouter);

module.exports = app;
