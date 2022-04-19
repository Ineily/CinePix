import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentUserProvider from "./Components/Login/CurrentUserContext";
import CurrentFilmProvider from "./Components/MovieDetails/CurrentFilmContext";
import SearchProvider from "./Components/SearchResults/SearchContext";

ReactDOM.render(
	<CurrentFilmProvider>
	<CurrentUserProvider>
		<SearchProvider>
			<App />
		</SearchProvider>
	</CurrentUserProvider>
	</CurrentFilmProvider>,
	document.getElementById("root")
);
