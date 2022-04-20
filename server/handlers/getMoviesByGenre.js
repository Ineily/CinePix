const request = require("request-promise");
require("dotenv").config();
const { REACT_APP_TMDB_KEY } = process.env;

const getMoviesByGenre = async (req, res) => {
	const { id } = req.params;

	try {
		const response = await request(
			`https://api.themoviedb.org/3/discover/movie/?api_key=${REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${id}`
		);
		const results = await JSON.parse(response);
		!results
			? res
					.status(404)
					.json({ status: 404, data: id, message: "Not found" })
			: res
					.status(200)
					.json({ status: 200, data: results, message: "success" });
	} catch (err) {
		res.status(500).json({ status: 500, message: "Internal Server Error" });
		console.log("error", err.message);
	}
};
module.exports = { getMoviesByGenre };
