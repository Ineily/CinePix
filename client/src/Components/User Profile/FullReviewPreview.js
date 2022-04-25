import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FullReviewPreview = ({
	userId,
	currentUser,
	reviewId,
	review,
	title,
	homepage,
	poster,
	genres,
	firstName,
	setUserDetails,
	setFollowersNum,
	setFollowingNum,
	setStatus,
}) => {
	const requestBody = {
		userId: userId,
		reviewId: reviewId,
	};

	const fetchAfterDelete = () => {
		fetch(`/users/${userId}`)
			.then((res) => res.json())
			.then((data) => {
				setUserDetails(data.data);
				setFollowersNum(data.data.followers.length);
				setFollowingNum(data.data.following.length);
				setStatus("idle");
			})
			.catch((err) => console.log("Error: ", err));
	};
	const handleDelete = (e) => {
		e.preventDefault();
		setStatus("loading");
		fetch("/delete-review", {
			method: "PUT",
			body: JSON.stringify(requestBody),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.status === 200) {
					fetchAfterDelete();
				} else {
					window.alert(json.message);
				}
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	};
	return (
		<ReviewWrap>
			<ImgDeleteWrap>
				<img src={poster} alt="Poster" />
				{userId === currentUser.id && (
					<button onClick={handleDelete}>Delete</button>
				)}
			</ImgDeleteWrap>
			<MovieInfoWrap>
				<h2>{title}</h2>
				<p>{firstName} says:</p>
				<p>"{review}"</p>
				{genres && (
					<GenreDiv>
						<GenreTitle>Genres:</GenreTitle>
						{genres.map((genre) => {
							return <p>{genre.name}</p>;
						})}
					</GenreDiv>
				)}
				{homepage && (
					<Link to={{ pathname: `${homepage}` }} target="_blank">
						Movie Homepage
					</Link>
				)}
			</MovieInfoWrap>
		</ReviewWrap>
	);
};

const ReviewWrap = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: max-content;
	background: var(--color-element-background);
	justify-content: flex-start;
	margin: 30px;
	border-radius: 20px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
	padding: 30px;

	img {
		border-radius: 10px;
	}
`;

const MovieInfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	background: var(--color-illustration-secondary);
	color: var(--color-element-background);
	border-radius: 10px;
	margin: 0 20px;
	padding: 10px;
	h2 {
		font-style: italic;
		font-size: 30px;
		padding: 10px 0;
	}
	p {
		margin: 5px 0;
	}
	a {
		color: var(--color-element-background);
		text-decoration: underline;
		margin: 10px 0;
		&:hover {
			color: var(--color-illustration-tertiary);
			transition: 0.5s;
		}
	}
`;
const GenreDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const ImgDeleteWrap = styled.div`
	display: flex;
	flex-direction: column;

	button {
		cursor: pointer;
		background: var(--color-illustration-secondary);
		color: var(--color-element-background);
		padding: 10px;
		border: 3px solid var(--color-illustration-secondary);
		font-family: "Poppins", sans-serif;
		font-size: 20px;
		border-radius: 30px;
		margin: 20px 0;
		&:hover {
			color: var(--color-illustration-tertiary);

			transition: 0.5s;
		}
	}
`;

const GenreTitle = styled.p`
	font-size: 20px;
	text-decoration: underline;
`;
export default FullReviewPreview;
