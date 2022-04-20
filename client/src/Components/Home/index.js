import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../Header";
import { Main } from "../LandingPage";
import ProfilePreview from "./ProfilePreview";
import ReviewFeed from "./ReviewFeed";
import SuggestedFriendGrid from "./SuggestedFriendGrid";
import { CurrentUserContext } from "../Login/CurrentUserContext";
import { UsersContext } from "./UsersContext";
import NoFollowing from "./NoFollowing";
import Footer from "../Footer";

const Home = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const { users, setUsers } = useContext(UsersContext);
	const [suggested, setSuggested] = useState([]);

	useEffect(() => {
		fetch(`/get-users`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data.data);
			})
			.catch((err) => console.log("Error: ", err));
	}, []);

	return (
		<>
			<Wrap>
				<Header />
				<StyledMain>
					<PageDivision>
						<ProfilePreview />
					</PageDivision>
					<PageDivision2>
						{currentUser.following.length === 0 && <NoFollowing />}
						<ReviewFeed />
					</PageDivision2>
					<PageDivision>
						<SuggestedFriendGrid />
					</PageDivision>
				</StyledMain>
			</Wrap>
		</>
	);
};

const StyledMain = styled(Main)`
	height: max-content;
`;

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

const Wrap = styled.div`
	height: max-content;
`;
export default Home;
