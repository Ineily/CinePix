import styled from "styled-components";
import FullReviewPreview from "./FullReviewPreview";
import { useContext } from "react";
import { CurrentUserContext } from "../Login/CurrentUserContext";
const FullReviewFeed = ({ firstName, reviews }) => {
	const { currentUser } = useContext(CurrentUserContext);

	return (
		<Wrapper>
			<h1>{firstName}'s Picks</h1>
			{reviews.map((review) => {
				return (
					<FullReviewPreview
						firstName={firstName}
						key={review.reviewId}
						userId={review.id}
						review={review.review}
						title={review.title}
						poster={review.poster_path}
						homepage={review.homepage}
						genres={review.genres}
						currentUser={currentUser}
						reviewId={review.reviewId}
					/>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		color: var(--color-element-background);
		font-size: 30px;
		margin-top: 30px;
	}
`;
export default FullReviewFeed;
