/** @format */
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const index = require("./routes/index");
app.use("/", index);
// const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

const index = require("./routes/index");
app.use("/", index);

const diveRoutes = require("./routes/dives.routes"); // <== import (require) book routes
app.use("/", diveRoutes); // <== use book routes

///////////////////
/////   GETS
//////////////////

router.get("/", (req, res, next) => {
	res.render("home-page");
});

app.listen(3000, () =>
	console.log("My server is running on port 3000 🎧 🥁 🎸 🔊")
);
