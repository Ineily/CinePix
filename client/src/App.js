import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import UserProfile from "./Components/User Profile";
import SearchResults from "./Components/SearchResults";
import { useContext } from "react";
import { CurrentUserContext } from "./Components/Login/CurrentUserContext";

function App() {
	const {currentUser} = useContext(CurrentUserContext)
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
				{currentUser.id ? <Home /> : <Login />}
				</Route>
				<Route exact path="/browse">
				{currentUser.id ? <Browse /> : <Login />}
				</Route>
				<Route exact path="/searchresults">
				{currentUser.id ? <SearchResults /> : <Login />}
				</Route>
				<Route path="">
					<div>404 - This is not what you're looking for</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
