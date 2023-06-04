/** @format */

const router = require("express").Router();

router.get("/", (req, res, next) => {
	res.render("some page renders here");
});

module.exports = router;
