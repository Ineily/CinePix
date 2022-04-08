import { keyframes } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
	const handleClick = () => {
		const search = document.querySelector(".search");
		search.classList.toggle("active");
	};

	const handleClear = () => {
		let searchField = document.querySelector(".search-field");
		searchField.value = "";
	};
	return (
		<GradientDiv>
			<LogoSearchWrapper>
				<NavLink to="/">
					<h1>Twinema</h1>
				</NavLink>
				<SearchBar className="search">
					<div onClick={handleClick} className="search-icon"></div>
					<div className="search-input">
						<input
							className="search-field"
							placeholder="Search Here"
						></input>
						<span onClick={handleClear}></span>
					</div>
				</SearchBar>
			</LogoSearchWrapper>
		</GradientDiv>
	);
};
const gradientAnimation = keyframes`
0% {
    background-position: left;
}
100% {
    background-position: right;
}
`;

const GradientDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	height: 115px;
	padding: 20px 0 0 20px;
	background-image: linear-gradient(
		45deg,
		var(--color-illustration-highlight),
		var(--color-illustration-tertiary)
	);
	background-size: 300%;
	background-position: left;
	animation: ${gradientAnimation} 14s infinite alternate;

	h1 {
		color: var(--color-element-headline);
		font-size: 30px;
		top: 0;
		left: 0;
		opacity: 0.8;
		cursor: pointer;
		padding: 0 20px 0 0;

		&:hover {
			opacity: 1;
			transition: 0.5s;
		}
	}
`;

const LogoSearchWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 500px;
	height: 30px;
	margin-top: -20px;
	padding: 10px;

	.search {
		width: 30px;
	}

	.search.active {
		width: 400px;
		opacity: 1;
	}
`;

const SearchBar = styled.div`
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
export default Header;
