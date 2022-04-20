const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

const handleReviewPost = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const db = client.db("FinalProject");

	const { id, genres, homepage, poster_path, review, title } = req.body;

	const reviewId = uuidv4();

	const reviewWithId = {
		id: id,
		reviewId: reviewId,
		genres: genres,
		homepage: homepage,
		poster_path: poster_path,
		review: review,
		title: title,
	};
	try {
		await client.connect();
		let user = await db
			.collection("users")
			.updateOne({ _id: id }, { $push: { movieReviews: reviewWithId } });
		res.status(200).json({
			status: 200,
			data: user.movieReviews,
			message: "Record Updated",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: "Internal server error.",
		});
		console.log("Error: ", err);
	}
	client.close();
};

module.exports = { handleReviewPost };
