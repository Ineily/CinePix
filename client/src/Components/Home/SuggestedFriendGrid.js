import styled from "styled-components";
import { Title } from "./ReviewFeed";
import friend1 from "../../assets/Cheryl-Payne.jpg";
import friend2 from "../../assets/Jackie-McIlwaine.jpg";
import friend3 from "../../assets/Joseph-Gonzalez.jpg";
import friend4 from "../../assets/Max-Mutinda.jpg";
import friend5 from "../../assets/Rebecca-Shephard.jpg";
import friend6 from "../../assets/Trent-Alexander.jpg";

const SuggestedFriendGrid = () => {
	return (
		<Wrapper>
			<Title>Suggested Friends</Title>
			<FriendGridWrap>
				<SugFriendWrap>
					<img alt="Suggested Friend" src={friend1} />
					<p>Cheryl Payne</p>
				</SugFriendWrap>
				<SugFriendWrap>
					<img alt="Suggested Friend" src={friend2} />
					<p>Jackie McIlwaine</p>
				</SugFriendWrap>
				<SugFriendWrap>
					<img alt="Suggested Friend" src={friend3} />
					<p>Joseph Gonzalez</p>
				</SugFriendWrap>
				<SugFriendWrap>
					<img alt="Suggested Friend" src={friend4} />
					<p>Max Mutinda</p>
				</SugFriendWrap>
				<SugFriendWrap>
					<img alt="Suggested Friend" src={friend5} />
					<p>Rebecca Shephard</p>
				</SugFriendWrap>
				<SugFriendWrap>
					<img alt="Suggested Friend" src={friend6} />
					<p>Trent Alexander</p>
				</SugFriendWrap>
			</FriendGridWrap>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80vh;
`;
const FriendGridWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const SugFriendWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px;

	img {
		width: 100px;
		border-radius: 50%;
	}
	p {
		padding: 10px 0;
		color: var(--color-element-background);
	}
`;
export default SuggestedFriendGrid;
