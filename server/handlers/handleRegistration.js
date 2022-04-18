const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
const { v4: uuidv4 } = require("uuid");

const handleRegistration = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("FinalProject");
    const {
        firstName,
		lastName,
		email,
		username,
		password,
		password2
    } = req.body;

    const id = uuidv4();

try {
    await client.connect();
    const results = await db.collection("users").find().toArray();
    //Check if email already exists in database:
    let emailExists = results.some((user) => user.email.toLowerCase() === email.toLowerCase());
    //Check if first name or last name fields included a number:
    let hasNumber = /\d/;
    let firstNameTest = hasNumber.test(firstName);
    let lastNameTest = hasNumber.test(lastName);
    //Basic e-mail check:
    let isEmail = email.includes("@")
    if (emailExists) {
        res.status(409).json({status: 409, data: req.body, message: "Email matches existing user."})
    } else if (!results) {
    res.status(404).json({status: 404, message: "Please try again."})
    } else if (firstNameTest || lastNameTest) {
    res.status(400).json({status: 400, data: req.body, message: "Invalid entry on form. Please try again."})
    } else if (!isEmail) {
    res.status(400).json({status: 400, data: req.body, message: "Please provide a valid e-mail address."})
    }
    else {
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        followers: [],
        following: [],
        avatarSrc: "/assets/avatar-1577909_640.png",
        bio: "",
        bannerSrc: "",
        _id: id,
        movieReviews: [
			{ id: "", review: "" },
			{ id: "", review: "" },
			{ id: "", review: "" }]
    }
    await db.collection("users").insertOne(newUser)
    res.status(200).json({status: 200, data: {id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName, avatarSrc: newUser.avatarSrc, followers: newUser.followers, following: newUser.following}, message: "User created"})
}
} catch (err) {
    res.status(500).json({status: 500, message: "Internal server error."})
    console.log("Error: ", err)
}
client.close();
};

module.exports={handleRegistration};