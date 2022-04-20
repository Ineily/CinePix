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
			.findOne({ username: `${userName}`, password: `${password}` });
		console.log("result", result);

		!result
			? res.status(404).json({
					status: 404,
					data: req.body,
					message:
						"Username or password incorrect.  Please try again or click the link below to register.",
			  })
			: res.status(200).json({
					status: 200,
					data: {
						id: result._id,
						name: result.name,
						avatarSrc: result.avatarSrc,
						followers: result.followers,
						following: result.following,
					},
					message: "User Logged In",
			  });
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: "Internal Server Error. Please try again.",
		});
	}
	client.close();
};

module.exports = { handleSignIn };
