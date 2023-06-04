/** @format */

const mongoose = require("mongoose");
const Dive = require("../models/Dive.model");

const MONGO_URI =
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/diving-logbook";

const dives = [
	{
		divingSite: "dahab",
		duration: 24,
		depth: 23,
		buddy: "mediterranean",
	},
];

mongoose
	.connect(MONGO_URI)
	.then((x) => {
		console.log(`Connected to Mongo database: "${x.connections[0].name}"`);
		// return Dive.deleteMany();

		// Create new documents in the dives collection
		// const diveOne = {
		// 	divingSite: "Bean Soup",
		// 	duration: 20,
		// 	depth: 22,
		// 	buddy: "mediterranean",
		// };

		// return Dive.create(diveOne);
	})
	.then(() => {
		return Dive.create(dives);
	})

	.then((divesFromDB) => {
		console.log(divesFromDB);

		console.log(`Created ${divesFromDB.length} dives`);

		// Once the documents are created, close the DB connection
		return mongoose.connection.close();
	})
	.then(() => {
		// Once the DB connection is closed, print a message
		console.log("DB connection closed!");
	})
	.catch((error) => {
		console.log(`An error occurred while creating dives from the DB: ${error}`);
	});
