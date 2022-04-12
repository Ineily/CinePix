import styled from "styled-components";
import Header from "../Header";
import { Main } from "../../LandingPage";
import ProfilePreview from "./ProfilePreview";
const Home = () => {
	return (
		<>
			<Header />
			<Main>
				<ProfilePreviewDiv>
					<ProfilePreview />
				</ProfilePreviewDiv>
			</Main>
		</>
	);
};

const ProfilePreviewDiv = styled.div`
	display: flex;
	justify-content: center;
	border-right: 2px solid white;
	height: 90vh;
	width: 30vw;
`;
export default Home;
