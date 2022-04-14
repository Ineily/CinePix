const request = require("request-promise");
require("dotenv").config();
const { REACT_APP_TMDB_KEY } = process.env;

const handleSearch = async (req, res) => {
	let searchQuery = req.params.search;
	try {
		const response = await request(
			`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&query=${searchQuery}`
		);
		const result = await JSON.parse(response);
		console.log("result: ", result);
		res.status(200).json({
			status: 200,
			data: result,
			message: "success",
		});
	} catch (err) {
		console.log("error", err.message);
	}
};

module.exports = { handleSearch };
