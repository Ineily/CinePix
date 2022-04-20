import styled from "styled-components";
import { keyframes } from "styled-components";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";
const LandingPage = () => {
	return (
		<>
			<Header />
			<Main>
				<WrapperDiv>
					<WelcomeDiv>
						<h1>Welcome to CinePix!</h1>
						<p>
							We are a small-scale movie review site for true
							cinephiles. <Link to="/register">Register</Link>{" "}
							today -- Here, everyone's a critic.
						</p>
						<p>Already a member? Log In Below!</p>
						<Link to="/login">
							<button>Log In</button>
						</Link>
					</WelcomeDiv>
				</WrapperDiv>
			</Main>
			<Footer />
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

export const Main = styled.div`
	background-color: var(--color-illustration-secondary);
	height: max-content;
	display: flex;
`;

const WrapperDiv = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const WelcomeDiv = styled.div`
	width: 800px;
	height: 500px;
	background: var(--color-element-background);
	border-radius: 20px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
	text-align: center;
	z-index: 1000;
	h1 {
		font-size: 80px;
		border-radius: 20px 20px 0 0;
		font-weight: bold;
		font-style: italic;
		color: var(--color-element-background);
		background-image: linear-gradient(
			45deg,
			var(--color-illustration-highlight),
			var(--color-illustration-tertiary)
		);
		background-size: 300%;
		background-position: left;
		animation: ${gradientAnimation} 8s infinite alternate;
		background-clip: text;
	}
	a {
		color: var(--color-illustration-highlight);
		&:hover {
			color: var(--color-illustration-tertiary);
			transition: 0.5s;
		}
	}
	p {
		font-size: 40px;
		padding: 20px;
		color: var(--color-illustration-secondary);
	}
	button {
		cursor: pointer;
		background: var(--color-element-background);
		color: var(--color-illustration-secondary);
		padding: 10px;
		border: 3px solid var(--color-illustration-secondary);
		font-family: "Poppins", sans-serif;
		font-size: 30px;
		border-radius: 20px;
		margin: 0 20px;
		&:hover {
			color: var(--color-illustration-tertiary);
			background: var(--color-illustration-secondary);
			transition: 0.5s;
		}
	}
`;

export default LandingPage;
