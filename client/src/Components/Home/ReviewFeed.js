import styled from "styled-components";
import ReviewPreview from "./ReviewPreview";
import { useContext } from "react";
import { CurrentUserContext } from "../Login/CurrentUserContext";
import { UsersContext } from "./UsersContext";
import Footer from "../Footer";

const ReviewFeed = () => {
	const { users } = useContext(UsersContext);
	const { currentUser } = useContext(CurrentUserContext);
	let flag = false;

	let filteredUsers = users.filter((user) => {
		return currentUser.following.includes(user._id);
	});
	console.log("filteredUsers: ", filteredUsers);
	let movieReviewArray = filteredUsers.map((user) => {
		return user.movieReviews;
	});
	let mergedMovieArray = [].concat.apply([], movieReviewArray);

	return (
		<>
			<FeedWrap flag={flag}>
				{mergedMovieArray.map((movieReview) => {
					return (
						<ReviewPreview
							key={movieReview.reviewId}
							reviewId={movieReview.reviewId}
							id={movieReview.id}
							genres={movieReview.genres}
							title={movieReview.title}
							review={movieReview.review}
							poster_path={movieReview.poster_path}
						/>
					);
				})}
			</FeedWrap>
		</>
	);
};

export const FeedWrap = styled.div`
	display: ${(props) => (props.flag ? "none" : "flex")};
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
