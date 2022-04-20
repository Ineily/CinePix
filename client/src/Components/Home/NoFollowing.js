import styled from "styled-components";

const NoFollowing = () => {
	return (
		<Wrapper>
			Looks like you haven't added any friends yet. Check out the list of
			suggested friends to see if there are any familiar faces.
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 500px;
	margin: 50px 0 0 0;
	transform: translateX(120px);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--color-element-background);
	color: var(--color-illustration-secondary);
	padding: 30px;
	border-radius: 20px;
`;
export default NoFollowing;
