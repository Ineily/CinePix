import styled from "styled-components";
import { keyframes } from "styled-components";
const LandingPage = () => {
	return (
		<>
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
	background-color: var(--color-illustration-secondary);
	height: 100vh;
`;

export default LandingPage;
