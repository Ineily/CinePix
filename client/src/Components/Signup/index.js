import Header from "../Header";
import styled from "styled-components";
import { TitleDiv, FormDiv } from "../Login";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ErrorDiv } from "../Login";
import { CurrentUserContext } from "../Login/CurrentUserContext";

const Signup = () => {
	let { setCurrentUser } = useContext(CurrentUserContext);
	const history = useHistory();
	const [subState, setSubState] = useState("idle");
	const [userInput, setUserInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		password: "",
		password2: "",
	});

	const [errorMsg, setErrorMsg] = useState("");

	const handleSignup = (e) => {
		e.preventDefault();
		setSubState("loading");
		if (userInput.password !== userInput.password2) {
			setErrorMsg("Passwords do not match. Please try again.");
			setSubState("Error");
			return;
		} else {
			fetch("/register", {
				method: "POST",
				body: JSON.stringify(userInput),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((json) => {
					if (json.status === 200) {
						setSubState("Success");
						setCurrentUser({
							id: json.data.id,
							firstName: json.data.firstName,
							lastName: json.data.lastName,
							avatarSrc: json.data.avatarSrc,
							followers: json.data.followers,
							following: json.data.following,
						});
						history.push("/home");
					}
					{
						setSubState("Error");
						setErrorMsg(json.message);
					}
				})
				.catch((err) => {
					console.log("Error:", err);
				});
		}
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setUserInput({
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
			password2: "",
		});
		history.push("/");
	};

	return (
		<>
			<Header />
			<SignupWrapper>
				<TitleDiv>Register</TitleDiv>
				<FormDiv>
					<SignupForm id="signup-form" onSubmit={handleSignup}>
						<label>First Name</label>
						<input
							className="register-input"
							placeholder="First Name"
							required
							onChange={(e) => {
								setUserInput({
									...userInput,
									firstName: e.target.value,
								});
							}}
						></input>
						<label>Last Name</label>
						<input
							className="register-input"
							placeholder="Last Name"
							required
							onChange={(e) => {
								setUserInput({
									...userInput,
									lastName: e.target.value,
								});
							}}
						></input>
						<label>E-mail</label>
						<input
							className="register-input"
							type="email"
							placeholder="E-mail address"
							required
							onChange={(e) => {
								setUserInput({
									...userInput,
									email: e.target.value,
								});
							}}
						></input>
						<label>Create a Username</label>
						<input
							className="register-input"
							placeholder="Username"
							required
							onChange={(e) => {
								setUserInput({
									...userInput,
									username: e.target.value,
								});
							}}
						></input>
						<Labelwrap>
							<label>Create a Password</label>
						</Labelwrap>
						<input
							className="register-input"
							type="password"
							placeholder="Password"
							required
							onChange={(e) => {
								setUserInput({
									...userInput,
									password: e.target.value,
								});
							}}
						></input>
						<label>Verify Password</label>
						<input
							className="register-input"
							type="password"
							placeholder="Re-type Password"
							required
							onChange={(e) => {
								setUserInput({
									...userInput,
									password2: e.target.value,
								});
							}}
						></input>
						<ErrorDiv subState={subState}>{errorMsg}</ErrorDiv>
						<Btnwrap>
							<button type="submit" onClick={handleSignup}>
								Register
							</button>
							<Cancel onClick={handleCancel}>Cancel</Cancel>
						</Btnwrap>
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
	width: 325px;
	padding: 0 20px 0 0;
	color: var(--color-element-headline);
	cursor: pointer;
	position: relative;
`;
const Btnwrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0;
	width: 325px;
	color: var(--color-element-headline);
	cursor: pointer;
	position: relative;
`;

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

const Cancel = styled.button`
	width: 150px;
	height: 60px;
	margin: 10px;
	outline: none;
	border: none;
	border-radius: 10px;
	background: var(--color-element-highlight);
	font-size: 20px;
	font-weight: bold;
	color: var(--color-element-background);
	cursor: pointer;
`;
export default Signup;
