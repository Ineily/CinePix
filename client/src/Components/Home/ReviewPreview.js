import { PicDiv, PreviewProfPic } from "./ProfilePreview";
import styled from "styled-components";
import friendprofpic from "../../assets/Kay-Bridges.jpg";
const ReviewPreview = () => {
	return (
		<PreviewWrap>
			<PicDiv className="profile">
				<PreviewProfPic alt="Profile Picture" src={friendprofpic} />
			</PicDiv>
			<PreviewReviewWrap>
				<PosterPicWrap>
					<img
						alt="Movie Poster"
						src="https://image.tmdb.org/t/p/w92/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
					/>
				</PosterPicWrap>
				<TitleReviewWrap>
					<h3>The Conjuring</h3>
					<Review>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</Review>
				</TitleReviewWrap>
			</PreviewReviewWrap>
			<AddBtn>Add to Watchlist</AddBtn>
		</PreviewWrap>
	);
};

const PreviewWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: max-content;
	background: var(--color-element-background);
	justify-content: flex-start;
	margin: 50px;
	border-radius: 20px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
	padding: 30px;

	.profile {
		margin-left: -70%;
	}
`;

const PosterPicWrap = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 10px;
	overflow: hidden;
	width: max-content;
	height: max-content;
	margin: 20px;
`;
const PreviewReviewWrap = styled.div`
	display: flex;
	border-radius: 10px;
	width: 100%;
	height: max-content;
	margin: 40px 0;
	padding: 0 20px;
	background: var(--color-illustration-secondary);

	h3 {
		color: var(--color-element-background);
		font-size: 25px;
		padding: 1rem;
		font-style: italic;
	}
`;

const TitleReviewWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 65%;
`;

const Review = styled.div`
	width: 100%;
	height: max-content;
	background: var(--color-element-headline);
	color: var(--color-element-background);
	padding: 15px;
	border-radius: 10px;
	margin: 10px 0 30px 0;
`;

const AddBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 200px;
	height: 30px;
	outline: none;
	border: none;
	border-radius: 5px;
	background: var(--color-illustration-secondary);
	cursor: pointer;
	font-family: "Poppins", sans-serif;
	color: var(--color-element-background);
	font-size: 15px;
`;
export default ReviewPreview;
