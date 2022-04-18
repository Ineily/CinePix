import Header from "../Header";
import styled from "styled-components";
import { TitleDiv, FormDiv } from "../Login";

const Signup = () => {
	return (
		<>
			<Header />
			<SignupWrapper>
				<TitleDiv>Register</TitleDiv>
				<FormDiv>
					<SignupForm>
						<label>First Name</label>
						<input placeholder="First Name"></input>
						<label>Last Name</label>
						<input placeholder="Last Name"></input>
						<label>E-mail</label>
						<input
							type="email"
							placeholder="E-mail address"
						></input>
						<label>Create a Username</label>
						<input placeholder="Username"></input>
						<Labelwrap>
						<label>Create a Password</label>
						<div>Requirements</div>
						</Labelwrap>
							<input
								type="password"
								placeholder="Password"
							></input>
						<label>Verify Password</label>
						<input type="password" placeholder="Password"></input>
					</SignupForm>
				</FormDiv>
			</SignupWrapper>
		</>
	);
};

const SignupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: max-content;
	margin: 10vh auto;
	border-radius: 10px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
`;

const Labelwrap = styled.div`
display: flex;
justify-content: space-between;
width: 300px;

`
const SignupForm = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	opacity: 1;

	label {
		color: var(--color-illustration-secondary);
		display: flex;
		align-self: flex-start;
		padding: 0 10px;
	}
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
		cursor: pointer;
	}
`;
export default Signup;
