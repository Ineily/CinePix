import styled from "styled-components";
import Header from "../Header";
import { Main } from "../LandingPage";
import ProfilePreview from "./ProfilePreview";
import ReviewFeed from "./ReviewFeed";
import SuggestedFriendGrid from "./SuggestedFriendGrid";

const Home = () => {
		return (
		<>
			<Header />
			<Main>
				<PageDivision>
					<ProfilePreview />
				</PageDivision>
				<PageDivision2>
					<ReviewFeed />
				</PageDivision2>
				<PageDivision>
					<SuggestedFriendGrid />
				</PageDivision>
			</Main>
		</>
	);
};

const PageDivision = styled.div`
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
