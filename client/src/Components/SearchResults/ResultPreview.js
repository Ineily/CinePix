import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultPreview = ({ searchResults, posterPath, title, releaseDate, id }) => {
	//Assign a variable for baseURL and image size for the poster image path, as required by TMDB API
	const baseUrl = "http://image.tmdb.org/t/p/w185/";

	const year = releaseDate.slice(0, 4);

	return !posterPath ? (
		<ImgWrap to={`/movies/${id}`} posterPath={posterPath}>
			<MovieTitle className={"title"}>
				{title} ({year})
			</MovieTitle>
			No Image Available
		</ImgWrap>
	) : (
		<ImgWrap to={`/movies/${id}`} posterPath={posterPath}>
			<MovieTitle className={"title"}>
				{title} {releaseDate && `(${year})`}
			</MovieTitle>
			<img alt="Poster Image" src={`${baseUrl + posterPath}`} />
		</ImgWrap>
	);
};
const ImgWrap = styled(Link)`
	border-radius: 15px;
	margin: 15px;
	overflow: hidden;
	opacity: 0.8;
	transition: opacity 0.5s;
	cursor: pointer;
	position: relative;
	width: ${(props) => (props.posterPath ? "max-content" : "185px")};
	height: ${(props) => (props.posterPath ? "max-content" : "278px")};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${(props) => (props.posterPath ? "none" : "0 10px")};
	background: ${(props) =>
		props.posterPath ? "none" : "var(--color-element-background)"};
	color: ${(props) =>
		props.posterPath ? "none" : "var(--color-illustration-secondary)"};
	font-size: 15px;

	div {
		transform: scaleY(0);
	}

	&:hover {
		opacity: 1;

		div {
			background: hsla(0, 0%, 100%, 0.9);
			color: var(--color-illustration-tertiary);
			top: 0;
			display: flex;
			transform: scaleY(1);
		}
	}
`;

const MovieTitle = styled.div`
	transform: scaleY(0);
	position: absolute;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	font-style: italic;
	padding: 10px;
	transform: scaleY(1);
	transition: transform 0.25s ease-in;
	color: var(--color-illustration-tertiary);
	background: hsla(0, 0%, 100%, 0.9);
`;

export default ResultPreview;
