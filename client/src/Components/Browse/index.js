import styled from "styled-components";
import Header from "../Header";
import { PageDivision } from "../Home";
import { useState } from "react";
import ResultsGrid from "./ResultsGrid";
import { SearchContext } from "../SearchResults/SearchContext";
import { useContext } from "react";
import LoadAnimation from "../LoadAnimation";
import Footer from "../Footer";

const Browse = () => {
	const { searchResults, setSearchResults } = useContext(SearchContext);
	const [displayFlag, setDisplayFlag] = useState(false);
	const [state, setState] = useState("idle");
	const [errorMsg, setErrorMsg] = useState(null);
	const [currentPage, setCurrentPage] = useState(null);

	const handleClick = (e) => {
		setState("loading");
		setDisplayFlag(true);
		let genreId = e.target.className.slice(2);
		fetch(`/moviesbygenre/${genreId}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 200) {
					setSearchResults(data.data.results);
					setDisplayFlag(true);
					setState("idle");
					setCurrentPage(data.data.page);
				}
				{
					setState("error");
					setErrorMsg(data.message);
				}
			})
			.catch((err) => console.log("Error: ", err));
	};

	return (
		<>
			<Header />
			<Wrapper state={state}>
				<StyledPageDivision>
					<ButtonWrap>
						<button className={"a-28"} onClick={handleClick}>
							Action
						</button>
						<button className={"a-12"} onClick={handleClick}>
							Adventure
						</button>
						<button className={"a-16"} onClick={handleClick}>
							Animation
						</button>
						<button className={"a-35"} onClick={handleClick}>
							Comedy
						</button>
						<button className={"a-80"} onClick={handleClick}>
							Crime
						</button>
						<button className={"a-99"} onClick={handleClick}>
							Documentary
						</button>
						<button className={"a-18"} onClick={handleClick}>
							Drama
						</button>
						<button className={"a-10751"} onClick={handleClick}>
							Family
						</button>
						<button className={"a-14"} onClick={handleClick}>
							Fantasy
						</button>
						<button className={"a-36"} onClick={handleClick}>
							History
						</button>
						<button className={"a-27"} onClick={handleClick}>
							Horror
						</button>
						<button className={"a-10402"} onClick={handleClick}>
							Music
						</button>
						<button className={"a-9648"} onClick={handleClick}>
							Mystery
						</button>
						<button className={"a-10749"} onClick={handleClick}>
							Romance
						</button>
						<button className={"a-878"} onClick={handleClick}>
							Science Fiction
						</button>
						<button className={"a-10770"} onClick={handleClick}>
							TV Movie
						</button>
						<button className={"a-53"} onClick={handleClick}>
							Thriller
						</button>
						<button className={"a-10752"} onClick={handleClick}>
							War
						</button>
						<button className={"a-37"} onClick={handleClick}>
							Western
						</button>
					</ButtonWrap>
				</StyledPageDivision>
				{state === "loading" ? (
					<Loadwrap>
						<StyledLoadAnimation />
					</Loadwrap>
				) : (
					<PaginationReorder>
						<InstructionDiv displayFlag={displayFlag}>
							<p>Select a genre on the left!</p>
						</InstructionDiv>
						{searchResults && <ResultsGrid />}
						<PaginationDiv>
							<button disabled className={"page"} id={"prev"}>
								Previous Page
							</button>
							<div className={"current"} id={"current"}>
								1
							</div>
							<button className={"page"} id={"prev"}>
								Next Page
							</button>
						</PaginationDiv>
					</PaginationReorder>
				)}
			</Wrapper>
			<Footer />
		</>
	);
};

const StyledLoadAnimation = styled(LoadAnimation)`
	margin: auto;
`;
const PaginationDiv = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-evenly;
	align-items: center;
	color: var(--color-illustration-secondary);
	font-size: 20px;
	button {
		background: var(--color-element-background);
		padding: 10px;
		border-radius: 20px;
		color: var(--color-illustration-secondary);
		font-family: "Poppins", sans-serif;
		cursor: pointer;
		&:disabled {
			cursor: not-allowed;
		}
	}
	div {
		background: var(--color-element-background);
		padding: 10px 15px;
		border-radius: 50%;
		color: var(--color-illustration-secondary);
	}
`;
const PaginationReorder = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
`;

const StyledPageDivision = styled(PageDivision)`
	width: 20vw;
	border-right: 3px solid var(--color-element-background);
`;
const InstructionDiv = styled.div`
	margin: 40vh auto;
	width: max-content;
	padding: 30px;
	background: var(--color-element-background);
	height: max-content;
	border-radius: 20px;
	display: ${(props) => (!props.displayFlag ? "flex" : "none")};
	p {
		color: var(--color-illustration-secondary);
		font-size: 30px;
	}
`;

const ButtonWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px 0;

	button {
		cursor: pointer;
		background: var(--color-element-background);
		color: var(--color-illustration-secondary);
		padding: 10px;
		border: 3px solid var(--color-illustration-secondary);
		font-family: "Poppins", sans-serif;
		font-size: 15px;
		border-radius: 30px;
		margin: 0 20px;
		&:hover {
			color: var(--color-illustration-tertiary);
			transition: 0.5s;
		}
		&:active {
			background: var(--color-illustration-secondary);
			color: var(--color-element-background);
		}
	}
`;
const Loadwrap = styled.div`
	width: 90vw;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;
export default Browse;
