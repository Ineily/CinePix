import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestedFriend = ({ id, firstName, lastName, avatarSrc }) => {
	return (
		<SugFriendWrap>
			<Link to={`/users/${id}`}>
				<img alt="Suggested Friend" src={avatarSrc} />
			</Link>
			<p>
				{firstName} {lastName}
			</p>
		</SugFriendWrap>
	);
};

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
export default SuggestedFriend;
