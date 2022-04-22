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
	let { currentUser } = useContext(CurrentUserContext);
	//if current user doesn't follow, need add button
	let doesCurrentUserFollow = currentUser.following.includes(id);

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
								{!doesCurrentUserFollow && (
									<button>Add Friend</button>
								)}
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
