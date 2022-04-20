import styled from "styled-components";
import ReviewPreview from "./ReviewPreview";
import { useContext } from "react";
import { CurrentUserContext } from "../Login/CurrentUserContext";

const ReviewFeed = (users) => {
	const { currentUser } = useContext(CurrentUserContext);
	console.log("users: ", users.users, "currentUser: ", currentUser);
	let filteredUsers = users.users.filter((user) => {
		return currentUser.following.includes(user._id);
	});
	let movieReviewArray = filteredUsers.map((user) => {
		return Array.from(user.movieReviews);
	});
	console.log("movieReviewArray: ", movieReviewArray);
	return (
		<FeedWrap>
			{movieReviewArray.map((movieReview) => {
				return <ReviewPreview />;
			})}
		</FeedWrap>
	);
};

export const FeedWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 80%;
`;
export const Title = styled.h2`
	font-size: 35px;
	padding: 20px;
	color: var(--color-element-background);
`;
export default ReviewFeed;
