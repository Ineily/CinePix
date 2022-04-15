import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CurrentUserProvider from "./Components/Login/CurrentUserContext";
import SearchProvider from "./Components/SearchResults/SearchContext";

ReactDOM.render(
	<CurrentUserProvider>
		<SearchProvider>
			<App />
		</SearchProvider>
	</CurrentUserProvider>,
	document.getElementById("root")
);
