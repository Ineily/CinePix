import styled from "styled-components";
import ReviewPreview from "./ReviewPreview";
const ReviewFeed = () => {
	return (
		<FeedWrap>
			<Title>Friends' Picks</Title>
			<ReviewPreview />
			<ReviewPreview />
			<ReviewPreview />
		</FeedWrap>
	);
};

const FeedWrap = styled.div`
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
