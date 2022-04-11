import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./LandingPage";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Browse from "./Components/Browse";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact path="/browse">
					<Browse />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
