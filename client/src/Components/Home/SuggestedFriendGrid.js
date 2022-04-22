import styled from "styled-components";
import { Title } from "./ReviewFeed";
import { useContext } from "react";
import { UsersContext } from "./UsersContext";
import { CurrentUserContext } from "../Login/CurrentUserContext";
import SuggestedFriend from "./SuggestedFriend";

const SuggestedFriendGrid = () => {
	const { users } = useContext(UsersContext);
	const { currentUser } = useContext(CurrentUserContext);
	//filter to only include users current user does not follow
	let notFollowingPlusSelf = users.filter((user) => {
		return !currentUser.following.includes(user._id);
	});
	//remove self from resulting list
	let notFollowing = notFollowingPlusSelf.filter(
		(user) => user._id !== currentUser.id
	);

	return (
		<Wrapper>
			<Title>Suggested Friends</Title>
			<FriendGridWrap>
				{notFollowing.map((user) => {
					return (
						<SuggestedFriend
							key={Math.floor(Math.random() * 100000000)}
							id={user._id}
							firstName={user.firstName}
							lastName={user.lastName}
							avatarSrc={user.avatarSrc}
						/>
					);
				})}
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

export default SuggestedFriendGrid;
