const request = require("request-promise");

const testThroughInsomnia = async (req, res) => {
	try {
		const response = await request(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=368a1bc63b6cb7a0f0aab0aad0475ea5&language=en-US"
		);
		const dramaMovies = await JSON.parse(response);
		res.status(200).json({
			status: 200,
			data: dramaMovies,
			message: "success",
		});
	} catch (err) {
		console.log("error", err.message);
	}
};
module.exports = { testThroughInsomnia };