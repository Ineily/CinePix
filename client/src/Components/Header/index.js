import { keyframes } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

const Header = () => {
	return (
		<>
			<GradientDiv>
				<LogoSearchWrapper>
					<NavLink to="/home">
						<h1>Twinema</h1>
					</NavLink>
					<SearchBar />
				</LogoSearchWrapper>
				<Nav />
			</GradientDiv>
		</>
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
	height: 100px;
	position: relative;
	padding: 20px 0 0 20px;
	background-image: linear-gradient(
		45deg,
		var(--color-illustration-highlight),
		var(--color-illustration-tertiary)
	);
	background-size: 300%;
	background-position: left;
	animation: ${gradientAnimation} 6s infinite alternate;

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

export default Header;
