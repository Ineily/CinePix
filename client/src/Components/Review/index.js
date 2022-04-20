import styled from "styled-components";
import Header from "../Header";
import { useContext, useState } from "react";
import { CurrentFilmContext } from "../MovieDetails/CurrentFilmContext";
import { CurrentUserContext } from "../Login/CurrentUserContext";
import { useHistory } from "react-router-dom";

const Review = () => {
	const { currentFilm } = useContext(CurrentFilmContext);
	const { currentUser } = useContext(CurrentUserContext);
	const [reviewInput, setReviewInput] = useState("");
	const [message, setMessage] = useState("");
	const [gotResponse, setGotResponse] = useState(false);
	let history = useHistory();
	let requestBody = {
		...currentFilm,
		id: currentUser.id,
		review: reviewInput,
	};

	const submitReview = (e) => {
		e.preventDefault();
		fetch("/review", {
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
					setGotResponse(true);
					setMessage(json.message);
					setTimeout(history.push(`/users/${currentUser.id}`), 5000);
				}
				{
					setMessage(json.message);
				}
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	};

	const handleCancel = (e) => {
		history.push(`/movies/${currentFilm.id}`);
	};
	return (
		<>
			<Header />
			<ReviewWrap>
				<div>
					<img src={currentFilm.poster_path} alt="Poster" />
					<ReviewContentWrap>
						<h2>{currentFilm.title}</h2>
						<p>Compose your review for the selected film below:</p>
						<form onSubmit={submitReview}>
							<textarea
								onChange={(e) => setReviewInput(e.target.value)}
							></textarea>
							<MessageDiv gotResponse={gotResponse}>
								{message}
							</MessageDiv>
							<div>
								<button type="submit">Submit</button>
								<button type="reset" onClick={handleCancel}>
									Cancel
								</button>
							</div>
						</form>
					</ReviewContentWrap>
				</div>
			</ReviewWrap>
		</>
	);
};

const MessageDiv = styled.div`
	opacity: ${(props) => (props.gotResponse ? "1" : "0")};
	width: max-content;
	padding: 10px;
	background: var(--color-element-background);
	color: var(--color-illustration-secondary);
	border-radius: 10px;
`;
const ReviewWrap = styled.div`
	width: max-content;
	display: flex;
	flex-direction: column;
	background: var(--color-element-background);
	color: var(--color-illustration-secondary);
	height: max-content;
	padding: 10px 0 10px 10px;
	margin: auto;
	margin-top: 50px;
	border-radius: 10px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
	align-items: center;
	div {
		display: flex;
	}

	h2 {
		font-size: 30px;
		font-style: italic;
	}

	img {
		border-radius: 10px;
		max-height: 225px;
	}

	p {
		margin-top: 10px;
		font-size: 20px;
	}
	form {
		display: flex;
		flex-direction: column;
		div {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		button {
			cursor: pointer;
			background: var(--color-element-background);
			color: var(--color-illustration-secondary);
			padding: 10px;
			border: 3px solid var(--color-illustration-secondary);
			font-family: "Poppins", sans-serif;
			font-size: 20px;
			border-radius: 30px;
			margin: 0 20px;
			&:hover {
				color: var(--color-illustration-tertiary);
				transition: 0.5s;
			}
		}
	}

	textarea {
		resize: none;
		width: 800px;
		outline: none;
		border: none;
		margin: 10px 0;
		height: 400px;
		border-radius: 10px;
		padding: 10px;
	}
`;

const ReviewContentWrap = styled.div`
	display: flex;
	width: max-content;
	flex-direction: column;
	align-items: center;
	height: max-content;
	background: var(--color-illustration-secondary);
	color: var(--color-element-background);
	margin: 0 30px 10px 30px;
	border-radius: 10px;
	padding: 10px;
`;

export default Review;
