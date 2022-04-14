import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import { FollowDiv, SocialsNums } from "../Home/ProfilePreview";

const UserProfile = () => {
	const { id } = useParams();
	const [userDetails, setUserDetails] = useState({});
	const [status, setStatus] = useState("idle");
	const [followersNum, setFollowersNum] = useState(0);
	const [followingNum, setFollowingNum] = useState(0);

	useEffect(() => {
		setStatus("loading");
		fetch(`/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setStatus("idle");
				setUserDetails(data.data);
				setFollowersNum(data.data.followers.length);
				setFollowingNum(data.data.following.length);
			})
			.catch((err) => console.log("Error: ", err));
	}, [id]);

	return (
		<>
			<Header />
			{status === "loading" ? (
				<div>"Loading"</div>
			) : (
				<>
					<ProfileWrap>
						<DetailsDiv>
							<ProfilePic
								alt="Profile Picture"
								src={userDetails.avatarSrc}
							/>
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
						</DetailsDiv>
					</ProfileWrap>
				</>
			)}
		</>
	);
};

const ProfileWrap = styled.div``;

const DetailsDiv = styled.div`
	background: var(--color-element-background);
	width: 375px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 100px 40px;
	border-radius: 10px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
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
