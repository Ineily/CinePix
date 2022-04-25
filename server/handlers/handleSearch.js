const request = require("request-promise");
require("dotenv").config();
const { REACT_APP_TMDB_KEY } = process.env;

const handleSearch = async (req, res) => {
	let { search } = req.params;
	try {
		const response = await request(
			`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&query=${search}`
		);
		const result = await JSON.parse(response);
		if (!result) {
			res /
				statis(404).json({ status: 404, message: "No results found" });
		} else {
			res.status(200).json({
				status: 200,
				data: result,
				message: "success",
			});
		}
	} catch (err) {
		console.log("error", err.message);
	}
};

module.exports = { handleSearch };
