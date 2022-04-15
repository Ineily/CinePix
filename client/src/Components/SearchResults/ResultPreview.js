import styled from "styled-components";

const ResultPreview = ({ searchResults, posterPath, title, releaseDate }) => {
	//Assign a variable for baseURL and image size for the poster image path, as required by TMDB API
	const baseUrl = "http://image.tmdb.org/t/p/w185/";

	const year = releaseDate.slice(0, 4);
	// console.log(
	// 	"searchResults: ",
	// 	searchResults,
	// 	"posterPath: ",
	// 	baseUrl + posterPath
	// );

	return (
		<ImgWrap>
			<MovieTitle className={"title"}>
				{title} ({year})
			</MovieTitle>
			<img alt="Poster Image" src={`${baseUrl + posterPath}`} />
		</ImgWrap>
	);
};
const ImgWrap = styled.div`
	border-radius: 15px;
	margin: 15px;
	overflow: hidden;
	opacity: 0.8;
	transition: opacity 0.5s;
	cursor: pointer;
	position: relative;

	div {
		transform: translateY(100%);
	}

	&:hover {
		opacity: 1;

		div {
			display: flex;
			background: hsla(0, 0%, 100%, 0.75);
			color: var(--color-illustration-tertiary);
			top: 0;
			transform: translateY(0);
			transition: transform 1s;
		}
	}
`;

const MovieTitle = styled.div`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	font-style: italic;
	padding: 10px;
`;
export default ResultPreview;
