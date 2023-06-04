/** @format */

const router = require("express").Router();

///////////////
////   Routes
//////////////

const Dive = require("../models/Dive.model.js");

// GET route to retrieve and display all the books
router.get("/books", (req, res) => res.render("books/books-list.hbs"));

module.exports = router;
