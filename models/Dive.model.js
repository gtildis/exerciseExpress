/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diveSchema = new Schema({
	// TODO: write the schema

	divingSite: {
		type: String,
		required: true,
		unique: true,
	},

	duration: {
		type: Number,
		min: 0,
		required: true,
	},

	depth: {
		type: Number,
		required: true,
		min: 0,
	},

	image: {
		type: String,
		default: "https://images.media-allrecipes.com/images/75131.jpg",
	},

	buddy: {
		type: String,
	},

	created: {
		type: Date,
		default: Date.now,
	},
});

const Dive = mongoose.model("Dive", diveSchema);

module.exports = Dive;
