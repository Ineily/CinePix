"use strict";

const express = require("express");
const morgan = require("morgan");
const { getUserById } = require("./handlers/getUserById");
const { handleSearch } = require("./handlers/handleSearch");
const { handleSignIn } = require("./handlers/handleSignIn");
const { testThroughInsomnia } = require("./handlers/testThroughInsomnia");

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
	.get("/get-genre", testThroughInsomnia)
	.get("/users/:id", getUserById)
	.get("/search/:search", handleSearch)
	.post("/signin", handleSignIn)
	.listen(PORT, () => console.info(`Listening on port ${PORT}`));
