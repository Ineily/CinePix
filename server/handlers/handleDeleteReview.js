const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

const handleDeleteReview = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const db = client.db("FinalProject");

	const { userId, reviewId } = req.body;

	try {
		await client.connect();
		let user = await db.collection("users").findOne({ _id: userId });
		if (!user) {
			res.status(404).json({
				status: 404,
				data: userId,
				message: "Resource not found. Please try again.",
			});
		} else {
			let reviewArr = user.movieReviews;
			let updatedMovieReviewsArr = reviewArr.filter((review) => {
				return review.reviewId !== reviewId;
			});
			await db.collection("users").updateOne(
				{ _id: userId },
				{
					$set: {
						movieReviews: updatedMovieReviewsArr,
					},
				}
			);
			res.status(200).json({
				status: 200,
				data: user.movieReviews,
				message: "Record Updated",
			});
		}
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: "Internal server error.",
		});
		console.log("Error: ", err);
	}
	client.close();
};

module.exports = { handleDeleteReview };
