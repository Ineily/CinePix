const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const getUsers = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const db = client.db("FinalProject");
	try {
		await client.connect();
		const result = await db.collection("users").find().toArray();
		//remove sensitive information
		let filteredUsers = result.map(
			({ password, email, username, ...keepAttrs }) => keepAttrs
		);
		!result
			? res
					.status(404)
					.json({ status: 404, data: null, message: "Not found" })
			: res.status(200).json({
					status: 200,
					data: filteredUsers,
					message: "Success",
			  });
	} catch (err) {
		console.log("Error: ", err.message);
		res.status(500).json({
			status: 500,
			data: null,
			message: "Internal server error",
		});
	}
	client.close();
};

module.exports = { getUsers };
