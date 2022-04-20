import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../Header";
import { Main } from "../LandingPage";
import ProfilePreview from "./ProfilePreview";
import ReviewFeed from "./ReviewFeed";
import SuggestedFriendGrid from "./SuggestedFriendGrid";
import { CurrentUserContext } from "../Login/CurrentUserContext";

const Home = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`/get-users`)
			.then((res) => res.json())
			.then((data) => {
				console.log("data: ", data);
				setUsers(data.data);
				const sugFriendsArray = users.filter(
					(user) => !currentUser.following.includes(user._id)
				);

				console.log(
					"users: ",
					users,
					"following: ",
					currentUser.following,
					"suggestedFriends: ",
					sugFriendsArray
				);
			})
			.catch((err) => console.log("Error: ", err));
	}, []);
	return (
		<>
			<Header />
			<Main>
				<PageDivision>
					<ProfilePreview />
				</PageDivision>
				<PageDivision2>
					<ReviewFeed users={users} />
				</PageDivision2>
				<PageDivision>
					<SuggestedFriendGrid />
				</PageDivision>
			</Main>
		</>
	);
};

export const PageDivision = styled.div`
	display: flex;
	justify-content: center;
	width: 30vw;
	position: sticky;
`;

const PageDivision2 = styled.div`
	display: flex;
	justify-content: center;
	height: 90vh;
	width: 40vw;
	position: sticky;
`;
export default Home;
