"use strict";

const express = require("express");
const morgan = require("morgan");
const { getUserById } = require("./handlers/getUserById");
const { handleAdd } = require("./handlers/handleAdd");
const { handleSearch } = require("./handlers/handleSearch");
const { handleSignIn } = require("./handlers/handleSignIn");
const { getMovieById } = require("./handlers/getMovieById");
const { handleRegistration } = require("./handlers/handleRegistration");
const { handleReviewPost } = require("./handlers/handleReviewPost");
const { handleDeleteReview } = require("./handlers/handleDeleteReview");
const { getMoviesByGenre } = require("./handlers/getMoviesByGenre");
const { getUsers } = require("./handlers/getUsers");

const PORT = 4000;

express()
	.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Methods",
			"OPTIONS, HEAD, GET, PUT, POST, DELETE"
		);
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept"
		);
		next();
	})
	.use(morgan("tiny"))
	.use(express.static("./server/assets"))
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use("/", express.static(__dirname + "/"))

	// REST endpoints ------------------------------------------
	.get("/get-users", getUsers)
	.get("/users/:id", getUserById)
	.get("/search/:search", handleSearch)
	.get("/movies/:id", getMovieById)
	.get("/moviesbygenre/:id", getMoviesByGenre)
	.post("/signin", handleSignIn)
	.post("/register", handleRegistration)
	.put("/review", handleReviewPost)
	.put("/delete-review", handleDeleteReview)
	.put("/add-friend", handleAdd)
	.listen(PORT, () => console.info(`Listening on port ${PORT}`));
