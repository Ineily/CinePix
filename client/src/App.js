import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./LandingPage";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
