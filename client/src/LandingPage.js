import styled from "styled-components";
import { keyframes } from "styled-components";
import Header from "./Components/Header";
const LandingPage = () => {
	return (
		<>
			<Header />
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

export const Main = styled.div`
	background-color: var(--color-illustration-secondary);
	height: max-content;
	display: flex;
`;

export default LandingPage;
