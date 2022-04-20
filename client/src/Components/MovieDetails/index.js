import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header";
import { CurrentFilmContext } from "./CurrentFilmContext";
import LoadAnimation from "../LoadAnimation";
import { ImgWrap, MovieTitle } from "../SearchResults/ResultPreview";
import Footer from "../Footer";

const MovieDetails = () => {
	const { id } = useParams();

	const baseUrl = "http://image.tmdb.org/t/p/w154";

	const [filmDetails, setFilmDetails] = useState({
		release_date: "",
		genres: [],
	});
	const [state, setState] = useState("idle");

	const year = filmDetails.release_date.slice(0, 4);
	useEffect(() => {
		setState("loading");
		fetch(`/movies/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setFilmDetails(data.data);
				setState("idle");
			})
			.catch((err) => console.log("Error: ", err));
	}, [id]);

	let history = useHistory();

	const { setCurrentFilm } = useContext(CurrentFilmContext);

	const startReview = (e) => {
		e.preventDefault();
		setCurrentFilm({
			id: filmDetails.id,
			title: filmDetails.title,
			poster_path: `${baseUrl}` + `${filmDetails.poster_path}`,
			genres: filmDetails.genres,
			homepage: filmDetails.homepage,
		});
		history.push("/review");
	};

	return (
		<>
			<Header />
			<Pagewrap>
				{state === "loading" ? (
					<LoadAnimation />
				) : (
					<Wrapper>
						<div>
							{!filmDetails.poster_path ? (
								<StyledImgWrap to={`#`}>
									<MovieTitle className={"title"}>
										{filmDetails.title}{" "}
										{filmDetails.release_date &&
											`(${filmDetails.release_date.slice(
												0,
												4
											)})`}
									</MovieTitle>
									No Image Available
								</StyledImgWrap>
							) : (
								<img
									alt="Poster"
									src={
										`${baseUrl}` +
										`${filmDetails.poster_path}`
									}
								/>
							)}
							<FilmInfoWrap>
								<h2>
									{filmDetails.title}{" "}
									{filmDetails.release_date && `(${year})`}
								</h2>
								<Genrediv>
									{filmDetails.genres.map((genre) => {
										return (
											<Link
												key={Math.floor(
													Math.random() * 100000000
												)}
												to="#"
											>
												{genre.name}
											</Link>
										);
									})}
								</Genrediv>
								<p>{filmDetails.overview}</p>
								{filmDetails.homepage && (
									<Link
										to={{
											pathname: `${filmDetails.homepage}`,
										}}
										target="_blank"
									>
										Movie Homepage
									</Link>
								)}
							</FilmInfoWrap>
						</div>
						<ButtonLinkWrap>
							<button onClick={startReview}>
								Review This Movie!
							</button>
							<button onClick={() => history.goBack()}>
								Back to Search Results
							</button>
						</ButtonLinkWrap>
					</Wrapper>
				)}
			</Pagewrap>
			<Footer />
		</>
	);
};

const Wrapper = styled.div`
	width: 90%;
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

	h2 {
		font-size: 30px;
		font-style: italic;
	}
	div {
		display: flex;
		justify-content: space-between;
		height: max-content;
		img {
			border-radius: 10px;
		}
	}
`;

const FilmInfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: max-content;
	background: var(--color-illustration-secondary);
	color: var(--color-element-background);
	margin: 0 30px 10px 30px;
	border-radius: 10px;
	padding: 10px;

	p {
		margin: 10px 0;
	}

	a {
		color: var(--color-element-background);
		text-decoration: underline;
		&:hover {
			color: var(--color-illustration-tertiary);
			transition: 0.5s;
		}
	}
`;

const Genrediv = styled.div`
	display: flex;
	width: max-content;
	a {
		border-radius: 20px;
		background: var(--color-element-background);
		color: var(--color-illustration-secondary);
		text-decoration: none;
		padding: 10px;
		margin: 10px;
		&:hover {
			color: var(--color-illustration-highlight);
			background: var();
			transition: 0.5s;
		}
	}
`;

const ButtonLinkWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	width: max-content;
	align-items: center;

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
			background: var(--color-illustration-secondary);
			transition: 0.5s;
		}
	}

	a {
		cursor: pointer;
		background: var(--color-element-background);
		color: var(--color-illustration-secondary);
		padding: 15px 10px;
		border: 3px solid var(--color-illustration-secondary);
		font-family: "Poppins", sans-serif;
		font-size: 20px;
		border-radius: 30px;
		margin: 0 20px;
		&:hover {
			color: var(--color-illustration-tertiary);
			background: var(--color-illustration-secondary);
			transition: 0.5s;
		}
	}
`;
const StyledImgWrap = styled(ImgWrap)`
	background: var(--color-illustration-secondary);
	color: var(--color-element-background);
	width: 50%;
	margin-top: 0;
`;

const Pagewrap = styled.div`
	height: 75vh;
`;
export default MovieDetails;
