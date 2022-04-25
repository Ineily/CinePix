import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import { FollowDiv, SocialsNums } from "../Home/ProfilePreview";
import { PageDivision } from "../Home";
import FullReviewFeed from "./FullReviewFeed";
import LoadAnimation from "../LoadAnimation";
import Footer from "../Footer";
import { useContext } from "react";
import { CurrentUserContext } from "../Login/CurrentUserContext";
import NoFollowing from "../Home/NoFollowing";

const UserProfile = () => {
	const { id } = useParams();
	//state for profile details
	const [userDetails, setUserDetails] = useState({ movieReviews: [] });
	//state for whether item is loading from server
	const [status, setStatus] = useState("idle");
	//set # to display followers array length in profile preview
	const [followersNum, setFollowersNum] = useState(0);
	//set # to display following array length in profile preview
	const [followingNum, setFollowingNum] = useState(0);
	let { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	//if current user doesn't follow (and is not current user), need add button
	let doesCurrentUserFollow = currentUser.following.includes(id);
	//request body for the handle add function
	const requestBody = {
		friendId: id,
		currentUserId: currentUser.id,
	};

	useEffect(() => {
		setStatus("loading");
		fetch(`/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setUserDetails(data.data);
				setFollowersNum(data.data.followers.length);
				setFollowingNum(data.data.following.length);
				setStatus("idle");
			})
			.catch((err) => console.log("Error: ", err));
	}, [id]);

	const fetchAfterAdd = () => {
		setStatus("loading");
		fetch(`/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setUserDetails(data.data);
				setFollowersNum(data.data.followers.length);
				setFollowingNum(data.data.following.length);
			})
			.catch((err) => console.log("Error: ", err));
		fetch(`/users/${currentUser.id}`)
			.then((res) => res.json())
			.then((data) => {
				setCurrentUser({
					...currentUser,
					following: data.data.following,
				});
			})
			.catch((err) => console.log("Error: ", err));
	};
	const handleAddFriend = (e) => {
		e.preventDefault();
		setStatus("loading");
		fetch("/add-friend", {
			method: "PUT",
			body: JSON.stringify(requestBody),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.status === 200) {
					fetchAfterAdd();
				} else {
					window.alert(json.message);
					setStatus("idle");
				}
			})
			.catch((err) => {
				console.log("Error:", err);
				setStatus("error");
			});
	};

	return (
		<>
			<Header />
			{status === "loading" ? (
				<LoadAnimation />
			) : (
				<>
					<ProfileWrap>
						<PageDivision>
							<DetailsDiv>
								<ProfilePic
									alt="Profile Picture"
									src={userDetails.avatarSrc}
								/>
								<NameDiv>
									<p>
										{userDetails.firstName}{" "}
										{userDetails.lastName}
									</p>
								</NameDiv>
								<StyledFollowDiv>
									<p>Followers</p>
									<p>Following</p>
								</StyledFollowDiv>
								<SocialsNums>
									<p>{followersNum}</p>
									<p>|</p>
									<p>{followingNum}</p>
								</SocialsNums>
								<BioDiv>{userDetails.bio}</BioDiv>
								{!doesCurrentUserFollow &&
									id !== currentUser.id && (
										<button onClick={handleAddFriend}>
											Add Friend
										</button>
									)}
								{
									//still need to add remove friend button functionality.
									doesCurrentUserFollow &&
										id !== currentUser.id && (
											<button>Remove Friend</button>
										)
								}
							</DetailsDiv>
						</PageDivision>
						<StyledPageDiv>
							{userDetails.movieReviews.length === 0 && (
								<NoFollowing
									children="No reviews posted yet. Browse or search for
								a movie to review!"
								/>
							)}
							<FullReviewFeed
								id={id}
								status={status}
								reviews={userDetails.movieReviews}
								firstName={userDetails.firstName}
								setUserDetails={setUserDetails}
								setFollowersNum={setFollowersNum}
								setFollowingNum={setFollowingNum}
								setStatus={setStatus}
							/>
						</StyledPageDiv>
					</ProfileWrap>
					<Footer />
				</>
			)}
		</>
	);
};

const ProfileWrap = styled.div`
	display: flex;
	min-height: 90vh;
`;

const StyledPageDiv = styled(PageDivision)`
	width: 60vw;
`;
const NameDiv = styled.div`
	width: max-content;
	padding: 15px 15px 0 15px;
	color: var(--color-illustration-secondary);
`;
const DetailsDiv = styled.div`
	background: var(--color-element-background);
	width: 350px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 100px 40px;
	border-radius: 10px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
	z-index: 50;
	height: max-content;
	position: fixed;

	a {
		cursor: pointer;
	}

	button {
		width: 150px;
		height: 60px;
		margin: 10px;
		outline: none;
		border: none;
		border-radius: 20px;
		background: var(--color-illustration-secondary);
		font-size: 20px;
		font-weight: bold;
		color: var(--color-element-background);
		cursor: pointer;
	}
`;
const StyledFollowDiv = styled(FollowDiv)`
	display: flex;
	width: 180px;
`;
const ProfilePic = styled.img`
	width: 175px;
	border-radius: 50%;
	margin-top: -110px;
	border: 3px solid var(--color-illustration-secondary);
`;

const BioDiv = styled.div`
	display: flex;
	align-items: center;
	background: var(--color-illustration-secondary);
	color: var(--color-element-background);
	border-radius: 10px;
	margin: 20px;
	padding: 10px;
`;
export default UserProfile;
