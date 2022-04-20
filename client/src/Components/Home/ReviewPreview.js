import { PicDiv, PreviewProfPic } from "./ProfilePreview";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ReviewPreview = ({ id, review, title, poster_path }) => {
	const [avatarSrc, setAvatarSrc] = useState("");

	useEffect(() => {
		fetch(`/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setAvatarSrc(data.data.avatarSrc);
			})
			.catch((err) => console.log("Error: ", err));
	}, [id]);

	return (
		<PreviewWrap>
			<PicDiv className="profile">
				<Link to={`users/${id}`}>
					<PreviewProfPic alt="Profile Picture" src={avatarSrc} />
				</Link>
			</PicDiv>
			<PreviewReviewWrap>
				<PosterPicWrap>
					<img alt="Movie Poster" src={poster_path} />
					<h3>{title}</h3>
				</PosterPicWrap>
				<TitleReviewWrap>
					<Review>{review}</Review>
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
	height: max-content;
	background: var(--color-element-background);
	justify-content: center;
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
	align-items: center;
	justify-content: center;
	overflow: hidden;
	width: max-content;
	height: max-content;
	margin: 10px;
	img {
		border-radius: 10px;
	}
`;
const PreviewReviewWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
	width: 100%;
	height: max-content;
	margin: 40px 0;
	padding: 10px;
	background: var(--color-illustration-secondary);

	h3 {
		color: var(--color-element-background);
		font-size: 20px;
		padding: 0.5rem;
		font-style: italic;
	}
`;

const TitleReviewWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 65%;
`;

const Review = styled.div`
	display: flex;
	justify-content: center;
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
