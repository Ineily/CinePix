import styled from "styled-components";
import { useState, useContext } from "react";
import Header from "../Header";
import { Main } from "../../LandingPage";
const Login = () => {
	const [userInput, setUserInput] = useState({ username: "", password: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	console.log("userInput: ", userInput);
	return (
		<>
			<Header />
			<Main>
				<SignInWrap>
					<TitleDiv>Log In</TitleDiv>
					<FormDiv>
						<SignInForm onSubmit={handleSubmit}>
							<input
								placeholder="Enter Username"
								onChange={(e) => {
									setUserInput({
										...userInput,
										username: e.target.value,
									});
								}}
							/>
							<input
								type="password"
								placeholder="Enter Password"
								onChange={(e) => {
									setUserInput({
										...userInput,
										password: e.target.value,
									});
								}}
							/>
							<button type="submit">Log In</button>
						</SignInForm>
					</FormDiv>
				</SignInWrap>
			</Main>
		</>
	);
};

const SignInWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: max-content;
	margin: 20vh auto;
	border-radius: 10px;
`;

const FormDiv = styled.div`
	background: hsla(177, 100%, 14%, 0.7);
	border-radius: 0 0 10px 10px;
	padding: 20px;
`;

const SignInForm = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	opacity: 1;

	input {
		width: 300px;
		height: 30px;
		outline: none;
		border: none;
		border-radius: 5px;
		margin: 10px;
		opacity: 0.8;
		&:focus {
			opacity: 1;
		}
	}

	button {
		width: 150px;
		height: 60px;
		margin: 10px;
		outline: none;
		border: none;
		border-radius: 10px;
		background: var(--color-element-background);
		font-size: 20px;
		font-weight: bold;
		color: var(--color-element-headline);
	}
`;

const TitleDiv = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px 0;
	color: var(--color-element-headline);
	font-size: 30px;
	width: 100%;
	border-radius: 10px 10px 0 0;
	background: var(--color-element-background);
`;
export default Login;
