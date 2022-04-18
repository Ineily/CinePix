import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import UserProfile from "./Components/User Profile";
import SearchResults from "./Components/SearchResults";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/users/:id">
					<UserProfile />
				</Route>
				<Route exact path="/register">
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
				<Route exact path="/searchresults">
					<SearchResults />
				</Route>
				<Route path="">
					<div>404 - This is not what you're looking for</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
