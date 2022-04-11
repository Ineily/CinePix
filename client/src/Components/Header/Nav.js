import styled from "styled-components";
import { BsBellFill, BsChevronDown } from "react-icons/bs";
import imgsrc from "../../assets/Richard-Storey.jpg";
import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<BrowseNotSetNav>
			<BrowseWrap>
				<Browse>Browse</Browse>
			</BrowseWrap>
			<DropdownNotiWrap>
				<NotiWrap>
					<StyledFiBell />
					<StyledBsCD />
				</NotiWrap>
				<DropdownNotiDiv className="hover">
					<Dropdownul>
						<li>No new notifications</li>
					</Dropdownul>
				</DropdownNotiDiv>
			</DropdownNotiWrap>
			<DropdownProfWrap>
				<ProfWrap>
					<Profdiv>
						<ProfilePic src={imgsrc} alt="Profile Picture" />
					</Profdiv>
					<StyledBsCD />
				</ProfWrap>
				<DropdownProfDiv className="hover">
					<Dropdownul>
						<li>
							<StyledLink to="#">My Profile</StyledLink>
						</li>
						<li>
							<StyledLink to="#">Find Friends</StyledLink>
						</li>
						<li>
							<StyledLink to="#">Settings</StyledLink>
						</li>
						<li>
							<StyledLink to="#">Log Out</StyledLink>
						</li>
					</Dropdownul>
				</DropdownProfDiv>
			</DropdownProfWrap>
		</BrowseNotSetNav>
	);
};

const StyledFiBell = styled(BsBellFill)`
	color: var(--color-element-headline);
	font-size: 25px;
	opacity: 0.8;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;

const StyledBsCD = styled(BsChevronDown)`
	color: var(--color-element-headline);
	padding: 0 5px;
`;

const BrowseNotSetNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 350px;
	margin-top: -20px;
`;

const Profdiv = styled.div`
	height: 70px;
	border-radius: 50%;
	overflow: hidden;
`;
const ProfilePic = styled.img`
	width: 60px;
`;
const BrowseWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 130px;
	cursor: pointer;
`;
const NotiWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	cursor: pointer;
	position: relative;
`;
const ProfWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 110px;
	height: max-content;
	cursor: pointer;
	position: relative;
`;

const DropdownProfWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin-top: 10px; */
	position: relative;
	&:hover {
		margin-top: 161px;
		.hover {
			display: block;
		}
	}
`;
const DropdownNotiWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	&:hover {
		margin-top: 82px;
		.hover {
			width: 60px;
			display: block;
		}
	}
`;
const Browse = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 110px;
	height: 30px;
	outline: none;
	border: none;
	border-radius: 5px;
	background: var(--color-element-background);
	cursor: pointer;
	font-family: "Poppins", sans-serif;
	color: var(--color-element-headline);
	font-size: 15px;
`;
const DropdownProfDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 14px 0 0 0;
	background: red;
	background: var(--color-illustration-secondary);
	display: none;
`;

const DropdownNotiDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 36px 0 0 -190px;
	background: red;
	background: var(--color-illustration-secondary);
	display: none;
`;
const Dropdownul = styled.ul`
	border-radius: 0 0 5px 5px;
	background-color: var(--color-illustration-tertiary);
	margin-left: -40px;
	padding: 10px;
	hyphens: auto;
	min-width: max-content;
	li {
		padding: 10px 0 10px 0;
		border-top: 1px solid lightgrey;
		color: var(--color-element-headline);
		&:first-child {
			border-top: none;
			padding: 0 0 10px 0;
		}
		&:last-child {
			padding: 10px 0 0 0;
		}
	}
`;

const StyledLink = styled(Link)`
	color: var(--color-element-headline);
	text-decoration: none;
	&:hover {
		color: var(--color-illustration-highlight);
	}
`;
export default Nav;
