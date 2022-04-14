import styled from "styled-components";
import { FaBaby } from "react-icons/fa";

const ProfilePreview = () => {
	return (
		<PreviewDiv>
			<PicDiv>
				<PreviewProfPic
					alt="Profile Photo"
					src="../../assets/Richard-Storey.jpg"
				/>
			</PicDiv>
			<FollowDiv>
				<p>Followers</p>
				<p>Following</p>
			</FollowDiv>
			<SocialsNums>
				<p>5</p>
				<p>|</p>
				<p>3</p>
			</SocialsNums>
			<ReviewStatsDiv>
				<TopWrap>
					<LabelDiv>
						<p># of Reviews</p>
						<NumDiv>
							<p>12</p>
						</NumDiv>
					</LabelDiv>
					<LabelDiv>
						<p>Reviewer Status</p>
						<StatDiv>
							<StyledFaBaby />
							<p> Newbie</p>
						</StatDiv>
					</LabelDiv>
				</TopWrap>
				<RecentPick>
					<p>A Recent Review:</p>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</div>
				</RecentPick>
			</ReviewStatsDiv>
		</PreviewDiv>
	);
};
const TopWrap = styled.div`
	display: flex;
	height: max-content;
`;

const PreviewDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	height: max-content;
	background: var(--color-element-background);
	justify-content: flex-start;
	margin: 80px 50px;
	border-radius: 20px;
	box-shadow: 2px 5px 16px 0px var(--color-element-background);
	padding: 30px;
	position: fixed;
`;
export const PicDiv = styled.div`
	width: 100px;
	overflow: hidden;
	height: 100px;
	border-radius: 10px;
	margin-top: -75px;
	border: 3px solid var(--color-illustration-secondary);
`;
export const PreviewProfPic = styled.img`
	width: 100px;
`;

const SocialsNums = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 200px;
	background: var(--color-illustration-secondary);
	height: 40px;
	border-radius: 10px;
	margin-top: 10px;

	p {
		white-space: pre;
		color: var(--color-element-background);
		font-size: 20px;
	}
`;
const ReviewStatsDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: max-content;
	background: var(--color-illustration-secondary);
	border-radius: 10px;
	border-top-left-radius: 10px;
	margin-top: 15px;

	p {
		white-space: pre;
		color: var(--color-element-background);
		font-size: 15px;
		padding: 15px 10px;
	}
`;

const LabelDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	height: max-content;
	background: var(--color-illustration-secondary);
	border-radius: 10px;
	p {
		white-space: pre;
		color: var(--color-element-background);
		font-size: 17px;
		padding: 15px 0;
	}
`;
const NumDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 40px;
	background: var(--color-element-headline);
	border-radius: 10px;
	p {
		white-space: pre;
		color: var(--color-element-background);
		font-size: 25px;
		padding: 15px 0;
	}
`;
const StatDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 40px;
	background: var(--color-element-headline);
	border-radius: 10px;
	p {
		white-space: pre;
		color: var(--color-element-background);
		font-size: 15px;
		padding: 15px 0;
	}
`;
const FollowDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 175px;
	margin-top: 20px;

	p {
		white-space: pre;
		color: var(--color-element-headline);
	}
`;

const StyledFaBaby = styled(FaBaby)`
	font-size: 20px;
	color: var(--color-element-background);
`;

const RecentPick = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 10px;
	p {
		padding: 0 10px;
	}
	div {
		width: 100%;
		height: max-content;
		background: var(--color-element-headline);
		color: var(--color-element-background);
		padding: 15px;
		border-radius: 10px;
		margin-top: 10px;
	}
`;
export default ProfilePreview;
