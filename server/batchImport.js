const { MongoClient } = require("mongodb");
require("dotenv").config();
const users = require("./data/users.json");
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const batchImport = async () => {
	try {
		await client.connect();
		const db = client.db("FinalProject");
		const result = await db.collection("users").insertMany(users);
	} catch (err) {
		console.log("There was an error: ", err.message);
	}
	client.close();
};

// batchImport();
