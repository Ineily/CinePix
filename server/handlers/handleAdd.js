const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const handleAdd = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const db = client.db("FinalProject");

	const { currentUserId, friendId } = req.body;

	try {
		await client.connect();
		let newFriend = await db.collection("users").findOne({ _id: friendId });
		if (!newFriend) {
			res.status(404).json({
				status: 404,
				data: req.body,
				message: "Resource not found. Please try again.",
			});
		} else {
			let followersArr = newFriend.followers;
			let includesCurrentUser = followersArr.includes(currentUserId);
			if (!includesCurrentUser) {
				followersArr.push(currentUserId);
				await db
					.collection("users")
					.updateOne(
						{ _id: friendId },
						{ $set: { followers: followersArr } }
					);
			} else {
				res.status(400).json({
					status: 400,
					data: req.body,
					message: "Invalid request. You may already be friends.",
				});
				return;
			}
		}
		let currentUser = await db
			.collection("users")
			.findOne({ _id: currentUserId });
		if (!currentUser) {
			res.status(404).json({
				status: 404,
				data: req.body,
				message: "Resource not found. Please try again.",
			});
			return;
		} else {
			let followingArr = currentUser.following;
			let includesFriend = followingArr.includes(friendId);
			if (!includesFriend) {
				followingArr.push(friendId);
				await db
					.collection("users")
					.updateOne(
						{ _id: currentUserId },
						{ $set: { following: followingArr } }
					);
				res.status(200).json({
					status: 200,
					data: newFriend.followers,
					message: "Success",
				});
			} else {
				res.status(400).json({
					status: 400,
					data: req.body,
					message: "Invalid request. You may already be friends.",
				});
				return;
			}
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

module.exports = { handleAdd };
