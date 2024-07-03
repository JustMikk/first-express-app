const Joi = require("joi");
const express = require("express");
const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/courses", courses);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
