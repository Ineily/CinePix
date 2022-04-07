import styled from "styled-components";
import { keyframes } from "styled-components";
const LandingPage = () => {
	return (
		<>
			<GradientDiv>
				<h1>Twinema</h1>
				<div class="curve">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							class="shape-fill"
						></path>
					</svg>
				</div>
			</GradientDiv>
			<Main></Main>
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

const Main = styled.div`
	background-color: var(--color-element-background);
	height: 100vh;
`;
const GradientDiv = styled.div`
	position: relative;
	padding: 50px;
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
		opacity: 0.7;
	}
	.curve {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.curve svg {
		position: relative;
		display: block;
		width: calc(300% + 1.3px);
		height: 60px;
	}

	.curve .shape-fill {
		fill: var(--color-element-background);
	}
`;
export default LandingPage;
