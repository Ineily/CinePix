import styled from "styled-components";
import { useContext } from "react";
import { SearchContext } from "../SearchResults/SearchContext";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
	const { setSearchResults } = useContext(SearchContext);
	const history = useHistory();

	//Handlers to expand search bar, clear search bar, fetch data on search
	const handleClick = () => {
		const search = document.querySelector(".search");
		search.classList.toggle("active");
	};

	const handleClear = () => {
		let searchField = document.querySelector(".search-field");
		searchField.value = "";
	};

	const handleKeyPress = (ev) => {
		let searchField = document.querySelector(".search-field");
		let userSearch = searchField.value;
		let urlQuery = userSearch.replaceAll(" ", "+");

		if (ev.keyCode === 13) {
			fetch(`/search/${urlQuery}`)
				.then((res) => res.json())
				.then((data) => {
					setSearchResults(data.data.results);
					history.push("/searchresults");
				})
				.catch((err) => console.log("Error: ", err));
		}
	};

	return (
		<Search className="search">
			<div onClick={handleClick} className="search-icon"></div>
			<div className="search-input">
				<input
					className="search-field"
					placeholder="Search Here"
					onKeyUp={handleKeyPress}
				></input>
				<span onClick={handleClear}></span>
			</div>
		</Search>
	);
};

const Search = styled.div`
	position: relative;
	height: 30px;
	background: var(--color-element-headline);
	border-radius: 30px;
	opacity: 0.8;
	box-shadow: 0 0 0 3px var(--color-illustration-highlight);
	overflow: hidden;

	&:hover {
		opacity: 1;
		transition: 0.5s;
	}

	.search-icon {
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		cursor: pointer;
	}
	.search-icon::before {
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		border: 2px solid var(--color-element-background);
		border-radius: 50%;
		transform: translate(-2px, -2px);
	}

	.search-icon::after {
		content: "";
		position: absolute;
		width: 1.5px;
		height: 7px;
		background: var(--color-element-background);
		transform: translate(4px, 4px) rotate(315deg);
	}
	.search-input {
		position: relative;
		left: 30px;
		width: 275px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-input input {
		position: absolute;
		width: 100%;
		border: none;
		outline: none;
		font-size: 15px;
		padding: 5px;
	}
	.search-input span {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 10px;
		height: 10px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			color: black;
		}
	}

	.search-input span::before {
		position: absolute;
		content: "";
		width: 2px;
		height: 10px;
		background: lightgray;
		transform: rotate(45deg);
	}
	.search-input span::after {
		position: absolute;
		content: "";
		width: 2px;
		height: 10px;
		background: lightgray;
		transform: rotate(315deg);
	}
`;
export default SearchBar;
