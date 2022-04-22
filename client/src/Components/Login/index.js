import styled from "styled-components";
import { useState, useContext } from "react";
import Header from "../Header";
import { Main } from "../LandingPage";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Login = () => {
	//set user's input for post to server
	const [userInput, setUserInput] = useState({ userName: "", password: "" });
	const { setCurrentUser } = useContext(CurrentUserContext);
	const [subState, setSubState] = useState("Idle");
	//error message for response from server
	const [errorMsg, setErrorMsg] = useState("");
	let history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubState("loading");
		fetch("/signin", {
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
	};

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
										userName: e.target.value,
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
							<ErrorDiv subState={subState}>{errorMsg}</ErrorDiv>
							<SignupDiv>
								Not a member yet?{" "}
								<Link to="/register">Register here!</Link>
							</SignupDiv>
							<button type="submit">Log In</button>
						</SignInForm>
					</FormDiv>
				</SignInWrap>
			</Main>
			<Footer />
		</>
	);
};

const SignupDiv = styled.div`
	width: 300px;
	height: 30px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: pre;
	margin: 10px;
	border-radius: 5px;
	background: var(--color-illustration-secondary);
	color: var(--color-element-background);
	Link {
	}
`;

const SignInWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: max-content;
	margin: 20vh auto;
	border-radius: 10px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
`;

export const FormDiv = styled.div`
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
		cursor: pointer;
	}
`;

export const ErrorDiv = styled.div`
	display: ${(props) =>
		props.subState === "Error"
			? "flex"
			: props.subState === "Success" || props.subState === "Idle"
			? "none"
			: "none"};
	justify-content: center;
	align-items: center;
	text-align: center;
	color: red;
	width: 300px;
	background: var(--color-element-headline);
	padding: 10px;
	border-radius: 5px;
	margin: 10px;
`;
export const TitleDiv = styled.div`
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
