import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./LandingPage";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
