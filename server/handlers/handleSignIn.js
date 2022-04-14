const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const handleSignIn = async (req, res) => {
	const { userName, password } = req.body;
	const client = new MongoClient(MONGO_URI, options);
	const db = client.db("FinalProject");
	try {
		await client.connect();
		const result = await db
			.collection("users")
			.findOne({ username: userName, password: password });
		console.log("result", result);

		!result
			? res.status(404).json({
					status: 404,
					data: req.body,
					message:
						"Username or password incorrect.  Please sign up or register for an account.",
			  })
			: res.status(200).json({ status: 200, message: "User Logged In" });
	} catch (err) {
		console.log("Error: ", err.message);
		res.status(500).json({ status: 500, message: "Internal Server Error" });
	}
	client.close();
};

module.exports = { handleSignIn };
